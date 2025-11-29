const express = require('express')
const router = express.Router()
const { supabase } = require('../supabase')

// Get all reports
router.get('/', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        const { data, error } = await supabase
            .from('reports')
            .select(`
        *,
        analyst:users(full_name, email),
        tags:report_tags(tag:tags(*))
      `)
            .order('created_at', { ascending: false })

        if (error) throw error

        res.json({ success: true, data })
    } catch (error) {
        console.error('Error fetching reports:', error)
        res.status(500).json({ error: error.message })
    }
})

// Get single report
router.get('/:id', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        const { data, error } = await supabase
            .from('reports')
            .select(`
        *,
        analyst:users(full_name, email),
        tags:report_tags(tag:tags(*)),
        comments:comments(*, user:users(full_name, email)),
        attachments(*)
      `)
            .eq('id', req.params.id)
            .single()

        if (error) throw error

        res.json({ success: true, data })
    } catch (error) {
        console.error('Error fetching report:', error)
        res.status(500).json({ error: error.message })
    }
})

// Create report
router.post('/', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        const { data, error } = await supabase
            .from('reports')
            .insert(req.body)
            .select()
            .single()

        if (error) throw error

        res.json({ success: true, data })
    } catch (error) {
        console.error('Error creating report:', error)
        res.status(500).json({ error: error.message })
    }
})

// Update report
router.put('/:id', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        const { data, error } = await supabase
            .from('reports')
            .update(req.body)
            .eq('id', req.params.id)
            .select()
            .single()

        if (error) throw error

        res.json({ success: true, data })
    } catch (error) {
        console.error('Error updating report:', error)
        res.status(500).json({ error: error.message })
    }
})

// Delete report
router.delete('/:id', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(503).json({ error: 'Database not configured' })
        }

        const { error } = await supabase
            .from('reports')
            .delete()
            .eq('id', req.params.id)

        if (error) throw error

        res.json({ success: true, message: 'Report deleted' })
    } catch (error) {
        console.error('Error deleting report:', error)
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
