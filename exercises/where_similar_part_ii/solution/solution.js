var query = "SELECT first_name, last_name, employee_id FROM employees WHERE last_name NOT LIKE 'L%' AND last_name NOT LIKE 'P%' ORDER BY last_name ASC";

module.exports = query;
