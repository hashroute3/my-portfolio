/**
 * Canonical list for `/publications/` — rendered by `ScholarlyPublication.astro`.
 * Add rows to `journalArticles`, `conferencePapers`, or `preprintsAndTechnical`.
 * Optional fields: omit or leave unset; the UI shows an em dash when a link is missing.
 */

export type PublicationSection = 'journal' | 'conference' | 'preprint';

export interface Publication {
  id: string;
  section: PublicationSection;
  /** Paper title */
  title: string;
  /** Order matters; use full names, including "Mahendran Vasagam" where applicable */
  authors: string[];
  /** Journal name, proceedings title, or preprint server */
  venue: string;
  year: string;
  /** Full https://doi.org/... URL */
  doiUrl?: string;
  /** Publisher / venue landing page (when different from the DOI resolver) */
  publisherUrl?: string;
  /** Site-relative e.g. /papers/query-resource-prediction.pdf or absolute URL */
  pdfUrl?: string;
  googleScholarUrl?: string;
  bibtex: string;
}

const placeholderJournalArticle: Publication = {
  id: 'placeholder-journal',
  section: 'journal',
  title: 'Placeholder - journal article title',
  authors: ['Mahendran Vasagam', 'Coauthor Name'],
  venue: 'Journal name',
  year: 'YYYY',
  doiUrl: 'https://doi.org/REPLACE_WITH_DOI',
  publisherUrl: 'https://publisher.example.com/article',
  pdfUrl: '/papers/placeholder-journal-article.pdf',
  googleScholarUrl: 'https://scholar.google.com/scholar?q=REPLACE_WITH_QUERY',
  bibtex: `@article{placeholderJournalYYYY,
  title={Placeholder - journal article title},
  author={Vasagam, Mahendran and Name, Coauthor},
  journal={Journal name},
  year={YYYY},
  doi={REPLACE_WITH_DOI},
  url={https://publisher.example.com/article}
}`,
};

const placeholderConferencePaper: Publication = {
  id: 'placeholder-conference',
  section: 'conference',
  title: 'Placeholder - conference paper title',
  authors: ['Mahendran Vasagam', 'Coauthor Name'],
  venue: 'Conference name (abbreviation)',
  year: 'YYYY',
  doiUrl: 'https://doi.org/REPLACE_WITH_DOI',
  publisherUrl: 'https://publisher.example.com/proceedings-paper',
  pdfUrl: '/papers/placeholder-conference-paper.pdf',
  googleScholarUrl: 'https://scholar.google.com/scholar?q=REPLACE_WITH_QUERY',
  bibtex: `@inproceedings{placeholderConferenceYYYY,
  title={Placeholder - conference paper title},
  author={Vasagam, Mahendran and Name, Coauthor},
  booktitle={Conference name (abbreviation)},
  year={YYYY},
  doi={REPLACE_WITH_DOI},
  url={https://publisher.example.com/proceedings-paper}
}`,
};

const placeholderPreprint: Publication = {
  id: 'placeholder-preprint',
  section: 'preprint',
  title: 'Placeholder - preprint or technical article title',
  authors: ['Mahendran Vasagam'],
  venue: 'arXiv / technical report / blog series',
  year: 'YYYY',
  doiUrl: 'https://doi.org/REPLACE_WITH_DOI',
  publisherUrl: 'https://publisher.example.com/preprint',
  pdfUrl: '/papers/placeholder-preprint.pdf',
  googleScholarUrl: 'https://scholar.google.com/scholar?q=REPLACE_WITH_QUERY',
  bibtex: `@misc{placeholderPreprintYYYY,
  title={Placeholder - preprint or technical article title},
  author={Vasagam, Mahendran},
  year={YYYY},
  howpublished={Preprint},
  doi={REPLACE_WITH_DOI},
  url={https://publisher.example.com/preprint}
}`,
};

