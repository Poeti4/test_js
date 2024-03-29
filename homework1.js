"use strict";
let money,
    time;
function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money =='' || money == null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }
};

//start();


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function chooseExpenses(){
    for(let i=0; i<2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце',''),
            b = +prompt('Во сколько обойдется?','');
        if( typeof(a) === 'string' 
            && (a != '') && (a != null)
            &&  (b != '') && (b != null) ) 
            {
            appData.expenses[a] = b;
        } else {
            alert('ошибка ввода, пожалуйста, повоторите ввод');
            i--;
        }
    
    }
};

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget /30).toFixed(1);
    alert('Ежедневный бюджет = ' + appData.moneyPerDay);
}


function checkSavings(){
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses(){
    for (let i = 0; i<3; i++){
        let a = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i+1] = a;
    }       
}
chooseOptExpenses();

function detectLevel(){
    if(appData.moneyPerDay<100){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}