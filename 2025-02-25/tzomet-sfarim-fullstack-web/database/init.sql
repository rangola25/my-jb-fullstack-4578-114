-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 07, 2025 at 08:46 PM
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
-- Database: `tzomet_sfarim`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `first_name`, `last_name`, `created_at`, `updated_at`) VALUES
('7fcb508f-fb8d-11ef-8790-0242ac110002', 'J.K.', 'Rowling', '2025-03-07 19:50:43', '2025-03-07 19:50:43'),
('7fcb54df-fb8d-11ef-8790-0242ac110002', 'George ', 'Orwell', '2025-03-07 19:50:43', '2025-03-07 19:50:43'),
('88ec1056-fb8d-11ef-8790-0242ac110002', 'Ernest ', 'Hemingway', '2025-03-07 19:51:03', '2025-03-07 19:51:03'),
('88ec1bfc-fb8d-11ef-8790-0242ac110002', 'F. Scott', 'Fitzgerald', '2025-03-07 19:51:03', '2025-03-07 19:51:03'),
('8cb41c3b-fb8d-11ef-8790-0242ac110002', 'Leo ', 'Tolstoy', '2025-03-07 19:51:18', '2025-03-07 19:51:18');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `author_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount_of_pages` int NOT NULL,
  `price` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `author_id`, `name`, `amount_of_pages`, `price`, `created_at`, `updated_at`) VALUES
('a5c9845c-fb8d-11ef-8790-0242ac110002', '7fcb54df-fb8d-11ef-8790-0242ac110002', 'Harry Potter and the Sorcerer\'s Stone', 309, 11, '2025-03-07 19:51:30', '2025-03-07 19:51:30'),
('a5c98b7b-fb8d-11ef-8790-0242ac110002', '7fcb54df-fb8d-11ef-8790-0242ac110002', 'Harry Potter and the Deathly Hallow', 607, 15, '2025-03-07 19:51:30', '2025-03-07 19:51:30'),
('c48e3602-fb8d-11ef-8790-0242ac110002', '7fcb508f-fb8d-11ef-8790-0242ac110002', '1984', 328, 9, '2025-03-07 19:52:31', '2025-03-07 19:52:31'),
('c48e3d54-fb8d-11ef-8790-0242ac110002', '7fcb508f-fb8d-11ef-8790-0242ac110002', 'Animal Farm', 112, 7, '2025-03-07 19:52:31', '2025-03-07 19:52:31'),
('d479dc52-fb8d-11ef-8790-0242ac110002', '8cb41c3b-fb8d-11ef-8790-0242ac110002', 'The Old Man and the Sea', 132, 8, '2025-03-07 19:52:58', '2025-03-07 19:52:58'),
('d479eafa-fb8d-11ef-8790-0242ac110002', '8cb41c3b-fb8d-11ef-8790-0242ac110002', 'A Farewell to Arms ', 355, 13, '2025-03-07 19:52:58', '2025-03-07 19:52:58'),
('e63d9d40-fb8d-11ef-8790-0242ac110002', '88ec1bfc-fb8d-11ef-8790-0242ac110002', 'The Great Gatsby', 180, 10, '2025-03-07 19:53:27', '2025-03-07 19:53:27'),
('e63da49e-fb8d-11ef-8790-0242ac110002', '88ec1bfc-fb8d-11ef-8790-0242ac110002', 'Tender Is the Night', 304, 14, '2025-03-07 19:53:27', '2025-03-07 19:53:27'),
('f89296c7-fb8d-11ef-8790-0242ac110002', '88ec1056-fb8d-11ef-8790-0242ac110002', 'War and Peace', 1225, 20, '2025-03-07 19:53:55', '2025-03-07 19:53:55'),
('f892a351-fb8d-11ef-8790-0242ac110002', '88ec1056-fb8d-11ef-8790-0242ac110002', 'Anna Karenina', 864, 15, '2025-03-07 19:53:55', '2025-03-07 19:53:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
