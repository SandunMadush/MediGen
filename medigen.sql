-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2022 at 04:52 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medigen`
--

-- --------------------------------------------------------

--
-- Table structure for table `clinic_blue`
--

CREATE TABLE `clinic_blue` (
  `date` datetime NOT NULL,
  `patient_name` varchar(25) NOT NULL,
  `age` int(20) NOT NULL,
  `clinic_no` varchar(25) NOT NULL,
  `phone_no` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `clinic_red`
--

CREATE TABLE `clinic_red` (
  `date` datetime NOT NULL,
  `patient_name` varchar(25) NOT NULL,
  `age` int(20) NOT NULL,
  `clinic_no` varchar(25) NOT NULL,
  `phone_no` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `endoscopy`
--

CREATE TABLE `endoscopy` (
  `date` datetime NOT NULL,
  `bht_no` varchar(25) NOT NULL,
  `patient_name` varchar(25) NOT NULL,
  `age` int(20) NOT NULL,
  `endo_procedure` varchar(25) NOT NULL,
  `phone_no` varchar(25) NOT NULL,
  `consultant` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `refresh_token` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2a$12$EPs6HRyPHiVU.UVqqvyzrO9s4uR1kxSElHQBwezo3gdb/zIJA2O1O', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYSQ', '2022-11-16 14:18:44', '2022-11-16 14:06:25');

-- --------------------------------------------------------

--
-- Table structure for table `surgeon`
--

CREATE TABLE `surgeon` (
  `id` int(11) NOT NULL,
  `surgeon_id` varchar(25) NOT NULL,
  `surgeon_name` varchar(25) NOT NULL,
  `phone_number` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `theatre`
--

CREATE TABLE `theatre` (
  `ward_no` varchar(25) NOT NULL,
  `patient_name` varchar(25) NOT NULL,
  `bht_no` varchar(25) NOT NULL,
  `age` int(20) NOT NULL,
  `gender` varchar(25) NOT NULL,
  `surgery` varchar(25) NOT NULL,
  `con_surgeon` varchar(25) NOT NULL,
  `con_anesthetic` varchar(25) NOT NULL,
  `theatre_no` int(20) NOT NULL,
  `is_pcr` tinyint(1) NOT NULL,
  `is_rat` tinyint(1) NOT NULL,
  `is_fasting` tinyint(1) NOT NULL,
  `is_echo` tinyint(1) NOT NULL,
  `is_ecg` tinyint(1) NOT NULL,
  `is_ct` tinyint(1) NOT NULL,
  `clinic_number` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ward`
--

CREATE TABLE `ward` (
  `date` date NOT NULL,
  `patient_name` varchar(25) NOT NULL,
  `age` int(20) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `bht_no` varchar(20) NOT NULL,
  `con_surgeon` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `surgeon`
--
ALTER TABLE `surgeon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theatre`
--
ALTER TABLE `theatre`
  ADD PRIMARY KEY (`bht_no`);

--
-- Indexes for table `ward`
--
ALTER TABLE `ward`
  ADD PRIMARY KEY (`bht_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `surgeon`
--
ALTER TABLE `surgeon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
