1.build a frontend of login page, home page, checkout page,checkProduct page, subtotal page

2.make a StateProvdier.js to setup a data layer  [we are using react context api]
 -> then wrap whole App into StateProvider
 -> then create initialState and reducer in reducer.js and then import initialState and reducer in index.js

3.add ADD_TO_BASKET and REMOVE_FROM_BASKET action to the reducer
 -> then add useStateValue in every page as per requirements
 -> now we need to connect 'add to basket' button to push something into data-layer in the product.js
 -> then create 'getBasketTotal' in the reducer to calculate total value of basket and fetch basket items to checkout page
 -> now we need to connect 'remove from basket' button 

4.Now we will work on Login page:
 -> after doing setState value, we are goint to create function login and register onclick button
 -> then we'll do some firebase login and register shittt...
 -> add config section from firebase setting to firebase.js
 -> go to authentication/sign-in-method, enable email/password
 -> npm i firebase
 -> sudo npm i -g firebase-tools

5.Now working on user authentication of firebase in firebase.js and  login.js

6.then we'll implement useEffect in App.js
 -> add user: null in initialState of reducer.js
 -> then implement 'ADD_USER' in reducer
