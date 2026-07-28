DROP TABLE IF EXISTS projects;

-- Projects
CREATE TABLE projects (
  id                SERIAL PRIMARY KEY,
  sort_order        INTEGER DEFAULT 0,
  
  title             VARCHAR(255) NOT NULL,
  
  company           VARCHAR(255) DEFAULT '',
  date_range        VARCHAR(100) DEFAULT '',
  short_description TEXT DEFAULT '',
  demo_source       VARCHAR(255) DEFAULT '',
  
  category          VARCHAR(50)[] DEFAULT '{}',
  tech_stack        TEXT[] DEFAULT '{}',
  details           TEXT[] DEFAULT '{}',
  images            TEXT[] DEFAULT '{}',
  links             JSONB DEFAULT '[]',
  
  created_at        TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at        TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Global Stats
CREATE TABLE IF NOT EXISTS global_stats (
  id INTEGER PRIMARY KEY DEFAULT 1,
  total_visitors INTEGER DEFAULT 0,
  total_likes INTEGER DEFAULT 0,
  contact_count INTEGER DEFAULT 0
);

-- Daily Visitors
CREATE TABLE IF NOT EXISTS daily_visitors (
  visit_date DATE PRIMARY KEY DEFAULT CURRENT_DATE,
  visitors_count INTEGER DEFAULT 0
);