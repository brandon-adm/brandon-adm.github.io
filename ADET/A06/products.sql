-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2025 at 03:02 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(4) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `name` varchar(40) NOT NULL DEFAULT 'true',
  `isAvailable` varchar(6) NOT NULL,
  `code` varchar(20) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `price` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `isAvailable`, `code`, `image`, `price`) VALUES
(1, 1, 'Pepperoni Pizza (RG)', '1', 'PEP-RG', 'img/pizzas/pepperoni.png', 150),
(2, 1, 'Pepperoni Pizza (MD)', '1', 'PEP-MD', 'img/pizzas/pepperoni.png', 200),
(3, 1, 'Pepperoni Pizza (LG)', '1', 'PEP-LG', 'img/pizzas/pepperoni.png', 250),
(4, 1, 'Hawaiian Pizza (RG)', '1', 'HWN-RG', 'img/pizzas/hawaiian.png', 180),
(5, 1, 'Hawaiian Pizza (MD)', '1', 'HWN-MD', 'img/pizzas/hawaiian.png', 240),
(6, 1, 'Hawaiian Pizza (LG)', '1', 'HWN-LG', 'img/pizzas/hawaiian.png', 280),
(7, 1, '5 Cheese Pizza (RG)', '1', 'FVCHZ-RG', 'img/pizzas/5cheese.png', 150),
(8, 1, '5 Cheese Pizza (MD)', '1', 'FVCHZ-MD', 'img/pizzas/5cheese.png', 200),
(9, 1, '5 Cheese Pizza (LG)', '1', 'FVCHZ-LG', 'img/pizzas/5cheese.png', 250),
(10, 1, 'Ham & Mushroom Pizza (RG)', '1', 'HNM-RG', 'img/pizzas/hamnmushroom.png', 200),
(11, 1, 'Ham & Mushroom Pizza (MD)', '1', 'HNM-MD', 'img/pizzas/hamnmushroom.png', 250),
(12, 1, 'Ham & Mushroom Pizza (LG)', '1', 'HNM-LG', 'img/pizzas/hamnmushroom.png', 300),
(13, 1, 'Meatzza (RG)', '0', 'MZZA-RG', 'img/pizzas/meatzza.png', 170),
(14, 1, 'Meatzza (MD)', '0', 'MZZA-MD', 'img/pizzas/meatzza.png', 200),
(15, 1, 'Meatzza (LG)', '0', 'MZZA-LG', 'img/pizzas/meatzza.png', 230),
(16, 2, 'Coke (RG)', '1', 'CK-RG', 'img/drinks/coke.png', 25),
(17, 2, 'Coke (MD)', '1', 'CK-MD', 'img/drinks/coke.png', 35),
(18, 2, 'Coke (LG)', '1', 'CK-LG', 'img/drinks/coke.png', 40),
(19, 2, 'Coke Zero (RG)', '1', 'CKZ-RG', 'img/drinks/cokezero.png', 25),
(20, 2, 'Coke Zero (MD)', '1', 'CKZ-MD', 'img/drinks/cokezero.png', 35),
(21, 2, 'Coke Zero (LG)', '1', 'CKZ-LG', 'img/drinks/cokezero.png', 40),
(22, 2, 'Sprite (RG)', '1', 'SPRT-RG', 'img/drinks/sprite.png', 25),
(23, 2, 'Sprite (MD)', '1', 'SPRT-MD', 'img/drinks/sprite.png', 35),
(24, 2, 'Sprite (LG)', '1', 'SPRT-LG', 'img/drinks/sprite.png', 40),
(25, 2, 'Iced Tea (RG)', '1', 'ICT-RG', 'img/drinks/icedtea.png', 15),
(26, 2, 'Iced Tea (MD)', '1', 'ICT-MD', 'img/drinks/icedtea.png', 25),
(27, 2, 'Iced Tea (LG)', '1', 'ICT-LG', 'img/drinks/icedtea.png', 35),
(28, 3, 'Chicken Popcorn (150g)', '1', 'CHKP', 'img/sides/chickenpopcorn.png', 100),
(29, 3, 'Chicken Wings BBQ (8 pcs)', '1', 'CHWBBQ', 'img/sides/chickenwingsbbq.png', 150),
(30, 3, 'Chicken Wings (8 pcs)', '1', 'CHW', 'img/sides/chickenwings.png', 130),
(31, 3, 'Cheesy Bread Bacon Jalapeno', '1', 'CBBJ', 'img/sides/CBBJ.png', 90),
(32, 3, 'Cheesy Bread', '1', 'CB', 'img/sides/cheesybread.png', 85),
(33, 3, 'Garlic Bread Sticks', '1', 'GBS', 'img/sides/garlicbreadstix.png', 85),
(34, 3, 'French Fries Bacon and Cheese', '1', 'FFBC', 'img/sides/frenchfriesbaconcheese.png', 120),
(35, 3, 'French Fries Cheese', '1', 'FFC', 'img/sides/frenchfriescheese.png', 100),
(36, 3, 'French Fries', '1', 'FF', 'img/sides/frenchfries.png', 85),
(37, 3, 'Potato Wedges', '1', 'PW', 'img/sides/potatowedge.png', 85),
(38, 3, 'Chicken Nuggets (6 pcs)', '1', 'CHKNUG', 'img/sides/chickennuggets.png', 120),
(39, 3, 'Kids Pizza Meal', '1', 'KPM', 'img/sides/kidspizzameal.png', 110),
(40, 3, 'Kids Chicken Nuggets Meal', '1', 'KCNM', 'img/sides/kidsnuggetsmeal.png', 110),
(41, 3, 'Kids Cheesy Bread Meal', '1', 'KCBM', 'img/sides/kidscheesybread.png', 100),
(42, 4, 'Cinnamon Sticks', '1', 'CNMSTK', 'img/desserts/cinnamonsticks.png', 100),
(43, 4, 'Cream Cheese Rolls', '1', 'CCRLS', 'img/desserts/creamcheeseroll.png', 100),
(44, 4, 'Lava Cake', '1', 'LAVCAK', 'img/desserts/lavacake.png', 75),
(45, 5, 'Garlic Dip', '1', 'GARLDIP', 'img/dips/garlicdip.png', 25),
(46, 5, 'Ketchup', '1', 'KETCHUP', 'img/dips/ketchup.png', 25),
(47, 5, 'Sweet and Sour Dip', '1', 'SWTSR', 'img/dips/sweetnsourdip.png', 25);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
