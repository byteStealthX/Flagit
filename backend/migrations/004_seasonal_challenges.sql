-- Seasonal Challenges & Streak Rewards System
-- Extends the base gamification with time-limited seasons and daily activity streaks

-- ============================================================
-- TABLE: season_config
-- Stores seasonal challenge configuration and rules
-- ============================================================

CREATE TABLE IF NOT EXISTS season_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  season_name TEXT NOT NULL,
  season_start TIMESTAMPTZ NOT NULL,
  season_end TIMESTAMPTZ NOT NULL,
  challenge_goals JSONB DEFAULT '{
    "verified_flags": 10,
    "evidence_extractions": 5,
    "streak_days": 5,
    "seasonal_xp": 150
  }'::jsonb,
  rewards JSONB DEFAULT '{
    "badge": "Season Champion",
    "bonus_xp": 50,
    "rank_boost": 10
  }'::jsonb,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Only one active season at a time
CREATE UNIQUE INDEX idx_active_season ON season_config(is_active) WHERE is_active = true;

-- ============================================================
-- TABLE: contributor_progress
-- Tracks user progress in current season and streak stats
-- ============================================================

CREATE TABLE IF NOT EXISTS contributor_progress (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Streak tracking
  current_streak_days INTEGER DEFAULT 0 CHECK (current_streak_days >= 0),
  longest_streak_days INTEGER DEFAULT 0 CHECK (longest_streak_days >= 0),
  last_activity_date DATE,
  
  -- Seasonal progress
  seasonal_points INTEGER DEFAULT 0 CHECK (seasonal_points >= 0),
  seasonal_badges JSONB DEFAULT '[]'::jsonb,
  seasonal_rank INTEGER DEFAULT 0,
  challenge_completed BOOLEAN DEFAULT false,
  
  -- Seasonal goal progress
  season_verified_count INTEGER DEFAULT 0,
  season_evidence_count INTEGER DEFAULT 0,
  season_submissions INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for leaderboard queries
CREATE INDEX idx_seasonal_points ON contributor_progress(seasonal_points DESC);
CREATE INDEX idx_current_streak ON contributor_progress(current_streak_days DESC);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE season_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE contributor_progress ENABLE ROW LEVEL SECURITY;

-- Anyone can read active season config
CREATE POLICY "Anyone can read active seasons"
  ON season_config FOR SELECT
  USING (is_active = true);

-- Admins can manage seasons
CREATE POLICY "Admins can manage seasons"
  ON season_config FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Users read own progress
CREATE POLICY "Users can read own progress"
  ON contributor_progress FOR SELECT
  USING (auth.uid() = user_id);

-- Users can read all progress for leaderboard
CREATE POLICY "Users can read all progress for leaderboard"
  ON contributor_progress FOR SELECT
  USING (true);

-- Service role manages progress
CREATE POLICY "Service role manages progress"
  ON contributor_progress FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- ============================================================
-- TRIGGERS
-- ============================================================

-- Update timestamp on season_config
CREATE OR REPLACE FUNCTION update_season_config_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_season_config_updated_at
  BEFORE UPDATE ON season_config
  FOR EACH ROW
  EXECUTE FUNCTION update_season_config_timestamp();

-- Update timestamp on contributor_progress
CREATE OR REPLACE FUNCTION update_contributor_progress_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contributor_progress_updated_at
  BEFORE UPDATE ON contributor_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_contributor_progress_timestamp();

-- ============================================================
-- INITIAL DATA
-- ============================================================

-- Create first season (example)
INSERT INTO season_config (season_name, season_start, season_end)
VALUES (
  'Winter 2024',
  NOW(),
  NOW() + INTERVAL '30 days'
)
ON CONFLICT DO NOTHING;

-- Initialize progress for existing users
INSERT INTO contributor_progress (user_id)
SELECT id FROM auth.users
ON CONFLICT (user_id) DO NOTHING;

COMMENT ON TABLE season_config IS 'Stores seasonal challenge configurations with goals and rewards';
COMMENT ON TABLE contributor_progress IS 'Tracks user daily streaks and seasonal progress';
COMMENT ON COLUMN contributor_progress.current_streak_days IS 'Current daily activity streak';
COMMENT ON COLUMN contributor_progress.longest_streak_days IS 'Personal best streak record';
COMMENT ON COLUMN contributor_progress.seasonal_points IS 'Points earned in current season';
