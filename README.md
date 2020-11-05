######   MAIN STRUCTURE   ######

```
client
  |_______ public
  |         |_______ index.html
  |
  |_______ src
  |         |_______ containers   
  |         |_______ components  
  |         |_______ styles       
  |         |_______ App.js        
  |         |_______ index.js      
  |         |_______ config.js 
  |
  |_______ package.json
  |   
  |_______ .env  ==> client environment variables  

server
  |_______ index.js
  |
  |_______ routes
  |            |_______ usersRoute.js
  |            |_______ categoriesRoute.js
  |            |_______ productsRoute.js
  |            |_______ emailsRoute.js
  |            |_______ paymentRoute.js
  |
  |_______ controllers
  |            |_______ usersController.js
  |            |_______ categoriesController.js
  |            |_______ productsController.js
  |            |_______ emailsController.js
  |            |_______ paymentController.js
  |
  |_______ models
  |            |_______ usersModel.js
  |            |_______ categoriesModel.js
  |            |_______ productsModel.js
  |
  |_______ package.json
  |   
  |_______ .env  ==> server environment variables
```



######   CORE FUNCTIONALITY API EXAMPLE   ######

```
======  users  ======

POST  ==>  '/users/register'

======  categories  ======

POST  ==>  '/categories/create'
POST  ==>  '/categories/delete'
POST  ==>  '/categories/update'
GET   ==>  '/categories/find_all'

======  products  ======

POST  ==>  '/products/create'
POST  ==>  '/products/delete'
POST  ==>  '/products/update'
GET   ==>  '/products/find_all'
GET   ==>  '/products/find_one/:product_id'


```



######   HOW TO RUN IT   ######

client:  

* from one terminal 
* cd ecommerce
* cd client 
* npm install
* npm start

server:  

* from another terminal
* cd ecommerce
* cd server 
* npm install
* nodemon
