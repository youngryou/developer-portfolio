DROP TABLE IF EXISTS projects;

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