
var $body = $('.body');
var $data = $body.find('.data');
var $row = $data.find('.row');

var totalincome = 0;
var totalexpense = 0;
var totalmoney = 0;

var incomeData = [];
var expenseData = [];
var rowdata = [];

$('.inputbar').find('.button').on('click', function () {


     var date = $('#date').val();
     var income = $('#income').val();
     incomeData.push(income);
     var expense = $('#expense').val();
     expenseData.push(expense);

     totalincome = totalincome*1 + income*1;
     totalexpense = totalexpense*1 + expense*1;
     totalmoney = totalincome*1 - totalexpense*1;



    $("<div class='row'>" +
        "<div class='cells1'> " +  date  +
        " </div>" +
        "<div class='cells2'> " +  income  +
        " 원</div>" +
        "<div class='cells3'> " +  expense +
        " 원</div>" +
        "<div class='cells4'> " +  (income-expense) +
        " 원</div>"
        +
        "<div class='close'> " +  "<div class='X'>  X  <div>" +
        " </div>"
         +" </div>").appendTo($data);

    $("#inTotal").html(totalincome + "원");
    $("#exTotal").html(totalexpense + "원");
    $("#Total").html(totalmoney + "원");



});

var incomeX = 0;

$data.on("click", '.row',function() {


    this.remove();
    $("#inTotal").html(totalincome + "원");
    $("#exTotal").html(totalexpense + "원");
    $("#Total").html(totalmoney + "원");


});