var $body = $('.body');
var $data = $body.find('#data');
var datas = [];
var $date = $('#date');
var $income = $('#income');
var $expense = $('#expense');

// 버튼이 눌리면, 가계부에 입력한다

$('.inputbar').find('.button').on('click', function () {

  var date = $date.val();
  var income = $income.val();
  var expense = $expense.val();

  var currentData = {
    date: date,
    income: income,
    expense: expense,
  };
  datas.push(currentData);

  var $item = $("<div class='row'>" +
    "<div class='cells'> " + currentData.date + " </div>" +
    "<div class='cells income'> " + currentData.income + " 원</div>" +
    "<div class='cells expense'> " + currentData.expense + " 원</div>" +
    "<div class='cells'> " + (currentData.income - currentData.expense) + " 원</div>" +
    "<div class='close'> " + "<div class='X'>  X  <div>" +
    " </div>"
    + " </div>");
  $item.appendTo($data);

  calcSums();

  // x를 누르면 가계부에서 삭제한다.
  $item.find('.close').on('click', function () {
    // datas 에서 currentData 제거해야한다.
    var currentIndex = datas.indexOf(currentData);
    datas.splice(currentIndex, 1);
    $item.remove();
    calcSums();
  });
});


function calcSums() {
  var totalIncome = _.sumBy(datas, function (d) {
    return d.income * 1;
  });
  var totalExpense = _.sumBy(data, function (d) {
    return d.expense * 1;
  });

  $('#inTotal').text(totalIncome + '원');
  $('#exTotal').text(totalExpense + '원');
  $('#Total').text(totalIncome - totalExpense + '원');
};


// 가격을 갱신하는 기능



