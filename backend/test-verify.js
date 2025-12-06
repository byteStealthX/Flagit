const fetch = require('node-fetch'); // You might need to install 'node-fetch' or use built-in fetch in Node 18+

async function testVerify() {
    try {
        const response = await fetch('http://localhost:3000/api/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: 'https://google.com' })
        });

        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testVerify();
