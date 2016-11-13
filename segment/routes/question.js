var express = require("express");
var router = express.Router();
var checkSession = require("../jsbean/CheckSession");
var questionModel = require("../models/QuestionModel");

router.all('/ask', function(req, res) {
    loginbean = checkSession.check(req,res);
    if(!loginbean){
        return;
    }
    subflag = req.body['subflag'];
    if(subflag==undefined){
        res.render('ask', {loginbean: loginbean});
    }else{
        //发提问
        questionModel.ask(req,res);
    }
})

module.exports = router;