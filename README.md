This React app front end accompany's the Spring Boot /admin-demo project in this repository.


npm install
npm start

localhost:3000 React App

localhost:8080 Spring Boot MongoDB
localhost:8080/api/v1/customers

See CustomerService component for endpoints

TODO
----
Jest
Complete create, update, and view data.


Postman
-------
POST customer data 
GET all Customer data
PUT Customer data
GET one row of Customer data

Produces embedded document containing Customer, Products and Address data.

Postman
-------
POST data

{
    "firstName": "David",
    "lastName": "Windsor",
    "emailId": "david.windsor@fullstack.com",
    "products": [
        {
            "productName": "Sony TV 4K",
            "productDescription": "75 inch Television latest technology",
            "price": "2995.00"
        },
        {
            "productName": "Apple Mac Pro 13 inch",
            "productDescription": "16gb memory 2.8hz fast retina laptop",
            "price": ""
        }
    ],
    "address": {
        "buildingName": "Del Amitri House",
        "flatNumber": "554",
        "addressline1": "523",
        "addressline2": "Alvah Ramp",
        "addressline3": "Dehrastig",
        "town": "Rio De Janeiro",
        "postCode": "50032",
        "county": "Buckinghamshire"
    }
},
{
    "firstName": "David",
    "lastName": "Windsor",
    "emailId": "david.windsor@fullstack.com",
    "products": [
        {
            "productName": "Sony TV 4K",
            "productDescription": "75 inch Television latest technology",
            "price": "2995.00"
        },
        {
            "productName": "Apple Mac Pro 13 inch",
            "productDescription": "16gb memory 2.8hz fast retina laptop",
            "price": ""
        }
    ],
    "address": {
        "buildingName": "Del Amitri House",
        "flatNumber": "554",
        "addressline1": "523",
        "addressline2": "Alvah Ramp",
        "addressline3": "Dehrastig",
        "town": "Rio De Janeiro",
        "postCode": "50032",
        "county": "Buckinghamshire"
    }
},
{
    "firstName": "David",
    "lastName": "Windsor",
    "emailId": "david.windsor@fullstack.com",
    "products": [
        {
            "productName": "Sony TV 4K",
            "productDescription": "75 inch Television latest technology",
            "price": "2995.00"
        },
        {
            "productName": "Apple Mac Pro 13 inch",
            "productDescription": "16gb memory 2.8hz fast retina laptop",
            "price": ""
        }
    ],
    "address": {
        "buildingName": "Del Amitri House",
        "flatNumber": "554",
        "addressline1": "523",
        "addressline2": "Alvah Ramp",
        "addressline3": "Dehrastig",
        "town": "Rio De Janeiro",
        "postCode": "50032",
        "county": "Buckinghamshire"
    }
}
