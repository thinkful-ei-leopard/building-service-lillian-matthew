CREATE TABLE blogful_articles ( 
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  title TEXT NOT NULL, 
  date_published TIMESTAMP DEFAULT new() NOT NULL,
  content TEXT
);