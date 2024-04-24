# Project Title

GiftGenie: Where Every Gift is a Wish Granted

## Overview

GiftGenie is a one-stop destination for buying gifts online. User can choose from a curated collection of pre-made designs,upload their own design or use AI to create design.

### Problem

GiftGenie can help the users to reduce the time in finding a perfect gifts. The portal offers a mix of curated catalog and other features allowing users to upload their design and utilize text prompt for generating personalized gifts.This can help users find or create ideal gifts for any occasion.

### User Profile

Users of all ages who are looking for personalized gifting solutions for any occasion

### Features

- As a user, I want to be able to create an account
- As a user, I want to be able to log in securely to my account 
- As a user, I want to be able to browse a curated collection of pre-made gift designs for various occasions
- As a user, I want to upload my own custom designs or images to create personalized gifts
- As a user, I want to generate personalized gift designs using AI technology based on text prompts or preferences
- As a user, I want to preview my customized gifts before finalizing my purchase and review all details
- As a user, I want to securely complete my purchases using payment integration


## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express


### APIs

- Deep AI Image generator API
- Payment Integration

### Sitemap

- Register
- Login
- Homepage with category listing
- Product Listing basis of category
- Customize Product
- Generate design
- Place Order
- Order History

### Mockups

#### Login Page
![](login.jpeg)

#### Register Page
![](register.jpeg)

#### Home Page
![](home.png)

#### Product Listing Page
![](product-listing.png)

#### Customize Product Page
![](customize-product.png)

#### Generate Design Page
![](generate-design.png)

#### Place Order
![](place-order.png)

#### Order History
![](order-history.png)


### Data

![](capstone_db.png) 

### Endpoints

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password
- name: User's name
- mobile: User's provided mobile number
- address: User's provided address
- city : User's provided city
- country : User's provided country
- zipcode: User's provided zipcode

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:
- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**GET /categories**

- Get categories

Parameters:
- token: JWT of the logged in user


Response:
```
[
    {
        "id": 1,
		"name": "Mug",
		"url":"url"
     },
    ...
]
```


**GET /products**

- Get Products

Parameters:
- token: JWT of the logged in user
- category_id : Selected Category's id(1)

Response:
```
[
    {
        "id": 11,
		"name": "White Mug",
		"url":"url"
     },
	 {
		"id": 12, {
	 },
    ...
]
```

**POST /orders**
- Create or Post Order

Parameters:
- token: JWT of the logged in user
- recipient_name 
- recipient_mobile
- recipient_email
- recipient_address
- recipient_city
- recipient_state
- recipient_zipcode
- recipient_country
- Array of products 
	-- product_id
	-- quantity
	-- price
	-- currency
	-- custom-url 
	-- order-type


Response:
```
{
    "order_id":"1001",
	"order_total":"50",
	"order_date":"2024-04-22 05:00:00"
	"order_status":"1"
}
```


**GET /orders**

Parameters:
- token: JWT of the logged in user

Response:
```
[{
    "order_id":"1001",
	"order_total":"50",
	"order_date":"2024-04-22 05:00:00"
	"order_status":"1"
},
{
    "order_id":"1003",
	"order_total":"54",
	"order_date":"2024-04-22 05:00:00"
	"order_status":"ORDER PLACED"


]
```


**GET /orders/:orderid**

- Get order details based on order-id

Parameters:
- token: JWT of the logged in user

Response:
```
{
    "order_id":"1001",
	"order_total":"50",
	"order_date":"2024-04-22 05:00:00",
	"custom_url":"url",
	"order_status":"ORDER PLACED",
	"recipient_name":"Ivan",
	"recipient_mobile":"+1",
	"recipient_address":"123,Richard's Street",
	"recipient_city":"Vancouver",
	"recipient_state:"BC",
	"recipient_country":"Canada"
}

```

**POST /users/logout**
Logs out the user

Parameters:
- token: JWT of the logged in user

Response:
```
{
"Logout was successful"
}
```

### Auth

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Create a list of categories and respective products

- Create seeds with sample category and product data

- Deploy client and server projects so all commits will be reflected in production

- Feature: Categories and products listing
    - Implement list of categories and products
    - Create GET /categories  and GET /products endpoint

- Feature: Create Order from pre-existing catalog
	- Create POST /orders endpoint
	- Implement order creation online using an existing product

- Feature: Use Input text-prompt to create image online(using Deep AI API)
	- Integrate with external API for creating image using text prompt
	- Integrate with POST API
	
- Feature: Use uploaded image to create order
	- Implement uploaded image 
	- Using pre-existing catalog, text based images and customized image to create order

- Feature: Get Orders 
	- Implement orders listing and order details
	- Create GET /orders endpoint and /orders/:id endpoint
    

- Feature: Create account
    - Implement register page + form
    - Create POST /users/register endpoint

- Feature: Login abd Logout
    - Implement login page + form
    - Create POST /users/login and /users/logout endpoint

- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes



## Nice-to-haves

- Profile Management