// написать скрипт, который формирует массив из только четных чисел

const numbers = [13, 4, 3, 2, 5, -43, 2, 34, 4];
const newNumber = numbers.filter((elem) => elem % 2 === 0);
console.log(newNumber);

const result = newNumber.reduce((prev, item) => prev + item, 0);
console.log(result);
console.log("---------------------");

// используя reduce найти сумму четных чисел

/* const res1 = numbers.reduce(
  (prev, item) => (item % 2 === 0 ? prev + item : prev),
  0
); */
const res = numbers.reduce(
  (prev, item) => prev + (item % 2 === 0 ? item : 0),
  0
);
console.log(res);
console.log("---------------");
//console.log(res1);

// используя reduce найти наибольшее число в массиве и вывести его

/* const res2 = numbers.reduce((prev, item) => (prev) > item ? prev : item);
console.log(res2); */

function reduce(array, callback, initial) {
  let lastCall = initial;
  for (let i = 0; i < array.length; i++) {
    lastCall = callback(lastCall, array[i]);
  }
  return lastCall;
}
const result1 = reduce(numbers, (prev, item) => (prev > item ? prev : item), 0);
console.log(result1);
console.log("----------------");

const products = [
  {
    id: 1,
    title: "велосипед",
    price: 45000,
  },
  {
    id: 2,
    title: "ролики",
    price: 25000,
  },
  {
    id: 3,
    title: "самокат",
    price: 15000,
  },
  {
    id: 4,
    title: "сноуборд",
    price: 27000,
  },
  {
    id: 5,
    title: "лыжи",
    price: 30000,
  },
];

// используя методы массивов создайте массив из названий товаров

/* const titles = products.map((product) => product.title); */
/* const titles = products.map((product) => {
const {title} = product;
return title
}); */
/* const titles = products.map(({title}) => {
    return title;
}); */
const titles = products.map(({ title, price }) => `${title} - ${price}`);
/* const titles = products.map((product) => `${product.title} - ${product.price}`); */ // расшифровка
console.log(titles);

console.log("-----------------");

// написать скрипт, который формирует массив из объектов с товарами
// которые стоят дешевле 26000

const titles1 = products.filter(({ price }) => price < 26000);
console.log(titles1);
console.log("-----------------");

//найти общую сумму товаров используя методы массивов

const sum = products.reduce((prev, product) => prev + product.price, 0);
console.log(sum);
console.log("-----------------");

//найти общую количество товаров используя методы массивов

const res4 = products.reduce((prev) => prev + 1, 0);
console.log(res4);
console.log("-----------------");
// используя методы массивов найти самый дорогой товар

const sum2 = products.reduce((prev, item) =>
  prev.price > item.price ? prev : item
);
console.log(sum2);
console.log("-----------------");

const products1 = [
  {
    id: 1,
    title: "велосипед",
    price: 45000,
    marks: [4, 3, 5, 3],
  },
  {
    id: 2,
    title: "ролики",
    price: 25000,
    marks: [4, 3, 5, 5],
  },
  {
    id: 3,
    title: "самокат",
    price: 15000,
    marks: [3, 5, 3],
  },
  {
    id: 4,
    title: "сноуборд",
    price: 270000,
    marks: [4, 3, 5],
  },
  {
    id: 5,
    title: "лыжи",
    price: 30000,
    marks: [4],
  },
];

// используя методы массивов
// написать процесс, который позволит сформировать массив
// из объектов с названием, ценой и средней оценкой

/* const newP = products1.map(({ id, title, price, marks }) => ({
  id,
  title,
  price,
  avg_mark: marks.reduce((a, b) => a + b / marks.length),
})); */

const newP = products1.map(({marks, ...product}) => ({
    ...product,
    avg_mark: marks.reduce((a, b) => a + b) / marks.length
    })); 

/* const newP = products1.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    avg_mark: product.marks.reduce((a, b) => a + b / product.marks.length),
  })); */

console.log(newP);
/* const max =  products1.map(marcs => {Math.max.marks});
console.log(max); */

const products2 = [
    {
    id: 1,
    title: 'велосипед',
    price: 45000,
    count: 3,
    marks: [4, 3, 5, 3]
    },
    {
    id: 2,
    title: 'ролики',
    price: 25000,
    count: 5,
    marks: [4, 3, 5, 5]
    },
    {
    id: 3,
    title: 'самокат',
    price: 15000,
    count: 2,
    marks: [3, 5, 3]
    },
    {
    id: 4,
    title: 'сноуборд',
    price: 270000,
    count: 0,
    marks: [4, 3, 5]
    },
    {
    id: 5,
    title: 'лыжи',
    price: 30000,
    count: 1,
    marks: [4]
    }
    ]; 

    // используя методы массивов найти общую стоимость всех товаров

    const newRes = products2.reduce((prev, {price, count}) => prev + price * count, 0);

    console.log(newRes);