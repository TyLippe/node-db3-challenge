# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select p.productName, c.categoryName 
from products as p 
inner join categories as c on p.categoryid = c.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select o.orderId, s.shipperName 
from orders as o 
inner join shippers as s on o.shipperId = s.shipperId 
where o.orderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select p.productName, o.quantity 
from products as p 
inner join orderDetails as o on p.productId = o.productId 
where o.orderId = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderId, c.customerName, e.lastName 
from orders as o 
inner join customers as c on o.customerId = c.customerId 
inner join employees as e on o.employeeId = e.employeeId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select categoryname, count(productname) 
from products 
inner join categories on products.categoryid = categories.categoryid 
group by categoryname

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

select orderId and sum(quantity) as ItemCount 
from orderDetails 
group by OrderID