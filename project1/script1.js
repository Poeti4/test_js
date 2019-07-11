'use strict'
var money,
    time;
money = prompt('ваш бюджет на месяц?','');
time = prompt('Введите дату в формате YYYY-MM-DD','');
appData = {
    'бюджет': money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: 'false'
};
for( var i = 0; i < 2; i++){
  answer = prompt('Введите обязательную статью' +
                  ' расходов в этом месяце','');
  howMuch = prompt('Во сколько обойдется?','');
  expenses.answer = answer;
  expenses.howMuch = howMuch;
};