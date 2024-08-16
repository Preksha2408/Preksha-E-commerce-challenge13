# Preksha-E-commerce-challenge13

![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This project is an E-Commerce backend solution that provides a RESTful API for managing products, categories, and tags. It is built using Node.js, Express.js, and Sequelize for interaction with a MySQL database. The API supports full CRUD operations (Create, Read, Update, Delete) for products, categories, and tags.

## Table of Contents

* [Description](#description)

* [Usage Instructions](#usage-instructions)

* [Installation](#installation)

* [Features](#features)

* [Screenshots](#screenshots)

* [Demo](#Demo)

* [Questions](#questions)


## Usage Instructions 

1. Clone the repository to your local machine using:
   ```bash

   git clone git@github.com:Preksha2408/Preksha-E-commerce-challenge13.git

2. Navigate to the project directory  

   cd Preksha-E-commerce-challenge13/

3. Install necessary dependencies 

   " npm install "

4. Ctrl-right-click on server.js . 

    * Open in integrated terminal

    * Type  psql -U postgres 

    * Enter your password

    * npm run seed

    * Type node server.js 


## Installation 

* npm i express

* npm i sequelize

* npm i pg


## Features

1. Products:

* GET /api/products: Fetch all products, including their associated categories and tags.

* GET /api/products/ : Fetch a single product by its ID.

* POST /api/products: Create a new product with associated category and tag IDs.

* PUT /api/products/: Update an existing product by its ID.

* DELETE /api/products/: Delete a product by its ID.

2. Categories:

* GET /api/categories: Fetch all categories along with the products associated with each.

* GET /api/categories/: Fetch a single category by its ID.

* POST /api/categories: Create a new category.

* PUT /api/categories/: Update an existing category by its ID.

* DELETE /api/categories/: Delete a category by its ID.

3. Tags:

* GET /api/tags: Fetch all tags, including the products associated with each.

* GET /api/tags/: Fetch a single tag by its ID.

* POST /api/tags: Create a new tag.

* PUT /api/tags/: Update an existing tag by its ID.

* DELETE /api/tags/: Delete a tag by its ID.


## Technologies Used

* Node.js

* Express.js

* Sequelize

* MySQL

* Insomnia


## Usage

* After setting up the project and starting the server, you can interact with the API using Insomnia or any other API testing tool. Below are examples of how to use the various routes for products, categories, and tags:

* Get All Products
Retrieve a list of all products along with their associated categories and tags.

* Get Single Product
Retrieve details of a single product by its ID.

* Create a New Product
Add a new product to the database. You can associate it with categories and tags by providing their IDs.

* Update a Product
Update an existing product's details using its ID.

* Delete a Product
Remove a product from the database using its ID.




## Screenshots 

* ![First-page](./assets/images/Cfontspage.png)

* ![Second-page](./assets/images/Tables.png)



## Demo 

* ![Click here](./assets/images/Employee-trackerchallenge12.gif)

* [Click here for youtube link](https://www.youtube.com/watch?v=2icKZybzLDc)


## Questions 

For questions or further information, please contact me:

* Email - [prek.ps37@gmail.com](prek.ps37@gmail.com)

* GitHub - [Preksha2408](https://github.com/Preksha2408/Preksha-E-commerce-challenge13.git)
