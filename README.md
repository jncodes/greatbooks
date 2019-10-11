# README

# [Greatbooks](https://grandbooks.herokuapp.com/#/)
__Greatbooks is an application clone of [Goodreads](https://www.goodreads.com).  This application utilizes [Google Books API](https://books.google.com) to allow users to search and browse books. Users that create an account can save customized lists of books, as bookshelves.__
***
## Key features:
### **User Authentication**
* Users can create an account and securely login and logout
### **Open Browsing**
* Users can navigate the search and browsing features without logging in
### **Demo Login**
* Users can use the Demo Login to view internal features
* *(__Note:__ Each demo user is unique.  Users must create an account if they wish for their data to persist.)*
***
Each user will have three default bookshelves (reading, read, to read). Users can name and create their own additional custom bookshelves (example: 'My Favorite Books').  Users can read and write book reviews for books they have read.  Book profile pages will show a book's reviews and it's location on that user's bookshelves.
***
## Project Challenges
* Formatting and normalizing 3rd party API data for use in combination with data from application database
    * Add conditional statements to prevent errors and interruptions in user-interface
    * Use reducers to manipulate data for storage in frontend state
* Auto-generating mutually-exclusive default user bookshelves
    * Use Active Record Callbacks and custom class methods to create database entries in multiple tables with a single prompt
    * ex. `after_create :create_default_shelves`
    * Add database constraints and model-level validations
    * ex. `validates :book_id, uniqueness: { scope: :shelf_id }`
        * Ensure a book can only have a single entry / appearance on a particular bookshelf
        * Ensure a book can only appear on one of the default bookshelves at any given time

***
## Technologies utilized:
* React
* Redux
* Google Books API
* Javascript
* Ruby Rails Application Framework
* PostgreSQL
* JBuilder
* CSS
* jQuery
* Webpack
* Heroku

## Future features
* Reading stats
    * How many books have you read this year? How often are you reading? 

# (An Application Clone of [![Goodreads](https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png)](https://www.goodreads.com))