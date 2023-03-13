# PintBid bidding platform app

A simple bidding app allowing you to create an auction and to bid.

## Table of contents
* [Installation Backend](#backend)    
* [Installation Frontend](#frontend)   
* [Database](#database)
* [WORKING WITH THE FRONTEND](#using)
* [Known issues](#issues)

<a id="backend"></a>
## 📥 Installation Backend

After cloning  both repositories - BACKEND and FRONTEND - follow these steps:

load all dependencies via maven and 
run the backend part from intelliJ on localhost:8080


<a id="frontend"></a>
## 📥 Installation Frontend

in your local visual studio code use the npm package manager to install.

### Project setup
```
npm install
```

### Compiles and minifies for production, and hot-reloads for development
```
npm run build 
npm run serve
```
It will start the frontend implementation on port: http://localhost:8081 {has to be 8081!}


<a id="database"></a>
## 📊 Database 
2. open the h2 database console on link http://localhost:8080/h2-ui/ and signin with credential su and without password
3. check if there are ROLES in ROLES table and if not, insert them
```
SELECT * FROM ROLES
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');


You can use swagger for insert data easily http://localhost:8080/swagger-ui/