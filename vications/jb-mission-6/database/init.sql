-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 15, 2025 at 04:16 PM
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
-- Database: `vacations`
--

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

CREATE TABLE `follows` (
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `vacation_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role`, `created_at`, `updated_at`) VALUES
('6b99cbe0-1fe8-47c0-b557-613d7dcedae2', 'Ran', 'Golani', 'rango2001@gmail.com', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', 'user', '2025-03-11 17:38:30', '2025-03-11 17:38:30'),
('b6dbe5ed-d980-46f4-87fe-4142b4220cfb', 'King', 'Admin', 'onlyKing@gmail.com', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', 'admin', '2025-03-11 17:36:27', '2025-03-11 17:36:27');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `destination` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `destination`, `description`, `start_date`, `end_date`, `price`, `file`, `created_at`, `updated_at`) VALUES
('7c425c16-fe63-11ef-be9c-0242ac110002', 'Paris', 'A romantic getaway to Paris, with visits to iconic landmarks and museums.', '2025-06-02', '2025-06-10', 1500, 'paris_trip.png', '2025-03-11 10:27:13', '2025-03-11 17:15:08'),
('9060ced8-fe63-11ef-be9c-0242ac110002', 'Tokyo', 'An exciting trip to Tokyo, exploring modern culture and traditional temples.', '2025-07-15', '2025-07-22', 1800, 'tokyo_trip.pdf', '2025-03-11 10:27:52', '2025-03-11 10:27:52'),
('ab3c0335-fe63-11ef-be9c-0242ac110002', 'New York', 'A week in New York City, enjoying Broadway shows and Central Park.', '2025-08-01', '2025-08-07', 2000, 'new_york_trip.pdf', '2025-03-11 10:28:26', '2025-03-11 10:28:26'),
('c00898a9-fe63-11ef-be9c-0242ac110002', 'Rome', 'A cultural trip to Rome, visiting ancient ruins and enjoying Italian cuisine.', '2025-09-10', '2025-09-17', 1200, 'rome_trip.pdf', '2025-03-11 10:29:11', '2025-03-11 10:29:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`user_id`,`vacation_id`),
  ADD UNIQUE KEY `follows_userId_vacationId_unique` (`user_id`,`vacation_id`),
  ADD KEY `vacation_id` (`vacation_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
