const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch'); 

const app = express();
const PORT = 4000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', { message: 'Enter details below to send to Flask backend:' });
});

app.post('/submit-form', async (req, res) => {
    const formData = req.body;
    console.log('Form data received by Node.js:', formData);

    try {
        // Use the Docker Compose service name 'backend' and its internal port 5000
        const backendUrl = 'http://backend:5000/api/submit';
        
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Backend API error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Response from Flask backend:', result);
        
        res.render('index', { message: `✅ Success! Flask responded: ${result.message}` });

    } catch (error) {
        console.error('Error connecting to Flask backend:', error);
        res.status(500).render('index', { message: `❌ Error submitting data: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});
