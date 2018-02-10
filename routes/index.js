var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/talk', function(req, res, next) {

    const messages = [
        {
            name: 'Bot name',
            text: 'Hello!   Thanks for connecting with us over Messenger.',
            type : 'receive'
        },
        {
            name: 'Bot name',
            text: 'Are you a bot or real person?   ' +
            'Let me guess :)',
            type : 'send'
        },
        {
            name: 'Bot name',
            text: 'The Messenger Platform provides you with tools to ' +
            'create a bot to engage in conversation with people.',
            type : 'receive'
        }
    ];


    res.render('messenger', {messages: messages});


});

module.exports = router;
