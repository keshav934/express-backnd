/**
 * We have missed part 1 of the video.
 * this notes is for video 2 of backend series.
 * 
 * ------------- Login
 * 1. we will create login controller by using the jwt tokens(refresh and access) that we have written in user.model.js
 * login controller is created in user.controller.js
 * in login controller we need to generate refresh and access token. we will use this functionality so much time. so we 
 *  will create a method for this and call whenever we want(line 7-19 user.controller.js)
 * after creating the access and refresh token, we will send it through cookie
 * login controller: we have implemented cookie(sending refresh token & access token), sending refreshing & access token
 * in as data to the user(for mobile devices, line 138-150).
 *  next we will write the logout controller first then we will write the routes for these controller.
 * 
 * ---------------- Logout ------------------
 * before going to logout, we will create a middleware to get the logged In user details(auth.middleware.js, verifyJWT)
 * after creating verifyJWT we will setup the route(user.router.js) for loginUser(just the heading only) after that will write logout route
 * logout: detail notes are written in controller annd middleware.
 * logout is completed(video timestamps : 1:02:00)
 * 
 * ---------- testing -----------
 * test the login functionality:tested and it worked as expected, got refresh,access token and refresh,access token cookie also
 * logout :: tested the logout functionality as well(mistake:auth.middleware.js line18 cookie->cookies)
 * 
 * ------------ from video time stamp 1:11:00 -------------
 * here we will learn how to handle the refresh token and access token from user perspective(frontend):
 * access token: it has short expiry time(10min,1hr,1day etc). if it expires then user has to login again. to avoid this challenge, refresh token came into picture
 * refresh token: it is saved in db and user PC(localstorage). if access token expires, user can send refresh token which can 
 * be verified from db. upon verification new access token can be generated for user to avoid login.
 * 
 * === refreshAccessToken controller(user.controller.js) ====
 * this will regenerate the access token.
 * after this create a route for this controller
 */