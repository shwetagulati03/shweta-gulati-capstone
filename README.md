# Project Title

GiftsGenie: Where Every Gift is a Wish Granted

## Overview

GiftsGenie is a full-stack React/Node.JS where users can choose from a curated collection of pre-made designs,upload their own design or use text prompt to create design.

### Problem

GiftsGenie can help the users to reduce the time in finding a perfect gifts. The portal offers a mix of curated catalog and other features allowing users to upload their design and utilize text prompt for generating personalized gifts.This can help users find or create ideal gifts for any occasion.

### User Profile

Users of all ages who are looking for personalized gifting solutions for any occasion

### Features

- User can securely log into his/her account(JWT auth implemented)
- User can browse through categories and pre-made products and buy them
- User can upload their own design and buy them
- User can generate deisgn using text prompt
- User can preview the gifts and amount before finalizing the purchase

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

#### External APIs used

- Deep AI's API to generate images based on text prompt

#### Installation Instructions

- Create a .env file with following:
  PORT=8080
  DB_HOST=127.0.0.1
  DB_NAME=<YOUR_DB_NAME>
  DB_USER=<YOUR_DB_USER>
  DB_PASSWORD=<YOUR_DB_PASSWORD>
  DA_APIKEY=<SHARED>
  SECRET_KEY=<JWT_SECRET_KEY>
  
- Install all the dependencis

- Create a new MySQL Database called 'giftsgenie'

- Migration Data
  For each table, run 'npx knex migrate:make [schema name]' replacing schema name with table names.Included in Github
- Seed Data
  Run npx knex seed:run to execute all seed files and add seed data to the database and some tables.
  Please run npx knex:seed run 
  And then please run this command to run seed file for category product mapping
  npx knex seed:run --specific=category_products.js

- Start the server

- Start the client

##### Potential Future Improvements

- Integrate Payment Gateway
- Include 3D rendering to include user upload custom design over the item
- Profile Management
- Cart management to include more items ina single order
