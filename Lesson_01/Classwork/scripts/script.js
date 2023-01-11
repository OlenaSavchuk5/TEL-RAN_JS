//===============================// Variables // ====================

// пытаемся вызывать переменные осмысленно
// семантически

// let userName = 'Alex';
// let modelAuto = 'BMW';


// let box; // undefined
// console.log(box);

// box = 3 + 2; // 5
// console.log(box);

// box = 7 + 3; // 10
// console.log(box);

// let box - слева куда сохранить
// 5 - что сохранить
// = - оператор присвоения

// ==================================================================

// let string = 'Alex';
// let string2 = "Alex";
// let string3 = `Alex`;

// console.log(string);
// console.log(string2);
// console.log(string3);

// ==================================================================

// var oldVar = 123;
// console.log(message)
// let message; // инициализация переменной
// console.log(message) // undefined
// message = 'Hello'; // присваивается значение
// console.log(message) // 'Hello'

// message = 123; // переприсваивается значение
// console.log(message) // 123

// message = 'Привет'; // переприсваивается значение
// console.log(message) // 'Привет'


// ==================================================================

// let user = 'John';
// let age = 25;
// let hello = 'Hello!';

// console.log(user, age, hello);


// const myBirthday = '19.04.1992'; // константа, изменить нельзя
// let name; // менять можно name = 'Vlad';
// const age = 50; // изменить уже нельзя


// ===================================================================

// let 1a; // не может начинаться с цифры
// let my-name; // дефис '-' не разрешён в имени
// let, class, return и function так же недопустимы поскольку они зарезервированы

// let let = 5; // нельзя назвать переменную "let", ошибка!
// let return = 5; // также нельзя назвать переменную "return", ошибка

// ===================================================================

// const myBirthday = '18.04.1982'; // - константа, изменить нельзя
// let name; // менять можно name = 'Vlad'
// const age = 50; // изменить уже нельзя

// ====================================================================

// Несколько хороших правил:

// Используйте легко читаемые имена, такие как userName или shoppingCart.

// Избегайте использования аббревиатур или коротких имён, 
// таких как a, b, c

// Делайте имена максимально описательными и лаконичными. 
// Примеры плохих имён: data и value. Такие имена ничего не говорят. 
// Их можно использовать только в том случае, 
// если из контекста кода очевидно, какие данные хранит переменная.

// const messageConst = 'Hello';
// console.log(messageConst);


// ========================// Типы // ===================================

// // В JavaScript есть 8 основных типов данных
// Семь из них называют «примитивными» типами данных:

// 1) number для любых чисел: целочисленных или чисел с плавающей точкой
// const number1 = 55; // type number
// const number2 = 55.53; // type number

// 2) bigint для целых чисел огромной длины.
// символ "n" в конце означает, что это BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// 3) string для строк. Строка может содержать ноль или больше символов.
// '' - длина строки 0 символов
// 'abc' - длина строки 3 символа

// let message = 'hello, world!';
// let message2 = '';

// 4) boolean для true/false.
// let isLoginUser = false; // type boolean
// isLoginUser = true; // type boolean

// 5) null для неизвестных значений – отдельный тип, 
// имеющий одно значение null.

// 6) undefined для неприсвоенных значений – отдельный тип, 
// имеющий одно значение undefined.

// 7) symbol для уникальных идентификаторов.

// И один не является «примитивным» 
// 8) object для более сложных структур данных.


// ================// Операторы // ================================ 

// Оператор typeof 

// позволяет нам увидеть, какой тип данных сохранён в переменной.
// let user; // undefined
// let notResponce = null; // object - ошибка в языке археологическая
// let obj = {}; // object
// const message = 'Hello, world'; // string
// let isLogin = false; // boolean
// const pi = 3.14; // number

// let piType = typeof pi; // 'number'
// let isLoginType = typeof isLogin; // 'boolean' можно взять в скобки

// console.log(isLoginType);

// Имеет две формы: typeof x или typeof(x).
// Возвращает строку с именем типа. Например, "string".
// Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.


// =============// Конвертация типов // ===============================

// Конвертация типов
// Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.

// 1) Строковое – Происходит, когда нам нужно что-то вывести. 
// Может быть вызвано с помощью 

// const pi = 3.14;
// const piString = String(pi);

// console.log(pi, piString);

// const isTrue = true;
// const isTrueString = String(isTrue)

