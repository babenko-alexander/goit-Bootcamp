// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.

let amount = '';
let outAmount = '';
let inVal = prompt('Введите валюту, которую хотите продать (UAH/EUR/USD)');
let outVal = '';


function ueExchange() {
    const ueCourse = 0.03272;
    function exchange() {
        return amount * ueCourse;
    }
    return exchange;
}
let ueOutAmount = ueExchange();

function usExchange() {
    const usCourse = 0.03812;
    function exchange() {
    return amount * usCourse;
}
return exchange;
}
let usOutAmount = usExchange();

function esExchange() {
    const esCourse = 1.16463;
    function exchange() {
        return amount * esCourse;
    }
    return exchange;
}
let esOutAmount = esExchange();

function euExchange() {
    const euCourse = 30.5631;
    function exchange() {
        return amount * euCourse;
    }
    return exchange;
}
let euOutAmount = euExchange();

function suExchange() {
    const suCourse = 26.2389;
    function exchange() {
        return amount * suCourse;
    }
    return exchange;
}
let suOutAmount = suExchange();

function seExchange() {
    const seCourse = 0.85831;
    function exchange() {
        return amount * seCourse;
    }
    return exchange;
}
let seOutAmount = seExchange();



if (inVal.toLowerCase() === 'uah') {
    outVal = prompt('Введите валюту, которую хотите купить (EUR/USD)');
    if (outVal.toLowerCase() === "eur") {
        amount = prompt('Введите сумму конвертации');
        outAmount = ueOutAmount();
    } else if (outVal.toLowerCase() === "usd") {
        amount = prompt('Введите сумму конвертации');
        outAmount = usOutAmount();
    } else {
        alert('Ошибка ввода покупаемой валюты');
    }
}

if (inVal.toLowerCase() === 'eur') {
    outVal = prompt('Введите валюту, которую хотите купить (UAH/USD)');
    if (outVal.toLowerCase() === "uah") {
        amount = prompt('Введите сумму конвертации');
        outAmount = euOutAmount();
    } else if (outVal.toLowerCase() === "usd") {
        amount = prompt('Введите сумму конвертации');
        outAmount = esOutAmount();
    } else {
        alert('Ошибка ввода покупаемой валюты');
    }
}

if (inVal.toLowerCase() === 'usd') {
    outVal = prompt('Введите валюту, которую хотите купить (UAH/EUR)');
    if (outVal.toLowerCase() === "eur") {
        amount = prompt('Введите сумму конвертации');
        outAmount = seOutAmount();
    } else if (outVal.toLowerCase() === "uah") {
        amount = prompt('Введите сумму конвертации');
        outAmount = suOutAmount();
    } else {
        alert('Ошибка ввода покупаемой валюты');
    }
}



console.log('u/e : ' + ueOutAmount());
console.log('u/$ : ' + usOutAmount());
console.log('e/$ : ' + esOutAmount());
console.log('e/u : ' + euOutAmount());
console.log('$/u : ' + suOutAmount());
console.log('$/e : ' + seOutAmount());
console.log('Your amount ' + amount);
console.log('You will get ' + outAmount);
alert(`Вы получили ${outAmount.toFixed(2)} ${outVal} за ваши ${amount} ${inVal}. Отличная сделка!`);

