/*jshint esversion: 6 */

let startBut = document.querySelector("#start"),

    budgetVal = document.querySelector(".budget-value"),
    dayBudVal = document.querySelector(".daybudget-value"),
    levelVal = document.querySelector(".level-value"),
    expVal = document.querySelector(".expenses-value"),
    optVal = document.querySelector(".optionalexpenses-value"),
    incomeVal = document.querySelector(".income-value"),
    monthSavVal = document.querySelector(".monthsavings-value"),
    yearSavVal = document.querySelector(".yearsavings-value"),

    expItems = document.querySelectorAll(".main .data .expenses-item"),
    optExpItems = document.querySelectorAll(".main .data .optionalexpenses-item"),

    buttonsVar = document.getElementsByTagName("button"),
    
    expensButDone = buttonsVar[0],
    optExpensButDone = buttonsVar[1],
    budCountBut = buttonsVar[2],


    chooseInc = document.querySelector(".choose-income"),
    saving = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePerc = document.querySelector(".choose-percent"),
    yearVal = document.querySelector(".year-value"),
    monthVal = document.querySelector(".month-value"),
    dayVal = document.querySelector(".day-value");
    
    

    
let money, time;


function start() {
    
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;

    budgetVal.textContent = money;
    yearVal.value = new Date(Date.parse(time)).getFullYear();
    monthVal.value = new Date(Date.parse(time)).getMonth() +1;
    dayVal.value = new Date(Date.parse(time)).getDate();



}
startBut.addEventListener('click', start);

expensButDone.addEventListener('click', function() {
    let sum =0;
    for(i = 0; i < expItems.length; i++){
    
        let a = expItems[i].value;
        let b = expItems[++i].value;
    
        if((typeof(a) === 'string') && (typeof(b) === 'string') && a != '' && b != '' && 
        a.length < 40){
            appData.expenses[a] = b;
            console.log("Done");
            sum += +b; 
        }else{
            console.log("incorrect data");
            i = i-1;
            
        }
        

    }
    expVal.textContent = sum;

});

optExpensButDone.addEventListener('click', function() {
    for(let i = 0; i < optExpItems.length; i++ ){
        
        let opt = optExpItems[i].value;
        appData.optionalExpenses[i] = opt;

        optVal.textContent += appData.optionalExpenses[i] + " ";
        
    }
});

budCountBut.addEventListener('click', function() {

    if(appData.budget != undefined){

        appData.moneyPerDay = (appData.budget/30).toFixed();
        dayBudVal.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100){
            levelVal.textContent = "Минимальный уровень достатка";
        } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 500 ){
            levelVal.textContent = "Средний уровень достатка";
        } else if(appData.moneyPerDay >= 500){
            levelVal.textContent = "Высокий уровень достатка";
        } else{
            levelVal.textContent = "Произошла ошибка";
        }
    }else{
        dayBudVal.textContent = "Произошла ошибка";
    }
});


chooseInc.addEventListener('input', function() {
    let items = chooseInc.value;
        if (items != "" && items != null && typeof(items) == "string" ){
            appData.income = items.split(", ");
            incomeVal.textContent = appData.income; 
         }
        
});

saving.addEventListener('click', function() {
    if(appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    let sum = chooseSum.value,
        perc = choosePerc.value;
    if(appData.savings == true) {
        appData.monthIncome = sum/100/12*perc;
        appData.yearIncome = sum/100*perc;

        monthSavVal.textContent = appData.monthIncome.toFixed(1);
        yearSavVal.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePerc.addEventListener('input', function() {
    let sum = +chooseSum.value,
        perc = +choosePerc.value;
    if(appData.savings == true) {
        appData.monthIncome = sum/100/12*perc;
        appData.yearIncome = sum/100*perc;

        monthSavVal.textContent = appData.monthIncome.toFixed(1);
        yearSavVal.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses:{},
    income:[],
    savings:false
}; 