// console.log(isTrue, isTrueString);

// let hello = 'Hello';
// let world = 'World';

// console.log(hello + ' ' + 'World' + '!');  // конкатенация


// Для примитивных значений работает очевидным образом.

// 2) Численное – Происходит в математических операциях. 
// Может быть вызвано с помощью Number(value).

// const piString = '3.14';
// const piNumber = Number(piString);

// console.log(piString, piNumber);

// 3) Логическое – Происходит в логических операциях. 
// Может быть вызвано с помощью Boolean(value).

// console.log(Boolean(3.14)); // true 
// console.log(Boolean(0)); // false

// let user;
// let notResponce = null;
// let obj = {};
// const message = 'Hello, world';
// let isLogin = false;
// const pi = 3.14;


// Boolean

// undefined == false
// null == false
// '' == false
// 0 == false

// {} == true
// 'Hello, world' == true
// 3.14 == true
// -5 == true

// console.log( Boolean(-5) )


// ===================================================================

// Работа с переменными

// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert, console.log (должна показать «Джон»).

// let userName = 'John';
// let admin = userName;

// console.log(admin);


// =============// Операторы сравнения // ============================

// console.log('1 < 2', 1 < 2); // true
// console.log('2 > 1', 2 > 1); // true
// console.log('1 != 2', 1 != 2); // true  != отрицание, не равен
// console.log('1 <= 2', 1 <=2); // true
// console.log('2 >= 1', 2 >= 1); // true

// результатом их выполнения boolean значение


// =============// Оператор присвоения // ============================

// let a = 'a';
// let b = 'b';

// console.log('a != b', a != b);
// console.log('a < b', a < b);

// console.log('catamaran' < 'code');
// console.log('catamaran' > 'cata');

// console.log( 100 === '100'); // жесткое тождество - false
// console.log( 100 == '100'); // приведение к типу - true ==
// console.log( 100 != '100'); 
//!= и == - приводят к одному типу
// !== и === - жесткое типизированное тождество

// console.log('John' === 'John');


// console.log('2' > 1);
// console.log('01' == 1);

// console.log(true == '000000001');

// console.log(true == 1);
// console.log(false == 0);
// console.log(true == 2); // false

// console.log('' == false); // true
// console.log('' === false); // false
// console.log('' !== false); // true


// ===================// Условный оператор if else // ====================

// if () {} // базовый синтаксис условия

// if (/*условие*/) {
// 	// тело условия
// }           


// let userAge; // let userAge = 18;
// let inputValue = 18; // для наглядности
// userAge = inputValue;

// if (userAge > 18) {  // если userAge > 18 true то выполнить тело условия
//   console.log('Welcome, user');
// } else { // esli userAge > 18 false
//   console.log('Sorry, user');
// }

// if (userAge === 18) {
//      console.log('You became a surprise!');   
// } else if (userAge > 18) {
//      console.log('Welcome, user');
// } else {
//      console.log('Sorry, user');   
// }


// let inputAge = '31';

// if (Number(inputAge) > 18) {
//         console.log('Login');
// }


// let userAge = 19;

// if (userAge === 18) { // если userAge > 18 true то выполнить тело условия
// 	console.log('Ты выиграл приз!')
// } else if (userAge > 18) {
// 	console.log('Welcome, user')
// } else { // если userAge > 18 false
// 	console.log('Sorry, user')
// }


// let currentValue = null;

// if (currentValue) {
//  	console.log('Это положительное значение')
// } else if (typeof currentValue === 'string') {
// 	console.log('Это пустая строка...')
// } else {
//  	console.log('Это вообще мало того что false, так ещё и не строка даже')
// }


// let inputAge = '31';

// if (Number(inputAge) > 18) {
// 	console.log('Login!')
// }


// let number = -1;
// let str = '1';

// console.log(number + Number(str));

// if (number === str) {
//  console.log(number + str); // не попадаем
// } else {
//  console.log(number + Number(str)); // выполняется
// }

// console.log(null === undefined); // false
// console.log(null == undefined); // true

// let name = '';
// console.log(!!'a');


// ===============// Logic Operators // =================================

// || -  логическое ИЛИ
// && - логическое И ampersant
// ! - логическое НЕ

// let booleanResult = 1 === 1 || 2 === 2; // true 
// let booleanResult = 1 !== 1 || 2 === 2; // true
// let booleanResult = 1 !== 1 || 2 !== 2; // false
// console.log(booleanResult);

