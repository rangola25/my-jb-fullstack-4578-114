-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 03, 2025 at 05:04 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gift_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `presents`
--

CREATE TABLE `presents` (
  `code` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `target_code` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `present_name` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `present_description` varchar(120) NOT NULL,
  `price` int NOT NULL,
  `discount` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `presents`
--

INSERT INTO `presents` (`code`, `target_code`, `present_name`, `present_description`, `price`, `discount`, `created_at`, `updated_at`) VALUES
('0e70f890-f547-11ef-9fa3-0242ac110002', '783481f1-f546-11ef-9fa3-0242ac110002', 'Noise-Canceling Headphones', 'High-quality wireless headphones that provide superior sound and noise', 129, 25, '2025-02-27 20:10:20', '2025-02-27 20:10:20'),
('0e71013a-f547-11ef-9fa3-0242ac110002', '75c95922-f546-11ef-9fa3-0242ac110002', 'Bluetooth Speaker', 'Portable waterproof speaker with exceptional sound quality for indoor and outdoor use.', 59, 15, '2025-02-27 20:10:20', '2025-02-27 20:10:20'),
('19623727-501c-41ab-86c0-363bd41bec4b', '75c94bfd-f546-11ef-9fa3-0242ac110002', 'Supergoal', 'The offical cards of the first soccer league in Israel', 100, 50, '2025-03-02 21:59:35', '2025-03-02 21:59:35'),
('4969aea4-7d57-4e4c-8360-868eb606f12a', '75c94bfd-f546-11ef-9fa3-0242ac110002', 'Toy car', 'mini car how drives on the floor of your house with funny noise', 175, 45, '2025-03-02 22:15:57', '2025-03-02 22:15:57'),
('53bca660-fa54-44ac-83bd-6f76f9841bf0', '75c95922-f546-11ef-9fa3-0242ac110002', 'Hoodies', 'pants for teen', 120, 30, '2025-03-02 22:02:36', '2025-03-02 22:02:36'),
('5586f1dc-f547-11ef-9fa3-0242ac110002', '75c94bfd-f546-11ef-9fa3-0242ac110002', 'Customizable Puzzle', 'A 500-piece puzzle with a personalized image or message.', 30, 5, '2025-02-27 20:11:43', '2025-02-27 20:11:43'),
('55871648-f547-11ef-9fa3-0242ac110002', '783481f1-f546-11ef-9fa3-0242ac110002', 'Yoga Mat with Accessories', 'Comfortable and non-slip yoga mat, perfect for at-home or studio workouts, comes with accessories.', 45, 10, '2025-02-27 20:11:43', '2025-02-27 20:11:43'),
('88b1a4f8-f547-11ef-9fa3-0242ac110002', '75c95922-f546-11ef-9fa3-0242ac110002', 'Electric Scooter', 'Eco-friendly, foldable electric scooter with high-speed performance and long battery life.', 349, 35, '2025-02-27 20:13:41', '2025-02-27 20:13:41'),
('88b1bf55-f547-11ef-9fa3-0242ac110002', '783481f1-f546-11ef-9fa3-0242ac110002', 'Board Game – Settlers of Catan', 'A popular strategy board game where players build settlements and trade resources.', 40, 5, '2025-02-27 20:13:41', '2025-02-27 20:13:41'),
('a4e419ed-f547-11ef-9fa3-0242ac110002', '75c94bfd-f546-11ef-9fa3-0242ac110002', 'Mini Drone with Camera', 'A compact drone with a camera for capturing aerial shots, ideal for beginners.', 79, 20, '2025-02-27 20:15:07', '2025-02-27 20:15:07'),
('a4e434bf-f547-11ef-9fa3-0242ac110002', '783481f1-f546-11ef-9fa3-0242ac110002', 'Leather Wallet', ' A high-quality, stylish leather wallet with multiple card slots and compartments.', 45, 10, '2025-02-27 20:15:07', '2025-02-27 20:15:07'),
('dd824522-f546-11ef-9fa3-0242ac110002', '783481f1-f546-11ef-9fa3-0242ac110002', 'Smartwatch', 'A stylish smartwatch that tracks fitness, heart rate, and notifications from your phone.', 199, 20, '2025-02-27 20:07:59', '2025-02-27 20:07:59'),
('dd826e7d-f546-11ef-9fa3-0242ac110002', '75c94bfd-f546-11ef-9fa3-0242ac110002', 'LEGO Set – Creator 3-in-1', 'A versatile LEGO set with multiple build options, perfect for creativity and play.', 50, 10, '2025-02-27 20:07:59', '2025-02-27 20:07:59');

-- --------------------------------------------------------

--
-- Table structure for table `target_audiences`
--

CREATE TABLE `target_audiences` (
  `code` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` enum('kids','teen','adults') NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `target_audiences`
--

INSERT INTO `target_audiences` (`code`, `type`, `created_at`, `updated_at`) VALUES
('75c94bfd-f546-11ef-9fa3-0242ac110002', 'kids', '2025-02-27 20:07:14', '2025-02-27 20:07:14'),
('75c95922-f546-11ef-9fa3-0242ac110002', 'teen', '2025-02-27 20:07:14', '2025-02-27 20:07:14'),
('783481f1-f546-11ef-9fa3-0242ac110002', 'adults', '2025-02-27 20:07:25', '2025-02-27 20:07:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `presents`
--
ALTER TABLE `presents`
  ADD PRIMARY KEY (`code`),
  ADD KEY `target_code` (`target_code`);

--
-- Indexes for table `target_audiences`
--
ALTER TABLE `target_audiences`
  ADD PRIMARY KEY (`code`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `presents`
--
ALTER TABLE `presents`
  ADD CONSTRAINT `presents_ibfk_1` FOREIGN KEY (`target_code`) REFERENCES `target_audiences` (`code`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
