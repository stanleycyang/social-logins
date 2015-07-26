var express = require('express'),
    router = express.Router(),
    passport = require('passport');

// Two routes required: 1: redirect to FB. 2: Facebook will redirect the user after they've logged in

// Redirect to FB for authentication
router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email', 'user_birthday', 'user_location']}));

// Facebook will redirect after approval. Finish the authentication process by attempting to obtain an access token. If granted, the user will be logged in. Otherwise, the authentication has failed
router.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: '/', failureRedirect: '/login'}));


// Twitter routes
router.get('/auth/twitter', passport.authenticate('twitter',  {scope: ['email'] }));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  failureRedirect: '/login'
}), function(request, response, next){
  response.redirect('/');
});

// Google routes
router.get('/auth/google', passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));

router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/login'}), function(request, response, next){
  response.redirect('/');
});


module.exports = router;
