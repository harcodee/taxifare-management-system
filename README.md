# 🚖 Taxi Fare Management System

A simple full-stack application to manage and track taxi ride details. The system allows storing, retrieving, and managing fare data including passenger details, locations, travel date, and fare amount using a structured database.

---

## 📌 Features

* Add taxi ride records
* Store pickup & drop locations
* Track fare amount and travel date
* Retrieve and display stored records
* Simple UI for interaction
* Backend API integration with database

---

## 🛠️ Tech Stack

**Frontend**

* HTML
* CSS (basic styling)
* JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MySQL

**Other Tools**

* SQL (for schema & queries)
* npm (package management)

---

## 🗂️ Project Structure

```bash
TaxiFare-Management-System/
│
├── index.html        # Frontend UI
├── server.js         # Backend server (Node.js)
├── TaxiFare.sql      # Database schema & sample data
├── package.json      # Dependencies
├── package-lock.json
└── node_modules/
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/taxifare-management.git
cd taxifare-management
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup Database

* Open MySQL
* Run the SQL file:

```sql
SOURCE TaxiFare.sql;
```

This will:

* Create database `TaxiFareDB`
* Create table `TaxiFares`
* Insert sample records

---

### 4. Configure Database in `server.js`

Update your DB connection:

```js
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "TaxiFareDB"
});
```

---

### 5. Run the server

```bash
node server.js
```

---

### 6. Open the app

Go to:

```
http://localhost:3000
```

---

## 🧠 Database Schema

```sql
TaxiFares (
    FareID INT PRIMARY KEY AUTO_INCREMENT,
    PassengerID INT,
    PickupLocation VARCHAR(255),
    DropLocation VARCHAR(255),
    FareAmount DECIMAL(10,2),
    TravelDate DATE
)
```

---

## 📊 Sample Data

* Chennai Central → T-Nagar → ₹250.50
* Guindy → Velachery → ₹150.00

---

## 🚀 Future Improvements

* Add authentication (admin/user roles)
* Real-time fare calculation
* Integration with maps API
* Payment tracking system
* Dashboard analytics

---

## 👤 Author

**Harine T**
