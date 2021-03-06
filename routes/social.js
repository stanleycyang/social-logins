var express = require('express'),
    router = express.Router(),
    passport = require('passport');

// Two routes required: 1: redirect to FB. 2: Facebook will redirect the user after they've logged in

// Redirect to FB for authentication
router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email', 'user_birthday', 'user_location']}));

// Facebook will redirect after approval. Finish the authentication process by attempting to obtain an access token. If granted, the user will be logged in. Otherwise, the authentication has failed
router.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: '/home', failureRedirect: '/login'}));


// Twitter routes
router.get('/auth/twitter', passport.authenticate('twitter',  {scope: ['email'] }));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  failureRedirect: '/login'
}), function(request, response, next){
  response.redirect('/home');
});

// Google routes
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/login'}), function(request, response, next){
  response.redirect('http://localhost:3000');
});

// Instagram routes
router.get('/auth/instagram', passport.authenticate('instagram'));

router.get('/auth/instagram/callback', passport.authenticate('instagram', {failureRedirect: '/login'}), function(request, response){
  // Successful authentication, redirect home
  response.redirect('/');
});

// Linkedin routes
router.get('/auth/linkedin', passport.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress'] }));

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {failureRedirect: '/login'}), function(request, response){
  response.redirect('/');
});

// Github routes
router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: '/login'}), function(request, response, next){
  response.redirect('/');
});

router.get('/home', isLoggedIn, function(request, response, next){
  response.render('home', {title: 'Logged in'});
});

// Check if user is logged in
function isLoggedIn(request, response, next){
  // If they are authenticated, carry on
  if(request.isAuthenticated()){ return next();}
  // If they aren't, redirect them to the home page
  response.redirect('/');
}


module.exports = router;
