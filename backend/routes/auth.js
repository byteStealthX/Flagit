const express = require('express');
const router = express.Router();
const { supabase } = require('../supabase');

// Sign Up
router.post('/signup', async (req, res) => {
    try {
        const { email, password, full_name } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password are required'
            });
        }

        // Create user in Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: full_name || ''
                }
            }
        });

        if (error) throw error;

        res.json({
            success: true,
            message: 'User created successfully. Please check your email to verify your account.',
            user: data.user,
            session: data.session
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(400).json({
            error: error.message || 'Failed to create user account'
        });
    }
});

// Sign In
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password are required'
            });
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;

        res.json({
            success: true,
            message: 'Login successful',
            user: data.user,
            session: data.session,
            access_token: data.session.access_token
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(401).json({
            error: error.message || 'Invalid email or password'
        });
    }
});

// Sign Out
router.post('/logout', async (req, res) => {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) throw error;

        res.json({
            success: true,
            message: 'Logged out successfully'
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            error: error.message || 'Failed to logout'
        });
    }
});

// Get Current User (requires auth token)
router.get('/me', async (req, res) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ error: 'No authorization token provided' });
        }

        const { data: { user }, error } = await supabase.auth.getUser(token);

        if (error) throw error;

        res.json({
            success: true,
            user
        });
    } catch (error) {
        console.error('Get user error:', error);
        res.status(401).json({
            error: error.message || 'Invalid or expired token'
        });
    }
});

// Forgot Password
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${req.headers.origin}/auth/reset-password`
        });

        if (error) throw error;

        res.json({
            success: true,
            message: 'Password reset email sent. Please check your inbox.'
        });
    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(400).json({
            error: error.message || 'Failed to send reset email'
        });
    }
});

// Reset Password
router.post('/reset-password', async (req, res) => {
    try {
        const { password, access_token } = req.body;

        if (!password || !access_token) {
            return res.status(400).json({
                error: 'Password and access token are required'
            });
        }

        const { error } = await supabase.auth.updateUser({
            password: password
        });

        if (error) throw error;

        res.json({
            success: true,
            message: 'Password updated successfully'
        });
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(400).json({
            error: error.message || 'Failed to reset password'
        });
    }
});

module.exports = router;
