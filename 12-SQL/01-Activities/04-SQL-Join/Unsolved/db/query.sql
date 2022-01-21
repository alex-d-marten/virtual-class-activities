-- selecting the book_name column from the books table and setting this AS book_name
-- Also selecting the price column from the prices table and setting this AS price
SELECT books.book_name AS book_name, prices.price AS price
-- from the books table, we are joining the prices column on the books price_id with a value of prices from the prices table
-- We are combining the selections here into 1 dynamic table by criteria: price_id from the books table equal to the prices table id.
FROM books
JOIN prices ON books.price_id = prices.id;
