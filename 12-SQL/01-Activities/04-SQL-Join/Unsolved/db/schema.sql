DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

-- create prices table
CREATE TABLE prices (
  -- column for id is auto_incremented and is the primary key of the table
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- column for the price is a decimal with a size of 10 and is allowed to have 2 decimal places 
  price DECIMAL(10,2) NOT NULL
);

-- create books table
CREATE TABLE books(
  -- column for id is auto_incremented and is the primary key of the table
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- book_name column declared with a character limit of 30 and this value cannot be null
  book_name VARCHAR(30) NOT NULL,
  -- price_id column declared as INTEGER datatype
  price_id INTEGER,
  -- setting the foreign key constraint to be the price_id column which will be used to link to other tables
  FOREIGN KEY (price_id)
  -- linking our foreign key to the id column of the prices table
  REFERENCES prices(id)
  -- if a record from the prices table is deleted, set the price_id to NULL
  ON DELETE SET NULL
);
