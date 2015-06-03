var query = "SELECT * FROM order_details WHERE order_id=10255 AND (quantity = 20 or quantity > 30)";

module.exports = query;
