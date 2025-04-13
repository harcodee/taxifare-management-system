const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');  // ✅ Import CORS

const app = express();
const port = 3000;

// ✅ Middleware
app.use(bodyParser.json());
app.use(cors());  // ✅ Allow frontend to connect

// ✅ MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'har7bts1nefftech',  // Change this
    database: 'TaxiFareDB'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('✅ Connected to MySQL');
    }
});

// ✅ API Endpoints
app.get('/', (req, res) => res.send("🚀 Server is running!"));

// ✅ Add Taxi Fare
app.post('/add-fare', (req, res) => {
    const { PassengerID, PickupLocation, DropLocation, FareAmount, TravelDate } = req.body;
    if (!PassengerID || !PickupLocation || !DropLocation || !FareAmount || !TravelDate) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    const sql = `INSERT INTO TaxiFares (PassengerID, PickupLocation, DropLocation, FareAmount, TravelDate) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [PassengerID, PickupLocation, DropLocation, FareAmount, TravelDate], (err, result) => {
        if (err) {
            console.error("❌ Database error:", err);
            return res.status(500).json({ message: 'Database error' });
        } else {
            res.status(201).json({ message: 'Taxi Fare added successfully', FareID: result.insertId });
        }
    });
});

// ✅ Get All Fares
app.get('/fares', (req, res) => {
    db.query('SELECT * FROM TaxiFares', (err, results) => {
        if (err) {
            console.error("❌ Database error:", err);
            return res.status(500).json({ message: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

// ✅ Start Server
app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
