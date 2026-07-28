-- Global Stats (Add tracking columns for external links)
ALTER TABLE global_stats ADD COLUMN IF NOT EXISTS cv_clicks INTEGER DEFAULT 0;
ALTER TABLE global_stats ADD COLUMN IF NOT EXISTS github_clicks INTEGER DEFAULT 0;
ALTER TABLE global_stats ADD COLUMN IF NOT EXISTS linkedin_clicks INTEGER DEFAULT 0;