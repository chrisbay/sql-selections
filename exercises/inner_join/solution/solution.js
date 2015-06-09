var query = "SELECT customer_name, order_id FROM customers INNER JOIN orders ON orders.customer_id = customers.customer_id WHERE customers.customer_id=7";

module.exports = query;
