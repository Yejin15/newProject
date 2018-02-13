var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/talk', function (req, res, next) {

  const messages = [
    {
      name: 'Bot name',
      text: 'Hello!   Thanks for connecting with us over Messenger. Hello!   Thanks for connecting with us over Messenger. Hello!   Thanks for connecting with us over Messenger. Hello!   Thanks for connecting with us over Messenger.',
      type: 'receive'
    },
    {
      name: 'Bot name',
      text: 'Are you a bot or real person? Are you a bot or real person? Are you a bot or real person? Are you a bot or real person?   ' +
      'Let me guess :)',
      type: 'send'
    },
  ];


  res.render('messenger', { messages: messages });


});

module.exports = router;
