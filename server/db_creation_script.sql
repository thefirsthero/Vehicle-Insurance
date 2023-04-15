-- Table structure for table `users`
--
CREATE TABLE `users` (
`user_id_number` bigint NOT NULL,
`user_name` varchar(45) NOT NULL,
`user_surname` varchar(45) NOT NULL,
`user_email` varchar(100) NOT NULL,
`user_password` varchar(200) NOT NULL,
PRIMARY KEY (`user_id_number`),
UNIQUE KEY `user_id_UNIQUE` (`user_id_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;