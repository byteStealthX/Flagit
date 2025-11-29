const express = require('express')
const router = express.Router()
const { supabase } = require('../supabase')

// Get analytics data
router.get('/', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        const { data, error } = await supabase
            .from('analytics')
            .select('*')
            .order('date', { ascending: false })
            .limit(30)

        if (error) throw error

        res.json({ success: true, data })
    } catch (error) {
        console.error('Error fetching analytics:', error)
        res.status(500).json({ error: error.message })
    }
})

// Get dashboard stats
router.get('/dashboard', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        // Get total reports count
        const { count: totalReports } = await supabase
            .from('reports')
            .select('*', { count: 'exact', head: true })

        // Get high priority count
        const { count: highPriority } = await supabase
            .from('reports')
            .select('*', { count: 'exact', head: true })
            .eq('priority', 'High')

        // Get under review count
        const { count: underReview } = await supabase
            .from('reports')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'Under Review')

        // Get latest analytics
        const { data: latestAnalytics } = await supabase
            .from('analytics')
            .select('*')
            .order('date', { ascending: false })
            .limit(1)
            .single()

        res.json({
            success: true,
            data: {
                totalReports,
                highPriority,
                underReview,
                analytics: latestAnalytics
            }
        })
    } catch (error) {
        console.error('Error fetching dashboard stats:', error)
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