export const journalArticles: Publication[] = [
  {
    id: 'ijisae-data-pipelines-security',
    section: 'journal',
    title:
      'Ensuring Security in Modern Data Pipelines: Practical Strategies for Data Engineers',
    authors: ['Mahendran Vasagam'],
    venue: 'International Journal of Intelligent Systems and Applications in Engineering',
    year: '2024',
    doiUrl: 'https://doi.org/10.17762/ijisae.v12i22s.8090',
    publisherUrl: 'https://ijisae.org/index.php/IJISAE/article/view/8090',
    pdfUrl: '/papers/EnsuringSecurityinModernDataPipelinesPracticalStrategiesforDataEngineers.pdf',
    googleScholarUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gRnU9AMAAAAJ&citation_for_view=gRnU9AMAAAAJ:_OXeSy2IsFwC',
    bibtex: `@article{vasagam2024ensuring,
  title={Ensuring Security in Modern Data Pipelines: Practical Strategies for Data Engineers},
  volume={12},
  url={https://ijisae.org/index.php/IJISAE/article/view/8090},
  number={22s},
  journal={International Journal of Intelligent Systems and Applications in Engineering},
  author={Mahendran Vasagam},
  year={2024},
  month={Aug},
  pages={2401},
  doi={10.17762/ijisae.v12i22s.8090}
}`,
  },
  {
    id: 'jicrcr-devops-cicd',
    section: 'journal',
    title:
      'Devops Lifecycle Management And Cloud Migration Assessments: A Security-Driven CICD Perspective',
    authors: ['Ramesh Krishna Mahimalur', 'Mahendran Vasagam', 'Devi Manoharan'],
    venue: 'Journal of International Crisis and Risk Communication Research',
    year: '2024',
    doiUrl: 'https://doi.org/10.63278/jicrcr.vi.3670',
    publisherUrl: 'https://jicrcr.com/index.php/jicrcr/article/view/3670',
    pdfUrl: '/papers/Devops_Lifecycle_Management_And_Cloud_Migration_As.pdf',
    googleScholarUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gRnU9AMAAAAJ&citation_for_view=gRnU9AMAAAAJ:ZzlSgRqYykMC',
    bibtex: `@article{Mahimalur_Vasagam_Manoharan_2024,
  title={Devops Lifecycle Management And Cloud Migration Assessments: A Security-Driven CICD Perspective},
  url={https://jicrcr.com/index.php/jicrcr/article/view/3670},
  DOI={10.63278/jicrcr.vi.3670},
  abstractNote={&amp;lt;p&amp;gt;The widespread adoption of DevOps practices and cloud-native architectures has transformed software delivery by enabling rapid, automated, and scalable application deployment. However, this transformation has also intensified security, compliance, and operational risks across the DevOps lifecycle, particularly during cloud migration initiatives. This study examines DevOps lifecycle management and cloud migration assessments from a security-driven continuous integration and continuous delivery (CI/CD) perspective. A structured analytical framework was employed to map security controls, operational metrics, and migration-specific risk parameters across lifecycle stages and CI/CD pipelines. The results reveal that security risks are concentrated in early development and integration stages but decrease progressively with the integration of security testing, policy enforcement, and continuous monitoring. While security-driven CI/CD pipelines introduce minor trade-offs in deployment frequency, they significantly enhance system resilience, reduce failure rates, and improve incident detection and recovery. Cloud migration assessments further demonstrate improved security posture and compliance alignment in post-migration environments, although persistent data protection risks necessitate ongoing governance. Overall, the study highlights that embedding security throughout the DevOps lifecycle enables organizations to balance delivery speed with robust cloud security and operational resilience.&amp;lt;/p&amp;gt;},
  journal={Journal of International Crisis and Risk Communication Research},
  author={Mahimalur, Ramesh Krishna and Vasagam, Mahendran and Manoharan, Devi},
  year={2024},
  month={Oct.},
  pages={3314--3322}
}`,
  },
  {
    id: 'zenodo-devops-automation',
    section: 'journal',
    title:
      'From Assessment to Automation: DevOps Lifecycle Management for Secure Cloud Migration and CICD Implementation',
    authors: ['Ramesh Krishna Mahimalur', 'Mahendran Vasagam', 'Devi Manoharan'],
    venue: 'Power System Technology',
    year: '2025',
    doiUrl: 'https://doi.org/10.5281/zenodo.18639740',
    publisherUrl: 'https://www.pst-journal.org/wp-content/uploads/2025-3-25.pdf',
    pdfUrl:
      '/papers/FromAssessmenttoAutomationDevOpsLifecycleManagementforSecureCloudMigrationandCICDImplementation.pdf',
    googleScholarUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gRnU9AMAAAAJ&citation_for_view=gRnU9AMAAAAJ:nZcligLrVowC',
    bibtex: `@article{mahimalur2025assessment,
  title={From Assessment to Automation: {DevOps} Lifecycle Management for Secure Cloud Migration and {CICD} Implementation},
  author={Mahimalur, Ramesh Krishna and Vasagam, Mahendran and Manoharan, Devi},
  journal={Power System Technology},
  year={2025},
  doi={10.5281/zenodo.18639740},
  url={https://www.pst-journal.org/wp-content/uploads/2025-3-25.pdf}
}`,
  },
  {
    id: 'ieee-access-query-embeddings',
    section: 'journal',
    title: 'Learning Execution Plan Embeddings for Multi-Dimensional Query Resource Prediction',
    authors: ['Mahendran Vasagam', 'Ashok Kumar', 'Anshul Garg'],
    venue: 'IEEE Access',
    year: '2026',
    doiUrl: 'https://doi.org/10.1109/ACCESS.2026.3670242',
    publisherUrl: 'https://ieeexplore.ieee.org/document/11421305',
    pdfUrl: '/papers/Learning_Execution_Plan_Embeddings_for_Multi-Dimen.pdf',
    googleScholarUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gRnU9AMAAAAJ&citation_for_view=gRnU9AMAAAAJ:P7Ujq4OLJYoC',
    bibtex: `@article{vasagam2026learning,
  title={Learning Execution Plan Embeddings for Multi-Dimensional Query Resource Prediction},
  author={Vasagam, Mahendran and Kumar, Ashok and Garg, Anshul},
  journal={IEEE Access},
  year={2026},
  doi={10.1109/ACCESS.2026.3670242},
  url={https://ieeexplore.ieee.org/document/11421305}
}`,
  },
  placeholderJournalArticle,
];

