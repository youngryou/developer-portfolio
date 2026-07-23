TRUNCATE TABLE projects RESTART IDENTITY;

-- ============================================================
-- PROJECT: Carrect
-- ============================================================
INSERT INTO projects (
  id,
  sort_order,
  title,
  company,
  date_range,
  short_description,
  demo_source,
  category,
  tech_stack,
  details,
  images,
  links
) VALUES (
  -- id
  1,
  -- sort_order
  1,
  -- title (REQUIRED)
  'Carrect',
  -- company
  'Independent Development',
  -- date_range
  'Sep 2025 - Jan 2026',
  -- short_description
  'A reverse auction platform for the New Zealand vehicle repair market, allowing users to request and compare panel beating quotes.',
  -- demo_source
  '/projects/carrect/carrect-demo.webm',
  -- category
  ARRAY['Full-Stack', 'Backend'],
  -- tech_stack
  ARRAY['JavaScript', 'PHP', 'WordPress', 'MySQL', 'DigitalOcean'],
  -- details
  ARRAY[
    'Role: Sole Developer. Engineered the core application logic by implementing Layered Architecture (Domain, HTTP, Infra) within a custom plug-in structure and the database architecture from scratch.',
    'Outcome: Built and deployed an MVP to staging in just four months. Currently polishing the codebase and refining the database architecture to ensure a stable, compliant production launch.'
  ],
  -- images
  ARRAY[
    '/projects/carrect/carrect-1.webp',
    '/projects/carrect/carrect-2.webp',
    '/projects/carrect/carrect-3.webp',
    '/projects/carrect/carrect-4.webp',
    '/projects/carrect/carrect-5.webp',
    '/projects/carrect/carrect-6.webp',
    '/projects/carrect/carrect-7.webp'
  ],
  -- links
  '[
    {"label": "Launch Pending", "url": "#"}
  ]'::jsonb
);

-- ============================================================
-- PROJECT: Syntax Sprint
-- ============================================================
INSERT INTO projects (
  id,
  sort_order,
  title,
  company,
  date_range,
  short_description,
  demo_source,
  category,
  tech_stack,
  details,
  images,
  links
) VALUES (
  -- id
  2,
  -- sort_order
  2,
  -- title (REQUIRED)
  'Syntax Sprint',
  -- company
  'Dev Academy Aotearoa',
  -- date_range
  'Jun 2026',
  -- short_description
  'A fast paced web based code typing game designed to help developers improve their syntax familiarity and typing speed.',
  -- demo_source
  '',
  -- category
  ARRAY['Full-Stack', 'Frontend'],
  -- tech_stack
  ARRAY['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
  -- details
  ARRAY[
    'Role: Product Owner and full-stack developer. Managed the project scope, designed the component architecture, and led the team from initial concept to successful MVP launch.',
    'Outcome: Completed the core MVP ahead of schedule. Implemented real-time typing accuracy tracking and data persistence for user scores.'
  ],
  -- images
  ARRAY[
    '/projects/syntax_sprint/syntax_sprint-1.webp',
    '/projects/syntax_sprint/syntax_sprint-2.webp',
    '/projects/syntax_sprint/syntax_sprint-3.webp',
    '/projects/syntax_sprint/syntax_sprint-4.webp',
    '/projects/syntax_sprint/syntax_sprint-5.webp'
  ],
  -- links
  '[
    {"label": "Live Demo", "url": "https://syntax-sprint.onrender.com"},
    {"label": "GitHub Repo", "url": "https://github.com/youngryou/syntax-sprint"}
  ]'::jsonb
);
