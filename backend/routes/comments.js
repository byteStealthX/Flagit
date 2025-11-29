const express = require('express')
const router = express.Router()
const { supabase } = require('../supabase')

// Add comment to report
router.post('/', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        const { report_id, user_id, content } = req.body

        const { data, error } = await supabase
            .from('comments')
            .insert({ report_id, user_id, content })
            .select(`
        *,
        user:users(full_name, email)
      `)
            .single()

        if (error) throw error

        res.json({ success: true, data })
    } catch (error) {
        console.error('Error adding comment:', error)
        res.status(500).json({ error: error.message })
    }
})

// Get comments for report
router.get('/report/:reportId', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        const { data, error } = await supabase
            .from('comments')
            .select(`
        *,
        user:users(full_name, email)
      `)
            .eq('report_id', req.params.reportId)
            .order('created_at', { ascending: true })

        if (error) throw error

        res.json({ success: true, data })
    } catch (error) {
        console.error('Error fetching comments:', error)
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
