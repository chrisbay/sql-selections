CREATE DATABASE sql_selections;

USE sql_selections;

CREATE TABLE `categories` (
  `category_id` int(8) NOT NULL,
  `category_name` varchar(128) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `customers` (
  `customer_id` int(8) NOT NULL,
  `customer_name` varchar(128) NOT NULL,
  `contact_name` varchar(128) NOT NULL,
  `address` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `postal_code` varchar(128) NOT NULL,
  `country` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `employees` (
  `employee_id` int(8) NOT NULL,
  `last_name` varchar(128) NOT NULL,
  `first_name` varchar(128) NOT NULL,
  `birth_date` date NOT NULL,
  `photo` varchar(128) NOT NULL,
  `notes` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `orders` (
  `order_id` int(8) NOT NULL,
  `customer_id` int(8) NOT NULL,
  `employee_id` int(8) NOT NULL,
  `order_date` date NOT NULL,
  `shipper_id` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `order_details` (
  `order_detail_id` int(8) NOT NULL,
  `order_id` int(8) NOT NULL,
  `product_id` int(8) NOT NULL,
  `quantity` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `products` (
  `product_id` int(8) NOT NULL,
  `product_name` varchar(128) NOT NULL,
  `supplier_id` int(8) NOT NULL,
  `category_id` int(8) NOT NULL,
  `unit` varchar(128) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `shippers` (
  `shipper_id` int(8) NOT NULL,
  `shipper_name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `suppliers` (
  `supplier_id` int(11) NOT NULL,
  `supplier_name` varchar(128) NOT NULL,
  `contact_name` varchar(128) NOT NULL,
  `address` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `country` varchar(128) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`);

ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `idx_customer_id` (`customer_id`),
  ADD KEY `idx_employee_id` (`employee_id`),
  ADD KEY `idx_shipper_id` (`shipper_id`);

ALTER TABLE `order_details`
  ADD PRIMARY KEY (`order_detail_id`),
  ADD KEY `idx_order_id` (`order_id`),
  ADD KEY `idx_product_id` (`product_id`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

ALTER TABLE `shippers`
  ADD PRIMARY KEY (`shipper_id`);

ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`supplier_id`);


ALTER TABLE `categories`
  MODIFY `category_id` int(8) NOT NULL AUTO_INCREMENT;
ALTER TABLE `customers`
  MODIFY `customer_id` int(8) NOT NULL AUTO_INCREMENT;
ALTER TABLE `employees`
  MODIFY `employee_id` int(8) NOT NULL AUTO_INCREMENT;
ALTER TABLE `orders`
  MODIFY `order_id` int(8) NOT NULL AUTO_INCREMENT;
ALTER TABLE `order_details`
  MODIFY `order_detail_id` int(8) NOT NULL AUTO_INCREMENT;
ALTER TABLE `products`
  MODIFY `product_id` int(8) NOT NULL AUTO_INCREMENT;
ALTER TABLE `shippers`
  MODIFY `shipper_id` int(8) NOT NULL AUTO_INCREMENT;
ALTER TABLE `suppliers`
  MODIFY `supplier_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `orders`
  ADD CONSTRAINT `fk_shipper_id` FOREIGN KEY (`shipper_id`) REFERENCES `shippers` (`shipper_id`),
  ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `fk_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`);

ALTER TABLE `order_details`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);
