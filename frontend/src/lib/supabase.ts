// Supabase Client for Frontend
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hpqmnsjmehmyillqhqgm.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_secret_QqIN9IHBSM9T3n_zg-aMIw_Vg9v7F63'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export API methods
export const api = {
    // Auth
    async login(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        return data
    },

    async signup(email: string, password: string, fullName?: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { full_name: fullName } }
        })
        if (error) throw error
        return data
    },

    async logout() {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    },

    async getCurrentUser() {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (error) throw error
        return user
    },

    // Reports
    async getReports() {
        const { data, error } = await supabase.from('reports').select('*')
        if (error) throw error
        return data
    },

    async createReport(report: any) {
        const { data, error } = await supabase.from('reports').insert(report).select()
        if (error) throw error
        return data
    },

    // Analytics
    async getDashboardStats() {
        const { count } = await supabase.from('reports').select('*', { count: 'exact', head: true })
        return { totalReports: count || 0 }
    }
}
