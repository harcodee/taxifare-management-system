CREATE DATABASE TaxiFareDB;
USE TaxiFareDB;
CREATE TABLE TaxiFares (
    FareID INT AUTO_INCREMENT PRIMARY KEY,
    PassengerID INT NOT NULL,
    PickupLocation VARCHAR(255) NOT NULL,
    DropLocation VARCHAR(255) NOT NULL,
    FareAmount DECIMAL(10,2) NOT NULL,
    TravelDate DATE NOT NULL
);
INSERT INTO TaxiFares (PassengerID, PickupLocation, DropLocation, FareAmount, TravelDate) 
VALUES 
(1, 'Chennai Central', 'T-Nagar', 250.50, '2025-04-03'),
(2, 'Guindy', 'Velachery', 150.00, '2025-04-03');
SELECT*FROM TaxiFares;