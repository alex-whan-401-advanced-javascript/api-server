# API Server

### **[Link to Swagger Documentation for API](https://app.swaggerhub.com/apis/alex-whan/API-Server/0.1)**

## Lab 6 - Dynamic API: Phase I

In Phase1, we’re going to build a simple API (with no code) to gain some clarity and visuals on proper route structure and the data contracts. We will use a product called ‘json-server’ to build a simple API server that fulfills all of our business requirements in a “sandbox”

Specifically, we will be building an API to serve data for a virtual storefront, which displays categories and products to a potential shopper

In future phases, we will be building out this functionality manually, with Express.

### Phase 1 Requirements

For the first phase, our API will perform CRUD operations using ReST methods on 2 data models using json-server, an installable and configurable API application used to “spin up” servers for testing purposes. We will be using this to set the goal for our business requirements, and create working documentation.

Each of the following user stories are to be executed for both categories and products data models:

- As a developer, I want to CREATE a new record in a database, using the POST method on a custom API

- As a developer, I want the API to return the record I create in JSON format

- As a developer, I want to GET list of all records in a database, using the GET method on a custom API

- As a developer, I want the API to return an object containing count, and a results[] array

- As a developer, I want to GET an existing in a database, using the GET method with an ID parameter on a custom API

- As a developer, I want the API to return an object containing the record from the database

- As a developer, I want to UPDATE an existing record in a database, using the PUT and PATCH methods with an ID parameter on a custom API

- As a developer, I want the API to return the record I updated in JSON format

- As a developer, I want to DELETE an existing record in a database, using the DELETE method with an ID parameter on a custom API

- As a developer, I want the API to return the record I updated in JSON format

- As a developer, I want Swagger documentation for this API so that I can make it easier for other developers to use and understand
