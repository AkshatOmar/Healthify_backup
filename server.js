const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysqlakshat@123',
    database: 'Healthyfy'
});

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve other HTML pages
app.get('/bmiDietPlan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bmiDietPlan.html'));
});

app.get('/bmirandom', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bmirandom.html'));
});

app.get('/diet-plan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'diet-plan.html'));
});

app.get('/expertGuidance', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'expertGuidance.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Database connection
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to database');
    }
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM Users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error checking credentials' });
        } else if (results.length > 0) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
