import type { Publication } from '../data/publications';

/** Publications included in sitemap / per-article pages (excludes template rows). */
export function isIndexablePublication(p: Publication): boolean {
  return p.year !== 'YYYY' && !p.id.startsWith('placeholder');
}

export function absoluteUrl(site: URL, path: string): string {
  return new URL(path.replace(/^\//, ''), site).href;
}

function doiForCitation(doiUrl: string | undefined): string | undefined {
  if (!doiUrl) return undefined;
  const m = doiUrl.match(/doi\.org\/(.+)$/i);
  return m ? decodeURIComponent(m[1]) : undefined;
}

/** Google Scholar / Highwire Press–style fields (one article per HTML page). */
export function buildCitationMeta(
  p: Publication,
  site: URL,
): { name: string; content: string }[] {
  const articleUrl = absoluteUrl(site, `/publications/${p.id}/`);
  const tags: { name: string; content: string }[] = [
    { name: 'citation_title', content: p.title },
    { name: 'citation_abstract_html_url', content: articleUrl },
  ];
  for (const author of p.authors) {
    tags.push({ name: 'citation_author', content: author });
  }
  const y = p.year.match(/^\d{4}/)?.[0] ?? p.year;
  tags.push({ name: 'citation_publication_date', content: y });
  if (p.section === 'journal') {
    tags.push({ name: 'citation_journal_title', content: p.venue });
  } else if (p.section === 'conference') {
    tags.push({ name: 'citation_conference_title', content: p.venue });
  } else {
    tags.push({ name: 'citation_technical_report_institution', content: p.venue });
  }
  const doi = doiForCitation(p.doiUrl);
  if (doi) {
    tags.push({ name: 'citation_doi', content: doi });
  }
  if (p.pdfUrl) {
    tags.push({
      name: 'citation_pdf_url',
      content: absoluteUrl(site, p.pdfUrl),
    });
  }
  return tags;
}

export function scholarlyArticleJsonLd(
  p: Publication,
  site: URL,
  pageUrl: string,
): Record<string, unknown> {
  const doi = doiForCitation(p.doiUrl);
  const pdfAbs = p.pdfUrl ? absoluteUrl(site, p.pdfUrl) : undefined;
  const primary =
    p.doiUrl ?? p.publisherUrl ?? (p.pdfUrl ? absoluteUrl(site, p.pdfUrl) : pageUrl);

  const article: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    '@id': pageUrl,
    name: p.title,
    headline: p.title,
    author: p.authors.map((name) => ({
      '@type': 'Person',
      name,
    })),
    isPartOf: {
      '@type': p.section === 'journal' ? 'Periodical' : 'CreativeWork',
      name: p.venue,
    },
    datePublished: /^\d{4}$/.test(p.year) ? `${p.year}-01-01` : p.year,
    url: primary,
    mainEntityOfPage: pageUrl,
  };

  if (doi) {
    article.identifier = `doi:${doi}`;
  }
  if (p.googleScholarUrl) {
    article.sameAs = [p.googleScholarUrl];
  }
  if (pdfAbs) {
    article.associatedMedia = {
      '@type': 'MediaObject',
      contentUrl: pdfAbs,
      encodingFormat: 'application/pdf',
    };
  }

  return article;
}

export function publicationsItemListJsonLd(
  items: Publication[],
  site: URL,
): Record<string, unknown> {
  const indexable = items.filter(isIndexablePublication);
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Publications — Mahendran Vasagam',
    numberOfItems: indexable.length,
    itemListElement: indexable.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ScholarlyArticle',
        name: p.title,
        url: absoluteUrl(site, `/publications/${p.id}/`),
      },
    })),
  };
}
