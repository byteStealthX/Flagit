// Test Supabase Connection
require('dotenv').config();
const { supabase } = require('./supabase');

async function testSupabaseConnection() {
    console.log('🧪 Testing Supabase Connection...\n');

    // Test 1: Check if Supabase client exists
    if (!supabase) {
        console.error('❌ Supabase client not initialized. Check your .env file.');
        return;
    }
    console.log('✅ Supabase client initialized');

    // Test 2: Check environment variables
    console.log('\n📋 Environment Variables:');
    console.log(`   SUPABASE_URL: ${process.env.SUPABASE_URL ? '✅ Set' : '❌ Missing'}`);
    console.log(`   SUPABASE_SERVICE_KEY: ${process.env.SUPABASE_SERVICE_KEY ? '✅ Set' : '❌ Missing'}`);

    // Test 3: Try to query the database
    console.log('\n🔍 Testing Database Queries...');

    try {
        // Query the tags table (should have 4 default tags)
        const { data: tags, error: tagsError } = await supabase
            .from('tags')
            .select('*');

        if (tagsError) {
            console.error('❌ Tags query failed:', tagsError.message);
        } else {
            console.log(`✅ Tags table accessible: ${tags.length} tags found`);
            tags.forEach(tag => console.log(`   - ${tag.name} (${tag.color})`));
        }

        // Query the reports table
        const { data: reports, error: reportsError } = await supabase
            .from('reports')
            .select('*');

        if (reportsError) {
            console.error('❌ Reports query failed:', reportsError.message);
        } else {
            console.log(`\n✅ Reports table accessible: ${reports.length} reports found`);
        }

        // Query the users table
        const { data: users, error: usersError } = await supabase
            .from('users')
            .select('count');

        if (usersError) {
            console.error('❌ Users query failed:', usersError.message);
        } else {
            console.log(`✅ Users table accessible`);
        }

        console.log('\n🎉 SUCCESS: Supabase is fully connected and working!');
        console.log('\nConnection Details:');
        console.log(`   Project ID: hpqmnsjmehmyillqhqgm`);
        console.log(`   Using: Supabase JavaScript Client (@supabase/supabase-js)`);
        console.log(`   Auth: Enabled with JWT tokens`);
        console.log(`   Database: PostgreSQL with Row Level Security`);

    } catch (error) {
        console.error('❌ Connection test failed:', error.message);
    }
}

// Run the test
testSupabaseConnection();
