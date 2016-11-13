var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    loginbean = req.session.loginbean;
    if(loginbean !== undefined){
        console.log("loginbean:"+loginbean);
        console.log(loginbean.nicheng);
    }
    res.render('index', {loginbean:loginbean});
});

//----注销session
router.get('/logout',function(req,res){
    req.session.destroy(function(err) {
        //res.send("location.href='/index';");
        res.redirect('/');
    })
});

module.exports = router;