// let booleanResult = 1 === 1 && 2 === 2; // true
// let booleanResult = 1 === 1 && 2 !== 2; // false
// console.log(booleanResult);

// let booleanResult = 1 === 1 && 2 === 2; // true
// console.log(!booleanResult); // провести отрицание // false


// console.log(1 === 1 || 2 === 2);
// console.log(1 === 1 || 2 !== 2);
// console.log(1 !== 1 || 2 === 2 || 3 === 3 || 4 === 4);
// console.log(1 !== 1 || 2 !== 2);

// console.log(1 === 1 && 2 === 2);
// console.log(1 === 1 && 2 !== 2);
// console.log(1 !== 1 && 2 === 2);
// console.log(1 !== 1 && 2 !== 2);


// let time = 14;

// if (time > 10 && time < 18) {
//     console.log('Office is open');
// } 

// console.log(undefined || null || '' || 0);

// let name = '666';
// let defaultName = 'null string';
// let currentName = 'Iron Man';

// console.log(name || defaultName || currentName || 'undefined name');
// console.log(name && currentName && defaultName);

// отработает при 0, '', false и не отработает при undefined/null
// let userName = false;
// console.log(false ?? 'Anonimus');



// let time = 20;

// if (time > 10 && time < 18) {
//        console.log('Office is open');
// }


// let currentYear = 2022;
// let year = 2024;

// if (currentYear === year) {
//         console.log('Современность');
// } else if (currentYear > year) {
//         console.log('Застряли в прошлом');
// } else {
//         console.log('Убежали вперед');
// }


// ===============// IF ELSE // =================================

// if (condition_1) {
//     action_1;
// } else if (condition_2) {
// 	action_2;
// } else if (condition_3) {
// 	action_3;
// } else if (condition_4) {
// 	action_4;
// } else if (condition_5) {
// 	action_5;
// } else {
// 	action_default;
// }

// let currentYear = 2022;
// let year = 2024;

// if (currentYear === year) {
// 	console.log('Современность');
// } else if (currentYear > year) {
// 	console.log('Застряли в прошлом');
// } else {
// 	console.log('Убежали вперед');
// }

// if (2 === 1) console.log('Равны');
// console.log('Всегда выводится');

// 0, undefined, false, '', null, NaN - возвращают false
// if (0) {
// 	console.log('hello'); // Не выводится
// }

// let str = '';
// if (str !== 'ok') {
// 	console.log('test');
// }

// function isEven(number) {
//     return number % 2 === 0;
// }
// if ( !isEven(7) ) {}

// =======================================================================

// (condition) ? code_if_true : code_else // if  else

// let isLogin = false;
// isLogin
//      ? console.log('Login'); // true
//      : console.log('LogOut'); // false


// let age = 20;
// let result = age >= 18
//               ? 'Совершеннолетний'; // true
//               : 'Слишком юн'; // false

// let result;
// if (age >= 18) {
        // result = 'Совершеннолетний';    
// } else {
// result = 'Слишком юн'; 
// }

// console.log(result);


// let result =
// 	age > 18
// 		? 'Совершеннолетний'
// 		: age === 18
// 		? 'О! прекрассный возраст'
// 		: 'Слишком юн';

// ===========================================================================

// Что выведет этот скрипт?

// let name = 'Ilya';

// console.log(`hello ${1}`);
// console.log(`hello ${"name"}`);
// console.log(`hello ${name}`);


// Задача:
//  У нас есть новый дом на 1000 квартир
// 	- 100 квартир купили в кредит
// 	- 100 квартир купили за наличные
// 	- 200 квартир арендовали
// 	- Оставшиеся квартиры стоят пустые
// 	- Сколько всего квартир уже занято?
// 	- Сколько квартир ещё нужно занять?
// 	- Чего больше занятых квартир или не занятых? (вывести значение в консоль)
// 	- в зависимости от того каких квартир больше 
// 	выводите в консоль сообщение об этом 'У нас больше пустых квартир' или 'У нас больше занятых квартир'

let house = 1000;
let credit = 100;
let cash = 100;
let lising = 200;
let empty = house - (credit + cash + lising);
let notEmpty = credit + cash + lising;
if (empty > notEmpty) {
     console.log('Больше пустых');
} else {
        console.log('Больше занятых');
}   
