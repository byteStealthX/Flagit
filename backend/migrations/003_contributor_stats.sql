-- Gamification System: Contributor Stats Table
-- Automatically trigger: XP, badge unlocks, and contributor analytics

CREATE TABLE IF NOT EXISTS contributor_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  xp INTEGER DEFAULT 0 CHECK (xp >= 0),
  verified_count INTEGER DEFAULT 0 CHECK (verified_count >= 0),
  rejected_count INTEGER DEFAULT 0 CHECK (rejected_count >= 0),
  submitted_count INTEGER DEFAULT 0 CHECK (submitted_count >= 0),
  evidence_count INTEGER DEFAULT 0 CHECK (evidence_count >= 0),
  badges JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for leaderboard queries
CREATE INDEX idx_contributor_stats_xp ON contributor_stats(xp DESC);
CREATE INDEX idx_contributor_stats_verified ON contributor_stats(verified_count DESC);

-- Enable Row Level Security
ALTER TABLE contributor_stats ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own stats
CREATE POLICY "Users can read own stats"
  ON contributor_stats
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Admins can read all stats
CREATE POLICY "Admins can read all stats"
  ON contributor_stats
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Policy: Service role can insert/update (Edge Functions only)
CREATE POLICY "Service role can manage stats"
  ON contributor_stats
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_contributor_stats_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contributor_stats_updated_at
  BEFORE UPDATE ON contributor_stats
  FOR EACH ROW
  EXECUTE FUNCTION update_contributor_stats_timestamp();

-- Initialize stats for existing users
INSERT INTO contributor_stats (user_id)
SELECT id FROM auth.users
ON CONFLICT (user_id) DO NOTHING;

COMMENT ON TABLE contributor_stats IS 'Tracks user XP, badges, and contribution metrics for gamification';
COMMENT ON COLUMN contributor_stats.xp IS 'Total experience points earned';
COMMENT ON COLUMN contributor_stats.verified_count IS 'Number of flags verified';
COMMENT ON COLUMN contributor_stats.rejected_count IS 'Number of flags rejected';
COMMENT ON COLUMN contributor_stats.submitted_count IS 'Number of flags submitted';
COMMENT ON COLUMN contributor_stats.evidence_count IS 'Number of successful evidence extractions';
COMMENT ON COLUMN contributor_stats.badges IS 'Array of unlocked badge names';
