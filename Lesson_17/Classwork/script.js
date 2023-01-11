// 1) написать скрипт, который получает через prompt число и выводит в консоль
// его квадрат

/* const number =  prompt ('укажите число');
console.log(number ** 2); */
/* 
const result = ('b' + 'a' + + 'c').toLowerCase();
console.log(result); */ // banan

// 2) написать скрипт, который получает два числа через prompt (два вызова)
// и выводит в консоль наибольшее
/* const num1 =  +prompt ('укажите число');

const num2 =  +prompt ('укажите число');
/* if (num1>num2){
    console.log(num1);
} else {
    console.log(num2);
}; */
/*console.log(num1>num2 ? num1: num2); */

// 3) напишите функцию, которая принимает аргумент (число) и
// возвращает true, если число четное и false в ином случае

/* const number = (num) => num%2 === 0;
/*     if (num%2 === 0) {
        return true;
    } else {
        return false;
} */
/*console.log(number (5));
console.log(number (4)); */

// 4) написать скрипт, который формирует массив из цифр от 0 до 9.
// массив вывести в консоль

/* const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(i);
}
console.log(arr); */

/* const arr = [...newArr(10)].map((_, index)  => index);
console.log(arr); */

// 5) написать цикл, который проходится по массиву numbers
// и находит сумму четных чисел
// результат необходимо вывести в консоль
/* 
const numbers = [12, 4, 3, 34, 3, 1, 5, 34];
let evenSum = 0; */

//1 variant
/* for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  }
} */

//2 variant
/* numbers.forEach(elem => evenSum += (elem % 2 === 0) ? elem : 0);
console.log(evenSum); */

const arr = [12, 5, -34, 2, 38, -6, 4, 32, -5, 27];

/* arr.forEach((elem, index, arr) => console.log(elem, index, arr)); */

//arr.forEach((elem, index, arr) => console.log(`Elem = ${elem}, index = ${index}, arr = ${arr}`));

/* function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i , arr)        
    }
}
forEach(arr, (elem, index, arr) => console.log(`Elem = ${elem}, index = ${index}, arr = ${arr}`)); 
 */
/* const result = arr.map(elem => elem ** 2);
console.log(result); */

// вызвать метод map и все отрицательные числа
// преобразовать в положительные

const result1 = arr.map((elem) => (elem < 0 ? -elem : elem));
//.forEach(elem => console.log(elem));
console.log(result1);
console.log("---------------------");

const result2 = arr.filter((elem) => elem > 0);
console.log(result2);
console.log("------------------");

// используя метод filter сформируйте массив, состоящий только
// из чисел от -10 до 10

const result3 = arr.filter((elem) => elem >= -10 && elem <= 10);
console.log(result3);
console.log("-------------------");

const result4 = arr.find((elem) => elem < 0);
console.log(result4);
console.log("------------");

// вызвать метод find, который возрващает первое слово, которое короче 7 символов

const arr1 = ["велосипед", "смокаты", "коньки", "лыжи"];

const result5 = arr1.find((elem) => elem.length < 7);
console.log(result5);
console.log("-----------------");

const user = {
  name: "Anatoliy",
  lastname: "Ushanov",
  age: 29,
};

console.log(user.name);
console.log(user.age);
console.log("-----------");

const products = [
  {
    id: 1,
    title: "велосипед",
    price: 45000,
  },
  {
    id: 2,
    title: "самокат",
    price: 15000,
  },
  {
    id: 3,
    title: "лыжи",
    price: 25000,
  },
  {
    id: 4,
    title: "скейт",
    price: 13000,
  },
  {
    id: 5,
    title: "коньки",
    price: 7000,
  },
];
products.forEach((product) => console.log(product.title));
console.log("----------------");

products.forEach((product) => console.log(product.price));
console.log("------------");

// вызвать метод массива, который сформирует новый массив с
// товарами, дешевле 20 тысяч

const result = products.filter((product) => product.price < 20000);
console.log(result);
console.log("----------------");

// вызвать метод массива и сформировать новый массив, который состоит из
// объектов со свойствами title, price;

const res = products.map((product) => ({
  title: product.title,
  price: product.price,
}));

console.log(res);
