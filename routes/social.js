var express = require('express'),
    router = express.Router(),
    passport = require('passport');

// Two routes required: 1: redirect to FB. 2: Facebook will redirect the user after they've logged in

// Redirect to FB for authentication
router.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect after approval. Finish the authentication process by attempting to obtain an access token. If granted, the user will be logged in. Otherwise, the authentication has failed
router.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: '/', failureRedirect: '/login'}));


module.exports = router;
