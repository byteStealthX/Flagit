import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('⚠️  Supabase credentials not found. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env')
}

// Create Supabase client for frontend
export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Helper functions for common operations
export const api = {
    // Get all reports
    async getReports() {
        if (!supabase) return { data: [], error: 'Supabase not configured' }

        const { data, error } = await supabase
            .from('reports')
            .select(`
        *,
        analyst:users(full_name, email),
        tags:report_tags(tag:tags(*))
      `)
            .order('created_at', { ascending: false })

        return { data, error }
    },

    // Get single report
    async getReport(id) {
        if (!supabase) return { data: null, error: 'Supabase not configured' }

        const { data, error } = await supabase
            .from('reports')
            .select(`
        *,
        analyst:users(full_name, email),
        tags:report_tags(tag:tags(*)),
        comments:comments(*, user:users(full_name, email)),
        attachments(*)
      `)
            .eq('id', id)
            .single()

        return { data, error }
    },

    // Create report
    async createReport(report) {
        if (!supabase) return { data: null, error: 'Supabase not configured' }

        const { data, error } = await supabase
            .from('reports')
            .insert(report)
            .select()
            .single()

        return { data, error }
    },

    // Update report
    async updateReport(id, updates) {
        if (!supabase) return { data: null, error: 'Supabase not configured' }

        const { data, error } = await supabase
            .from('reports')
            .update(updates)
            .eq('id', id)
            .select()
            .single()

        return { data, error }
    },

    // Delete report
    async deleteReport(id) {
        if (!supabase) return { error: 'Supabase not configured' }

        const { error } = await supabase
            .from('reports')
            .delete()
            .eq('id', id)

        return { error }
    },

    // Get analytics
    async getAnalytics() {
        if (!supabase) return { data: [], error: 'Supabase not configured' }

        const { data, error } = await supabase
            .from('analytics')
            .select('*')
            .order('date', { ascending: false })
            .limit(30)

        return { data, error }
    },

    // Add comment
    async addComment(reportId, content, userId) {
        if (!supabase) return { data: null, error: 'Supabase not configured' }

        const { data, error } = await supabase
            .from('comments')
            .insert({
                report_id: reportId,
                user_id: userId,
                content
            })
            .select(`
        *,
        user:users(full_name, email)
      `)
            .single()

        return { data, error }
    },

    // Get current user
    async getCurrentUser() {
        if (!supabase) return { data: null, error: 'Supabase not configured' }

        const { data: { user }, error } = await supabase.auth.getUser()
        return { data: user, error }
    }
}
