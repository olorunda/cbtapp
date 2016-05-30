-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 30, 2016 at 04:18 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `owosocbt`
--
CREATE DATABASE IF NOT EXISTS `owosocbt` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `owosocbt`;

-- --------------------------------------------------------

--
-- Table structure for table `corrects`
--

CREATE TABLE IF NOT EXISTS `corrects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `correctoption` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `question_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fix` varchar(44) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

--
-- Dumping data for table `corrects`
--

INSERT INTO `corrects` (`id`, `correctoption`, `question_id`, `created_at`, `updated_at`, `fix`) VALUES
(13, '3', 48, '2016-05-29 12:17:55', '2016-05-29 12:17:55', ''),
(14, '1', 49, '2016-05-29 17:04:54', '2016-05-29 17:04:54', '');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2016_05_05_214923_add_type_table_to_user', 2),
('2016_05_05_222549_add_matric_table_user', 3),
('2016_05_06_052200_create_scores_table', 4),
('2016_05_06_073454_create_questions_table', 5),
('2016_05_06_073647_create_options_table', 5),
('2016_05_27_162602_create_questions_table', 6),
('2016_05_27_162856_create_options_table', 6),
('2016_05_27_164020_create_corrects_table', 7),
('2016_05_28_143230_create_results_table', 8),
('2016_05_28_201851_create_studentanswers_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE IF NOT EXISTS `options` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NOT NULL,
  `option1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `option2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `option3` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `option4` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` varchar(55) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` varchar(55) COLLATE utf8_unicode_ci NOT NULL,
  `correctoption` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `question_id` (`question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`id`, `question_id`, `option1`, `option2`, `option3`, `option4`, `updated_at`, `created_at`, `correctoption`) VALUES
(13, 48, 'The study of ant', 'The study of animal', 'The study of machine', 'Solving problems', '2016-05-29 13:17:55', '2016-05-29 13:17:55', 3),
(14, 49, 'Study of act', 'Study of Man ', 'Study of Age', 'I am awesome', '2016-05-29 18:04:54', '2016-05-29 18:04:54', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `content` (`content`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=50 ;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `content`, `created_at`, `updated_at`) VALUES
(48, 'What is Computer Science', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 'What is Economics', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE IF NOT EXISTS `results` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `score` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `user_id`, `score`, `created_at`, `updated_at`) VALUES
(12, '4', 29, '2016-05-29 18:27:06', '2016-05-29 18:27:07'),
(13, '5', 2, '2016-05-29 19:01:13', '2016-05-29 19:03:16');

-- --------------------------------------------------------

--
-- Table structure for table `studentanswers`
--

CREATE TABLE IF NOT EXISTS `studentanswers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `selectedoption` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `question_id` (`question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=501 ;

--
-- Dumping data for table `studentanswers`
--

INSERT INTO `studentanswers` (`id`, `user_id`, `question_id`, `selectedoption`, `created_at`, `updated_at`) VALUES
(499, 5, 48, 3, '2016-05-29 19:01:13', '2016-05-29 19:03:16'),
(500, 5, 49, 3, '2016-05-29 19:01:13', '2016-05-29 19:03:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `type` int(11) NOT NULL DEFAULT '0',
  `matric` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`, `type`, `matric`, `image`) VALUES
(3, 'olorunda olaoluwa taiwo', 'olorunda@gg.com', '$2y$10$2dYlGq0llyCxGf7LLJm17uEoibfdjzV2p3iumxfULX.Lxf75kR6c6', NULL, '2016-05-27 15:10:07', '2016-05-27 15:10:07', 0, 'csc/2034/0088', ''),
(4, 'olorunda adebolawe', 'olll@gg.com', '$2y$10$fmZUagvdU15N5AzIBqvQ9OP256c.5OGD5VcLwrxn8XtqqL3tATwti', 'me2p78omtMFIQrh0BFSioX2yLeZe0c1u8ctXqLPAZbK9mQqnYP1w3ncC3NBb', '2016-05-27 17:55:04', '2016-05-29 19:02:09', 1, 'csc/2011/0053', '4552.jpg'),
(5, 'Adesare adegbagi', 'ade@gmail.com', '$2y$10$eIonwuo6ZBz.ig7xkOFs.uFsk8n4cfX7LY6j08JT2k0sri1U6n6bW', 'up0XxOdubYPopAVyJPAQfjsKHB1UplIednYXEMh6U5W6MfMa5NDxGZk5QWeH', '2016-05-29 18:59:45', '2016-05-29 19:16:03', 0, 'csc/2013/0056', '4697.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
