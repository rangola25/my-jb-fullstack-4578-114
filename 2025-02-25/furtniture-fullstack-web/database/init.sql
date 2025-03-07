-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 06, 2025 at 09:16 PM
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
-- Database: `furniture`
--

-- --------------------------------------------------------

--
-- Table structure for table `furniture`
--

CREATE TABLE `furniture` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dimensions` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `furniture`
--

INSERT INTO `furniture` (`id`, `name`, `dimensions`, `color`, `price`, `created_at`, `updated_at`) VALUES
('0065be37-fa0a-11ef-91d1-0242ac110002', 'Sofa', '200cm * 90cm * 85cm', 'Grey', 450, '2025-03-05 21:36:36', '2025-03-05 21:36:36'),
('0065c8d0-fa0a-11ef-91d1-0242ac110002', 'Coffee Table', '120cm * 60cm * 40cm', 'Wood Brown', 150, '2025-03-05 21:36:36', '2025-03-05 21:36:36'),
('0fedef55-fa0a-11ef-91d1-0242ac110002', 'Dining Chair', '45cm * 45cm * 90cm', 'Black', 75, '2025-03-05 21:37:14', '2025-03-05 21:37:14'),
('0fedf36c-fa0a-11ef-91d1-0242ac110002', 'Bookshelf', '100cm * 30cm * 180cm', ' White', 250, '2025-03-05 21:37:14', '2025-03-05 21:37:14'),
('1cd60ddc-5a87-4ce6-b069-6ca817a28fa2', 'Plastic Chair', '120cm * 50cm * 50cm', 'White', 20, '2025-03-05 21:42:34', '2025-03-05 21:42:34'),
('1e539f89-fa0a-11ef-91d1-0242ac110002', 'Bed Frame', '160cm * 200cm * 35cm', 'Dark Brown', 350, '2025-03-05 21:37:40', '2025-03-05 21:37:40'),
('1e53ab9f-fa0a-11ef-91d1-0242ac110002', 'Wardrobe', ' 150cm * 60cm * 200cm', ' Light Oak', 500, '2025-03-05 21:37:40', '2025-03-05 21:37:40'),
('5e6800f4-9924-430b-8981-6b81a5f1f676', 'Sheet', '200cm * 120cm * 50cm', 'White and Black', 50, '2025-03-06 21:11:42', '2025-03-06 21:11:42'),
('d764c9bd-cf8e-4ba7-874a-78fe91a2be98', 'Dining Table', '180x90x75', 'Wooden Brown', 350, '2025-03-05 21:54:46', '2025-03-05 21:54:46'),
('f28361b4-5e09-4847-a0a5-a6c7ceeb03d0', 'Big bed', '200cm * 120cm * 50cm', 'Gold', 1000, '2025-03-05 23:09:09', '2025-03-05 23:09:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `furniture`
--
ALTER TABLE `furniture`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