export const conferencePapers: Publication[] = [
  placeholderConferencePaper,
];

export const preprintsAndTechnical: Publication[] = [
  {
    id: 'medium-when-ai-knows-too-much',
    section: 'preprint',
    title:
      'When AI Knows Too Much: Why the Future of Data Security Is About Making Models Forget',
    authors: ['Mahendran Vasagam'],
    venue: 'Medium',
    year: '2025',
    publisherUrl:
      'https://medium.com/@mahendran_v3/when-ai-knows-too-much-why-the-future-of-data-security-is-about-making-models-forget-87f44200ab79',
    bibtex: `@misc{vasagam2025whenaiknowstoomuch,
  title={When AI Knows Too Much: Why the Future of Data Security Is About Making Models Forget},
  author={Vasagam, Mahendran},
  year={2025},
  howpublished={Medium},
  url={https://medium.com/@mahendran_v3/when-ai-knows-too-much-why-the-future-of-data-security-is-about-making-models-forget-87f44200ab79}
}`,
  },
  {
    id: 'medium-beyond-tagging-cost-attribution',
    section: 'preprint',
    title: 'Beyond Tagging: A Blueprint for Real-Time Cost Attribution in Data Platforms',
    authors: ['Mahendran Vasagam'],
    venue: 'Medium',
    year: '2025',
    publisherUrl:
      'https://medium.com/@mahendran_v3/beyond-tagging-a-blueprint-for-real-time-cost-attribution-in-data-platforms-c705e8a04016',
    bibtex: `@misc{vasagam2025beyondtagging,
  title={Beyond Tagging: A Blueprint for Real-Time Cost Attribution in Data Platforms},
  author={Vasagam, Mahendran},
  year={2025},
  howpublished={Medium},
  url={https://medium.com/@mahendran_v3/beyond-tagging-a-blueprint-for-real-time-cost-attribution-in-data-platforms-c705e8a04016}
}`,
  },
  placeholderPreprint,
];

export function getAllPublications(): Publication[] {
  return [...journalArticles, ...conferencePapers, ...preprintsAndTechnical];
}
