console.log($);


var a = 10;
var b = 20;
var c = a + b;


var $body = $('.body');


var $children = $body.find('.message');
console.log($children);
console.log($($children[0]));


for (var i = 0; i < $children.length; i++) {
  var $target = $($children[i]);

  $target.on('click', function () {

    var $message = $(this);
    var $textzone = $message.find('.textzone');

    console.log($textzone.css('position'));

  });
}


$('#sendMessage').on('click', function () {

  // HTML 을 String으로 가지고, jQuery 객체로 변환하면
  // 새로운 DOM이 생성되는것과 같다.

  // 생성된 DOM 은 , 아직 HTML 에 붙지 않았으므로,
  // appendTo 를 이용해서 내가 원하는 대상에 붙혀준다.

  // input에서 내용을 가져올때에는 $ 객체에 .val() 함수를 이용해 해당 텍스트를 가져온다.
  var message = $('#messageInput').val();

  $("<div class='message send'>" +
    "<div class='textzone'> " + message + " !!!</div>" +
    " </div>").appendTo($body);
});







