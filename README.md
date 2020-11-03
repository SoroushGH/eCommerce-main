######   MAIN STRUCTURE   ######

```
client
  |_______ public
  |         |_______ index.html
  |
  |_______ src
  |         |_______ containers    ==>  main components ( home.js, products.js, about.js ... )
  |         |_______ components    ==>  smaller components ( navbar.js, footer.js ... )
  |         |_______ styles        ==>  css files
  |         |_______ App.js        ==>  router component
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


######   CORE FUNCTIONALITY   ######

* Register admin
* Login admin
* Logout admin
* [Authentication (client and server)](https://gitlab.com/stefano8/authentication_2020)
* Add products
* remove products
* update products
* show all product
* show one product
* add product to cart
* cart page
* remove product from cart
* increase product quantity in cart
* descrease product quantity in cart
* clear cart
* go to checkout page
* payment (stripe)
* send email confirmation
* [Mailer server](https://gitlab.com/barcelonacodeschool/express_nodemailer_server)
* update stock
* send contact email


######   CORE FUNCTIONALITY API EXAMPLE   ######

```
======  users  ======

POST  ==>  '/users/register'
POST  ==>  '/users/login'
GET   ==>  '/users/verify_token'

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

======  payment  ======

POST  ==>  '/payment/create_checkout_session'
GET   ==>  '/payment/checkout_session'

======  emails  ======

POST  ==>  '/emails/send_contact_email'


// the confirmation email, after the payment, should be sent from 
// the payment controller in the route '/payment/checkout_session'
```


######  EXTRA  FUNCTIONALITY IDEAS  ######

* create new admins (must be logged in as admin)
* Register user
* Login user
* Logout user
* update user profile
* see orders done by userID
* sort orders by date
* send confimation email user
* password reset
* add categories
* remove categories
* update categories
* create order
* admin dashboard
* show orders
* change order status from  sent /  sent
* group products by category
* filter products in price range
* combine filters
* sort products by price (asc / desc)
* sort products alphabetically  (asc / desc)


######   HOW TO RUN IT   ######

client:  

* from one terminal 
* cd ecommerce_boilerplate
* cd client 
* npm install
* npm start

server:  

* from another terminal
* cd ecommerce_boilerplate
* cd server 
* npm install
* nodemon
