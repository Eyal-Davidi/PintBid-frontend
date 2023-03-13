# PintBid- Frontend side

## Table of contents
* [Goal](#goal)
* [Introduction](#introduction)
* [Installation](#installation)   
* [Database](#database)
* [Getting Started](#getting-started)
* [Technologies](#technologies)
* [Sources](#sources)

<a id="goal"></a>
## 🎯 Goal
This website got developed by our group, for FH Technikum Wien, as part of the Backend Web Engineering course.

<a id="introduction"></a>
## 📝 Introduction

This is the Frontend side of the PintBid website. It connects to the Backend side to display a platform for alcoholic drinks auctions. Users can create auctions to sell their products and bid in auctions to buy products. Users can register, log in, and log out from the site. The authorization gets handled using JWT tokens. The site separates observers, users, and admins to allow different options depending on their roles.

<a id="installation"></a>
## 📥 Installation

in your local visual studio code use the npm package manager for installation:

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
1. open the h2 database console on http://localhost:8080/h2-ui/ and sign in with credential su and without password
2. check if there are ROLES in the ROLES table and if not, insert them:
```
SELECT * FROM ROLES
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_OBSERVER');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```

3. check if there are 2 users in USERS TABLE and if not, insert them via postman {it will automatically match the role to the user in many to many table USER_ROLES}:
```
url: http://localhost:8080/api/auth/signup

 POST Methods with body json:
 {
    "firstname":"John",
    "lastname":"Lenon",
    "username":"johnUser",
    "email":"john@john.com",
    "password":"12345678",
    "role":["user"]
}
```
and second user:
```
{
    "firstname":"Will",
    "lastname":"Smith",
    "username":"willAdmin",
    "email":"will@will.com",
    "password":"12345678",
    "role":["admin"]
}
```

 4. check again if you have 2 users and roles and user_roles records in the database. 
 
 <a id="getting-started"></a>
## ▶ Getting Started
you can log in as a johnUser or willAdmin with password 12345678
you should create some products you can use these data:
```
title 1: "Blaufränkisch BIO 2018 "
description: "Rich black fruit is contrasted by peppery flavors and boisterous acidity in this food-friendly Austrian red. Blaufränkisch is a parent grape of both Gamay and Zweigelt.",
```
```
title 2: "Edelweiss RED BERRIES"
description: "Born and raised in the Alps, Edelweiss Wheat is an invitation to experience the pure and rich taste of alpine nature. The delicate flavours of red berries adds a unique, refreshing & fruity after taste to your perfectly smooth wheat beer"
```
```
title 3: "Natura Neuburger 2020"
 description: "Rich black fruit is contrasted by peppery flavors and boisterous acidity in this food-friendly Austrian red. Blaufränkisch is a parent grape of both Gamay and Zweigelt.",
```

<a id="technologies"></a>
## 🛠 Technologies used

server & API:

[axios](https://www.npmjs.com/package/axios)  
[vue-localstorage](https://www.npmjs.com/package/vue-localstorage) 
 
 routing:

 [vue-rourer](https://www.npmjs.com/package/vue-router)

 validation error messages & validation schema:

[vee-validate] https://www.npmjs.com/package/vee-validate 
[yup](https://www.npmjs.com/package/yup)

state management:

[vuex](https://www.npmjs.com/package/vuex)
 
 style: 

[vue3-bootstrap4](https://www.npmjs.com/package/vue3-bootstrap4)
[Unsplash-photos](https://unsplash.com/s/photos/user)
[icons](https://fontawesome.com/v4/examples/)

   
<a id="sources"></a>
## 📚 Sources 
We watched and learned from many tutorials such as:

https://cli.vuejs.org/guide/creating-a-project.html#vue-create 

https://www.youtube.com/watch?v=oZ9zlS5V5WU

https://www.youtube.com/watch?v=uqpM7WVTKI4

https://www.youtube.com/watch?v=Wy9q22isx3U

https://www.youtube.com/watch?v=6LyagkoRWYA

https://www.youtube.com/playlist?list=PL8p2I9GklV44m5tFH-zjCmTiHeq9GZrby

https://www.bezkoder.com/category/vue/


