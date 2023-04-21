CREATE DATABASE register_login_sys;
USE register_login_sys;

-- Vukosi TABLE--
-- Table structure for table `users`
--
CREATE TABLE `users` (
`user_id_number` bigint NOT NULL,
`user_name` varchar(45) NOT NULL,
`user_surname` varchar(45) NOT NULL,
`user_email` varchar(100) NOT NULL,
`user_password` varchar(200) NOT NULL,
`is_admin` boolean not null default 0,

PRIMARY KEY (`user_id_number`),
UNIQUE KEY `user_id_UNIQUE` (`user_id_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO users (user_id_number, user_name, user_surname, user_email, user_password, is_admin)
VALUES ('01012301495', 'admin', 'admin', 'admin@admin.admin', 'admin@admin.admin', 1);

-- Lindani Table-- 
CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Drivers_Name VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Phone VARCHAR(20) NOT NULL,
  Address VARCHAR(255) NOT NULL,
  City VARCHAR(255) NOT NULL,
  Car_Make VARCHAR(255) NOT NULL,
  Car_Model VARCHAR(255) NOT NULL,
  Vin_Number VARCHAR(17) NOT NULL,
  coverage_options VARCHAR(255) NOT NULL,
  Payment_information VARCHAR(255) NOT NULL
);

INSERT INTO registrations (Drivers_Name, Email, Phone, Address, City, Car_Make, Car_Model, Vin_Number, coverage_options, Payment_information)
VALUES ('John Doe', 'johndoe@example.com', '555-1234', '123 Main St', 'Los Angeles', 'Honda', 'Civic', '12345678901234567', 'Full coverage', 'Credit card'),
       ('Jane Smith', 'janesmith@example.com', '555-5678', '456 Oak Ave', 'New York', 'Toyota', 'Corolla', '23456789012345678', 'Liability only', 'Debit card'),
       ('Bob Johnson', 'bobjohnson@example.com', '555-9012', '789 Elm St', 'Chicago', 'Ford', 'Mustang', '34567890123456789', 'Full coverage', 'PayPal');

SELECT * FROM registrations;

-- Emmanuel Table--
create table vehicles(VIN varchar(17) unique not Null,
carBrand varchar(20),
carModel varchar(25),
carExpiry date,
IDV float,
userId int,
primary key (VIN),
foreign key(userId) references users(userID));