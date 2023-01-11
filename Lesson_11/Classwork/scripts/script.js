// ================// Задачи //===========================
// 1) написать скрипт, который получает через prompt число и выводит в консоль
// его квадрат


// const number = prompt('Give a number:');
// console.log(number ** 2);


// const result = ('b' + 'a' + + 'c').toLowerCase();


// 2) написать скрипт, который получает два числа через prompt (два вызова)
// и выводит в консоль наибольшее


// const firstNum = +prompt("Give a number:");
// const secondNum = +prompt("Give a number:");

// if (firstNum > secondNum) {
//   console.log(firstNum);
// } else {
//   console.log(secondNum);
// }

// console.log(firstNum > secondNum ? firstNum : secondNum);


// 3) напишите функцию, которая принимает аргумент (число) и 
// возвращает true, если число четное и false в ином случае


const check = (value) => value % 2 === 0;
//   const check = (value) => !(value % 2);

//   console.log(check(12));
//   console.log(check(13));


// 4) написать скрипт, который формирует массив из цифр от 0 до 9.
// массив вывести в консоль


// let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(i);
// }

// console.log(arr);


// const result = [...new Array(10)].map((_, index) => index);
// console.log(result);


// 5) написать цикл, который проходится по массиву numbers 
// и находит сумму четных чисел
// результат необходимо вывести в консоль


// const numbers = [12, 4, 3, 34, 3, 1, 5, 34];

// let even_sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//      if (numbers[i] % 2 === 0) {
//         even_sum += numbers[i]
//      } else {
//          0
//      }
  
// }

// console.log(even_sum);

// for (let i = 0; i < numbers.length; i++) {
//     even_sum = numbers[i] % 2 === 0 ? numbers[i] : 0;
// }

// numbers.forEach(elem => even_sum += elem % 2 === 0 ? elem : 0);

// console.log(even_sum);


// =============// Методы //====================================


// const arr = [12, 5, -34, 2, 38, -6, 4, -32, -5, 27];

// arr.forEach((elem, index, arr) => console.log(elem, index, arr));

// arr.forEach((elem, index, arr) =>
//   console.log(`Elem = ${elem}, index = ${index}, arr = ${arr}`)
// );


// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// forEach(arr, (elem, index, arr) => console.log(elem, index, arr));


// let result = arr.map(elem => elem ** 2);
// console.log(result);


// вызвать метод map и все отрицательные числа
// преобразовать в положительные


// let negNum = arr.map(el => el > 0 ? el: -el)
//                 .forEach(el => console.log(el));
// console.log(negNum);


// const result = arr.filter(elem => elem > 0);
// console.log(result);


// используя метод filter сформируйте массив, состоящий только
// из чисел от -10 до 10

// const newArr = arr.filter(el => el >= -10 && el <= 10);
// console.log(newArr);


// const result = arr.find( el => el < 0);
// console.log(result);


// вызвать метод find, который возрващает первое слово, которое короче 7 символов

// const arr = ['велосипед', 'сaмокат', 'коньки', 'лыжи'];

// const word = arr.find(el => el.length < 7);
// console.log(word);


// const user = {
//   name: "Anatoliy",
//   lastname: "Ushanov",
//   age: 21
// };

// console.log(user.name);
// console.log(user.age);


const products = [
  {
      id: 1,
      title: 'велосипед',
      price: 45000
  },
  {
      id: 2,
      title: 'самокат',
      price: 15000
  },
  {
      id: 3,
      title: 'лыжи',
      price: 25000
  },
  {
      id: 4,
      title: 'скейт',
      price: 13000
  },
  {
      id: 5,
      title: 'коньки',
      price: 7000
  }
];


// products.forEach(product => console.log(product.title));

// вызвать метод массива, который сформирует новый массив с 
// товарами, дешевле 20 тысяч

// const prod = products.filter(el => el.price < 20000);
// console.log(prod);


// вызвать метод массива и сформировать новый массив, который состоит из 
// объектов со свойствами title, price;

// const result = products.map(el => (
//     {
//         title: el.title,
//         price: el.price
//     }
// ));
// console.log(result);

// ==============================================================

// let someArray = [1, 4, 3, 2, 5, 6, 7] // arr.length = 7

// function filterRangeInPlace(arr, a,b) { // arr мы изменяем исходный
//     for (let i = 0; i < arr.length; i++) { // 1. перебор массива
//         if (arr[i] < a || arr[i] > b) { // условие выхода из диапазона
//             arr.splice(i,1);
//             i--;
//         }
//     }
// }


// console.log(someArray);
// filterRangeInPlace(someArray, 1,4);
// console.log(someArray);


// let someArray = ["Вввв","Ffff"];
// let someArray2 = [...someArray];
// console.log(
// 	...someArray
// )

// function someFun(
// 	importantArg1,
// 	importantArg2,
// 	...rest
// 	) {
// 	console.log(importantArg1)
// 	console.log(importantArg2)

// 	if (importantArg2 === 35) {
// 		console.log(rest)
// 		rest.forEach(
// 			item => console.log(item)
// 		)
// 	}
// }

// someFun('Tjaša', 35, 'fdfd')


// const [name, age, ...rest] = ['Tjaša', 35, 'fdfd', 4545, false];
// console.log( name, age );
// console.log( rest );


// Пустой объект («пустой ящик») можно создать, 
// используя один из двух вариантов синтаксиса:

// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {}; // синтаксис "литерал объекта"


// Литералы и свойства
// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30,     // под ключом "age" хранится значение 30
// };

// // // // получаем значение из свойства объекта:
// console.log( user.name ); // John
// console.log( user.age ); // 30
// // через точку по ключу

// console.log( user ); // исходный объект {name: 'John', age: 30}
// user.isAdmin = true; // добавим свойство с логическим значением
// console.log( user ); // c новым свойством isAdmin {name: 'John', age: 30, isAdmin: true}
// delete user.age; // удаление свойства
// console.log( user ); // без свойства age {name: 'John', isAdmin: true}


// Объект, объявленный как константа, может быть изменён
// потому что меняется не сам объект, а его свойство
// const user = {
//   name: "John"
// };
// user.name = "Pete"; // (*)
// console.log(user.name); // Pete

// console.log(user["name"]); // Pete - можно обратится и не через точку


// const user = {
//   name: "John",
//   age: 25
// };
// let userKey = "age";
// // console.log(user)

// console.log( user[userKey] ); // Pete - и через переменную соотвественно
// // console.log(user)
// // user = { // а вот это уже вызовет ошибку
// //   age: 25
// // }


// // так же к ключам тоже можно задавать через квадратные скобки
// let fruit = "apple";

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// console.log(bag)
// console.log( bag.apple ); // 5
// console.log( bag["apple"] ); // 5
// console.log( bag[fruit] ); // 5


// соотвественно, ключ может вычислятся динамически
// но используется это не частно, но тем не менее
// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// Квадратные скобки дают намного больше возможностей, 
// чем запись через точку. 
// Они позволяют использовать любые имена свойств и переменные, 
// хотя и требуют более громоздких конструкций кода.

// Подведём итог: в большинстве случаев, 
// когда имена свойств известны и просты, 
// используется запись через точку. 
// Если же нам нужно что-то более сложное, 
// то мы используем квадратные скобки.


// Свойство из переменной
// В реальном коде часто нам необходимо использовать существующие переменные 
// как значения для свойств с тем же именем.

// function makeUser(name, age = null, email = null) {//"John", 30
//   return {
//     name,//"John"
//     age: age ? age : null,
//     email: email ? email : null,
//   };
// }

// let user = makeUser("John", null, "nullra@gmail.com"); // {name: "John", age: 30}
// let user2 = makeUser(); // {name: "Alex", age: 45}
// let user3 = makeUser("Vlad", 31); // {name: "Vlad", age: 31}

// console.log(user,user2,user3);

// В примере выше название свойств name и age совпадают с названиями переменных, 
// которые мы подставляем в качестве значений этих свойств. 
// Такой подход настолько распространён, 
// что существуют специальные короткие свойства для упрощения этой записи.

// Вместо name:name мы можем написать просто name:

// function makeUser(name, age) {
//   return {
//     name, // то же самое, что и name: name
//     age   // то же самое, что и age: age
//   };
// }


// Ограничения на имена свойств
// Как мы уже знаем, имя переменной не может совпадать 
// с зарезервированными словами, такими как «for», «let», «return» и т.д.
// Но для свойств объекта такого ограничения нет:

// эти имена свойств допустимы
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// console.log( obj.for + obj.let + obj.return );  // 6


// обращение к несуществующему свойству
// let user = {
// 	age: 25
// };
// console.log( user.noSuchProperty === undefined ); // true значит свойства нет
// console.log(user)


// Проверка существования свойства, оператор «in»
// для проверки существования свойства в объекте.

// Синтаксис оператора:
// "key" in object

// let user = { 
// 	name: "John", 
// 	age: 30 
// };

// let userKey = "age";
// console.log( userKey in user ); // true, user.age существует
// console.log( "blabla" in user ); // false, user.blabla не существует


// let user = { age: 30 };
// let key = "age";
// console.log( key in user ); // true, имя свойства было взято из переменной key


// Для чего вообще нужен оператор in? Разве недостаточно сравнения с undefined?
// В большинстве случаев прекрасно сработает сравнение с undefined. 
// Но есть особый случай, когда оно не подходит, и нужно использовать "in".
// Это когда свойство существует, но содержит значение undefined:
// let obj = {
//   tel: 656565,
//   email: "babbaba@gmail.com",
//   photo: null
// };

// obj.test//undefined
// obj.photo//null

// console.log( obj.test ); //  выведет undefined, значит свойство не существует?
// console.log( "test" in obj ); // true, свойство существует!


// Перебор объекта
// Цикл "for..in"
// Для перебора всех свойств объекта используется цикл for..in. 
// Этот цикл отличается от изученного ранее цикла for(;;).

// Синтаксис:
// for (key in object) {
//   // тело цикла выполняется для каждого свойства объекта
// }


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let someKey in user) { // пока есть ключи в объекте
//   // ключи
//   console.log( someKey );  // "name", "age", "isAdmin"
//   // значения ключей
//   console.log( user[someKey] ); // John, 30, true
// }


// Все конструкции «for» позволяют нам объявлять 
// переменную внутри цикла, как, например, let someKey здесь.

// Кроме того, мы могли бы использовать другое имя переменной. 
// Например, часто используется вариант "for (let prop in obj)".


// Итого
// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства (пары ключ-значение), где:

// Ключи свойств должны быть строками.
// Значения могут быть любого типа.
// Чтобы получить доступ к свойству, мы можем использовать:

// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. 
// Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].

// Дополнительные операторы:
// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).
// То, что мы изучали в этой главе, называется 
// «простым объектом» («plain object») или просто Object.

// В JavaScript есть много других типов объектов:

// Array для хранения упорядоченных коллекций данных,
// Date для хранения информации о дате и времени,
// Error для хранения информации об ошибке.
// … и так далее.


// Задачи
// 1)
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.


// 2)
// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};
// console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false


// 3)
// Объекты-константы
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//   name: "John"
// };

// // // это будет работать?
// user.name = "Pete";


// Копирование объектов и ссылки


// Одно из фундаментальных отличий объектов от примитивов заключается в том, 
// что объекты хранятся и копируются «по ссылке»
// Это легко понять, если мы немного заглянем под капот того, 
// что происходит, когда мы копируем значение.

// Давайте начнём с примитива, такого как строка.
// Здесь мы помещаем копию message во phrase:
// let message = "Привет!";
// let phrase = message;
// В результате мы имеем две независимые переменные, каждая из которых хранит строку "Привет!".


// Объекты ведут себя иначе.
// Переменная, присвоенная объекту, хранит не сам объект, 
// а его «адрес в памяти» – другими словами, «ссылку» на него.

// При копировании переменной объекта копируется ссылка, но сам объект не дублируется.

// let user = { name: "John" };
// let admin = user; // копируется ссылка
// Теперь у нас есть две переменные, 
// каждая из которых содержит ссылку на один и тот же объект


// Мы можем использовать любую переменную для доступа к объекту и изменения его содержимого:
// let user = { name: 'John' };
// let admin = user;
// admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
// console.log(user.name); // 'Pete', изменения видны по ссылке из переменной "user"


// Сравнение по ссылке
// Два объекта равны только в том случае, если это один и тот же объект.

// Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:
// let a = {};
// let b = a; // копирование по ссылке
// console.log( a == b ); // true, обе переменные ссылаются на один и тот же объект
// console.log( a === b ); // true


// И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):
// let a = {};
// let b = {}; // два независимых объекта
// console.log( a == b ); // false


// Клонирование и объединение, Object.assign

// клонирование перебором
// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // новый пустой объект

// // давайте скопируем все свойства user в него
// for (let key in user) { // name, age
//   clone[key] = user[key];
//   //1-clone.name = "John"
//   //2-clone.age = 30
// }
// console.log(clone)
// console.log(clone === user)


// console.log(clone)
// console.log(user)
// // теперь clone это полностью независимый объект с тем же содержимым
// console.log( user.name ); // все ещё John в первоначальном объекте


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// START 11.02.2022

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Также мы можем использовать для этого метод Object.assign.
// Object.assign(dest, [src1, src2, src3...]) // Синтаксис

// Первый аргумент dest — целевой объект.
// Остальные аргументы src1, ..., srcN (может быть столько, сколько необходимо) являются исходными объектами

// Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. 
// Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
// Возвращает объект dest.

// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user


// let user = {};
// let test = { test: '1' };
// let test2 = { test2: '2' };
// let test3 = { test3: '3' };
// let test4 = { test4: '4' };
// Object.assign(user, test, test2, test3, test4);

// function psevdoAssing(targetObj, ...restObjects) {
// 	// body...
// }

// console.log(user)

// теперь user = { name: "John", canView: true, canEdit: true }

// Если скопированное имя свойства уже существует, оно будет перезаписано:
// let user = { name: "John" };
// Object.assign(user, { name: "Pete" });
// console.log(user.name); // теперь user = { name: "Pete" }


// Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);
// Он копирует все свойства user в пустой объект и возвращает его.


// Вложенное клонирование
// До сих пор мы предполагали, что все свойства user примитивныe. 
// Но свойства могут быть и ссылками на другие объекты. Что с ними делать?

// Например, есть объект:


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// console.log( clone );

// clone.sizes.height = 100;

// console.log( clone );
// console.log( user );

// console.log( user.sizes.height ); // 182

// Теперь недостаточно просто скопировать clone.sizes = user.sizes, 
// потому что user.sizes – это объект, 
// он будет скопирован по ссылке. 
// Таким образом, clone и user будут иметь общий объект sizes:


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// console.log( user.sizes === clone.sizes ); // true, тот же объект

// // user и clone обладают общим свойством sizes
// user.sizes.width++;       // изменяем свойства в первом объекте
// console.log(clone.sizes.width); // 51, видим результат в другом


// Чтобы исправить это, мы должны использовать цикл клонирования, 
// который проверяет каждое значение user[key] и, если это объект, 
// тогда также копирует его структуру. Это называется «глубоким клонированием».

// Мы можем реализовать глубокое клонирование, используя рекурсию. 
// Или, чтобы не изобретать велосипед заново, возьмите готовую реализацию, 
// например _.cloneDeep(obj) из библиотеки JavaScript lodash.


// Итого
// Объекты присваиваются и копируются по ссылке. 
// Другими словами, переменная хранит не «значение объекта», 
// а «ссылку» (адрес в памяти) на это значение. 

// Таким образом, копирование такой переменной
//  или передача её в качестве аргумента функции копирует эту ссылку, а не сам объект.

// Все операции с использованием скопированных ссылок 
// (например, добавление/удаление свойств) выполняются с одним и тем же объектом.

// Чтобы создать «реальную копию» (клон), 
// мы можем использовать Object.assign для так называемой «поверхностной копии» 
// (вложенные объекты копируются по ссылке) 
// или функцию «глубокого клонирования», такую как _.cloneDeep(obj)(lodash).


// Методы для объектов
// Object.keys, values, entries

// Для простых объектов доступны следующие методы:

// let user = {
//   name: "John",
//   age: 30
// };

// let userKeysArray = Object.keys(user); // [ "name", "age" ]
// console.log(userKeysArray)

// let userValuesArray = Object.values(user);  // [ "John", 30 ]
// console.log(userValuesArray)

// let userEntriesArray = Object.entries(user);  [ ["name", "John"], ["age", 30] ]
// console.log(userEntriesArray)


// let someObj = makeNewUser(userEntriesArray);
// console.log(someObj);


// function makeNewUser(userArr) { // получили массив из массивов которые содержат пары ключ - значение
// 	let userObj = {}; // создали новый пустой объект

// 	userArr.forEach( // итерируя исходный массив
// 		function(item) {
// 			const key = item[0];
// 			const value = item[1];
// 			if (key === 'age') {
// 				userObj.firstAge = value;
// 			} else {
// 				userObj[key] = value; // заполняет пустой объект данными из массива
// 			}
			
// 			//item - ["name", "John"] на первом цикле и ["age", 30] на втором цикле
// 			//item[0] - "name" на первом цикле и "age" на втором цикле
// 			//item[1] - "John" на первом цикле и 30 на втором цикле
// 		}
// 	)

// 	return userObj

// }


// function entries(obj) {
// 	let arr = [];
// 	for (let key in obj) {
// 		let iterArray = [];
// 		iterArray.push(key);
// 		iterArray.push(obj[key])
// 		arr.push(iterArray)
// 	}
// 	return arr;
// }

// console.log(userEntriesArray)


// Object.keys(user) – возвращает массив ключей.
// Object.values(user) – возвращает массив значений.
// Object.entries(user) – возвращает массив пар [ключ, значение].

// let user = {
//   name: "John",
//   age: 30
// };
// Object.keys(user) // ["name", "age"]
// Object.values(user) // ["John", 30]
// Object.entries(user) // [ ["name","John"], ["age",30] ]

// console.log( Object.keys(user) ); // ["name", "age"]
// console.log( Object.values(user) ); // ["John", 30]
// console.log( Object.entries(user) ); // [ ["name","John"], ["age",30] ]


// Вот пример использования Object.values ​​для перебора значений свойств в цикле:
// let user = {
//   name: "John",
//   age: 30
// };

// // // перебор значений
// for (let value of Object.values(user)) { // ["John", 30]
//   console.log(value); // John, затем 30
// }


// Задачи

// Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), 
// которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// console.log( sumSalaries(salaries) ); // 650


// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// console.log( count(user) ); // 2


// Деструктуризация объекта
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let { height, title, width } = options;


// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200


// Остаток объекта «…» rest operator
// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };

// let someObj = { ...options };
// console.log(someObj)
// someObj.height = 9999;
// console.log(someObj)
// console.log(options)
// title = свойство с именем title
// rest = объект с остальными свойствами
// let { 
// 	title,
// 	...restBlablabla 
// } = options;


// let title = options.title;
// let restBlablabla = {};
// for (let key in options) {
// 	if (key !== 'title') {
// 		restBlablabla[key] = options[key]
// 	}
// }


// сейчас title="Menu", rest={height: 200, width: 100}
// console.log(title);  // Menu
// console.log(restBlablabla);
// console.log(restBlablabla.height);  // 200
// console.log(restBlablabla.width);   // 100


// function test(importantParam, ...restParam) {
// 	console.log(importantParam)
// 	console.log(restParam[3])
// }


// test(555, 1, 2, 'fdfdf', 3, 4, 'fdfdsfs')


// Задачи
// Деструктурирующее присваивание
// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false


// Максимальная зарплата
// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

//====================================================================================

// let someArray = [1, 4, 3, 2, 5, 6, 7] // arr.length = 7

// function filterRangeInPlace(arr, a,b) { // arr мы изменяем исходный
//     for (let i = 0; i < arr.length; i++) { // 1. перебор массива
//         if (arr[i] < a || arr[i] > b) { // условие выхода из диапазона
//             arr.splice(i,1);
//             i--;
//         }
//     }
// }


// console.log(someArray);
// filterRangeInPlace(someArray, 1,4);
// console.log(someArray);


// let someArray = ["Вввв","Ffff"];
// let someArray2 = [...someArray];
// console.log(
// 	...someArray
// )

// function someFun(
// 	importantArg1,
// 	importantArg2,
// 	...rest
// 	) {
// 	console.log(importantArg1)
// 	console.log(importantArg2)

// 	if (importantArg2 === 35) {
// 		console.log(rest)
// 		rest.forEach(
// 			item => console.log(item)
// 		)
// 	}
// }

// someFun('Tjaša', 35, 'fdfd')


// const [name, age, ...rest] = ['Tjaša', 35, 'fdfd', 4545, false];
// console.log( name, age );
// console.log( rest );


// Пустой объект («пустой ящик») можно создать, 
// используя один из двух вариантов синтаксиса:

// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {}; // синтаксис "литерал объекта"


// Литералы и свойства
// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30,     // под ключом "age" хранится значение 30
// };

// // // // получаем значение из свойства объекта:
// console.log( user.name ); // John
// console.log( user.age ); // 30
// // через точку по ключу


// console.log( user ); // исходный объект {name: 'John', age: 30}
// user.isAdmin = true; // добавим свойство с логическим значением
// console.log( user ); // c новым свойством isAdmin {name: 'John', age: 30, isAdmin: true}
// delete user.age; // удаление свойства
// console.log( user ); // без свойства age {name: 'John', isAdmin: true}


// Объект, объявленный как константа, может быть изменён
// потому что меняется не сам объект, а его свойство
// const user = {
//   name: "John"
// };
// user.name = "Pete"; // (*)
// console.log(user.name); // Pete

// console.log(user["name"]); // Pete - можно обратится и не через точку


// const user = {
//   name: "John",
//   age: 25
// };
// let userKey = "age";
// // console.log(user)

// console.log( user[userKey] ); // Pete - и через переменную соотвественно
// // console.log(user)
// // user = { // а вот это уже вызовет ошибку
// //   age: 25
// // }


// // так же к ключам тоже можно задавать через квадратные скобки
// let fruit = "apple";

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// console.log(bag)
// console.log( bag.apple ); // 5
// console.log( bag["apple"] ); // 5
// console.log( bag[fruit] ); // 5


// соотвественно, ключ может вычислятся динамически
// но используется это не частно, но тем не менее
// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// Квадратные скобки дают намного больше возможностей, 
// чем запись через точку. 
// Они позволяют использовать любые имена свойств и переменные, 
// хотя и требуют более громоздких конструкций кода.

// Подведём итог: в большинстве случаев, 
// когда имена свойств известны и просты, 
// используется запись через точку. 
// Если же нам нужно что-то более сложное, 
// то мы используем квадратные скобки.


// Свойство из переменной
// В реальном коде часто нам необходимо использовать существующие переменные 
// как значения для свойств с тем же именем.

// function makeUser(name, age = null, email = null) {//"John", 30
//   return {
//     name,//"John"
//     age: age ? age : null,
//     email: email ? email : null,
//   };
// }

// let user = makeUser("John", null, "nullra@gmail.com"); // {name: "John", age: 30}
// let user2 = makeUser(); // {name: "Alex", age: 45}
// let user3 = makeUser("Vlad", 31); // {name: "Vlad", age: 31}

// console.log(user,user2,user3);

// В примере выше название свойств name и age совпадают с названиями переменных, 
// которые мы подставляем в качестве значений этих свойств. 
// Такой подход настолько распространён, 
// что существуют специальные короткие свойства для упрощения этой записи.

// Вместо name:name мы можем написать просто name:

// function makeUser(name, age) {
//   return {
//     name, // то же самое, что и name: name
//     age   // то же самое, что и age: age
//   };
// }


// Ограничения на имена свойств
// Как мы уже знаем, имя переменной не может совпадать 
// с зарезервированными словами, такими как «for», «let», «return» и т.д.
// Но для свойств объекта такого ограничения нет:

// эти имена свойств допустимы
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// console.log( obj.for + obj.let + obj.return );  // 6


// обращение к несуществующему свойству
// let user = {
// 	age: 25
// };
// console.log( user.noSuchProperty === undefined ); // true значит свойства нет
// console.log(user)


// Проверка существования свойства, оператор «in»
// для проверки существования свойства в объекте.

// Синтаксис оператора:
// "key" in object

// let user = { 
// 	name: "John", 
// 	age: 30 
// };

// let userKey = "age";
// console.log( userKey in user ); // true, user.age существует
// console.log( "blabla" in user ); // false, user.blabla не существует


// let user = { age: 30 };
// let key = "age";
// console.log( key in user ); // true, имя свойства было взято из переменной key


// Для чего вообще нужен оператор in? Разве недостаточно сравнения с undefined?
// В большинстве случаев прекрасно сработает сравнение с undefined. 
// Но есть особый случай, когда оно не подходит, и нужно использовать "in".
// Это когда свойство существует, но содержит значение undefined:
// let obj = {
//   tel: 656565,
//   email: "babbaba@gmail.com",
//   photo: null
// };

// obj.test//undefined
// obj.photo//null

// console.log( obj.test ); //  выведет undefined, значит свойство не существует?
// console.log( "test" in obj ); // true, свойство существует!


// Перебор объекта
// Цикл "for..in"
// Для перебора всех свойств объекта используется цикл for..in. 
// Этот цикл отличается от изученного ранее цикла for(;;).

// Синтаксис:
// for (key in object) {
//   // тело цикла выполняется для каждого свойства объекта
// }


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let someKey in user) { // пока есть ключи в объекте
//   // ключи
//   console.log( someKey );  // "name", "age", "isAdmin"
//   // значения ключей
//   console.log( user[someKey] ); // John, 30, true
// }


// Все конструкции «for» позволяют нам объявлять 
// переменную внутри цикла, как, например, let someKey здесь.

// Кроме того, мы могли бы использовать другое имя переменной. 
// Например, часто используется вариант "for (let prop in obj)".


// Итого
// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства (пары ключ-значение), где:

// Ключи свойств должны быть строками.
// Значения могут быть любого типа.
// Чтобы получить доступ к свойству, мы можем использовать:

// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. 
// Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].

// Дополнительные операторы:
// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).
// То, что мы изучали в этой главе, называется 
// «простым объектом» («plain object») или просто Object.

// В JavaScript есть много других типов объектов:

// Array для хранения упорядоченных коллекций данных,
// Date для хранения информации о дате и времени,
// Error для хранения информации об ошибке.
// … и так далее.


//================// Задачи //=============================
// 1)
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.


// 2)
// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};
// console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false


// 3)
// Объекты-константы
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//   name: "John"
// };

// // // это будет работать?
// user.name = "Pete";


// Копирование объектов и ссылки


// Одно из фундаментальных отличий объектов от примитивов заключается в том, 
// что объекты хранятся и копируются «по ссылке»
// Это легко понять, если мы немного заглянем под капот того, 
// что происходит, когда мы копируем значение.

// Давайте начнём с примитива, такого как строка.
// Здесь мы помещаем копию message во phrase:
// let message = "Привет!";
// let phrase = message;
// В результате мы имеем две независимые переменные, каждая из которых хранит строку "Привет!".


// Объекты ведут себя иначе.
// Переменная, присвоенная объекту, хранит не сам объект, 
// а его «адрес в памяти» – другими словами, «ссылку» на него.

// При копировании переменной объекта копируется ссылка, но сам объект не дублируется.

// let user = { name: "John" };
// let admin = user; // копируется ссылка
// Теперь у нас есть две переменные, 
// каждая из которых содержит ссылку на один и тот же объект


// Мы можем использовать любую переменную для доступа к объекту и изменения его содержимого:
// let user = { name: 'John' };
// let admin = user;
// admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
// console.log(user.name); // 'Pete', изменения видны по ссылке из переменной "user"


// Сравнение по ссылке
// Два объекта равны только в том случае, если это один и тот же объект.

// Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:
// let a = {};
// let b = a; // копирование по ссылке
// console.log( a == b ); // true, обе переменные ссылаются на один и тот же объект
// console.log( a === b ); // true


// И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):
// let a = {};
// let b = {}; // два независимых объекта
// console.log( a == b ); // false


// Клонирование и объединение, Object.assign

// клонирование перебором
// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // новый пустой объект

// // давайте скопируем все свойства user в него
// for (let key in user) { // name, age
//   clone[key] = user[key];
//   //1-clone.name = "John"
//   //2-clone.age = 30
// }
// console.log(clone)
// console.log(clone === user)


// console.log(clone)
// console.log(user)
// // теперь clone это полностью независимый объект с тем же содержимым
// console.log( user.name ); // все ещё John в первоначальном объекте


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// START 11.02.2022

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Также мы можем использовать для этого метод Object.assign.
// Object.assign(dest, [src1, src2, src3...]) // Синтаксис

// Первый аргумент dest — целевой объект.
// Остальные аргументы src1, ..., srcN (может быть столько, сколько необходимо) являются исходными объектами

// Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. 
// Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
// Возвращает объект dest.


// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user


// let user = {};
// let test = { test: '1' };
// let test2 = { test2: '2' };
// let test3 = { test3: '3' };
// let test4 = { test4: '4' };
// Object.assign(user, test, test2, test3, test4);

// function psevdoAssing(targetObj, ...restObjects) {
// 	// body...
// }

// console.log(user)

// теперь user = { name: "John", canView: true, canEdit: true }

// Если скопированное имя свойства уже существует, оно будет перезаписано:
// let user = { name: "John" };
// Object.assign(user, { name: "Pete" });
// console.log(user.name); // теперь user = { name: "Pete" }


// Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:


// let user = {
//   name: "John",
//   age: 30
// };


// let clone = Object.assign({}, user);
// Он копирует все свойства user в пустой объект и возвращает его.


// Вложенное клонирование
// До сих пор мы предполагали, что все свойства user примитивныe. 
// Но свойства могут быть и ссылками на другие объекты. Что с ними делать?

// Например, есть объект:


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// console.log( clone );

// clone.sizes.height = 100;

// console.log( clone );
// console.log( user );

// console.log( user.sizes.height ); // 182

// Теперь недостаточно просто скопировать clone.sizes = user.sizes, 
// потому что user.sizes – это объект, 
// он будет скопирован по ссылке. 
// Таким образом, clone и user будут иметь общий объект sizes:


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// console.log( user.sizes === clone.sizes ); // true, тот же объект

// // user и clone обладают общим свойством sizes
// user.sizes.width++;       // изменяем свойства в первом объекте
// console.log(clone.sizes.width); // 51, видим результат в другом


// Чтобы исправить это, мы должны использовать цикл клонирования, 
// который проверяет каждое значение user[key] и, если это объект, 
// тогда также копирует его структуру. Это называется «глубоким клонированием».

// Мы можем реализовать глубокое клонирование, используя рекурсию. 
// Или, чтобы не изобретать велосипед заново, возьмите готовую реализацию, 
// например _.cloneDeep(obj) из библиотеки JavaScript lodash.


// Итого
// Объекты присваиваются и копируются по ссылке. 
// Другими словами, переменная хранит не «значение объекта», 
// а «ссылку» (адрес в памяти) на это значение. 

// Таким образом, копирование такой переменной
//  или передача её в качестве аргумента функции копирует эту ссылку, а не сам объект.

// Все операции с использованием скопированных ссылок 
// (например, добавление/удаление свойств) выполняются с одним и тем же объектом.

// Чтобы создать «реальную копию» (клон), 
// мы можем использовать Object.assign для так называемой «поверхностной копии» 
// (вложенные объекты копируются по ссылке) 
// или функцию «глубокого клонирования», такую как _.cloneDeep(obj)(lodash).


// Методы для объектов
// Object.keys, values, entries

// Для простых объектов доступны следующие методы:

// let user = {
//   name: "John",
//   age: 30
// };

// let userKeysArray = Object.keys(user); // [ "name", "age" ]
// console.log(userKeysArray)

// let userValuesArray = Object.values(user);  // [ "John", 30 ]
// console.log(userValuesArray)

// let userEntriesArray = Object.entries(user);  [ ["name", "John"], ["age", 30] ]
// console.log(userEntriesArray)


// let someObj = makeNewUser(userEntriesArray);
// console.log(someObj);


// function makeNewUser(userArr) { // получили массив из массивов которые содержат пары ключ - значение
// 	let userObj = {}; // создали новый пустой объект

// 	userArr.forEach( // итерируя исходный массив
// 		function(item) {
// 			const key = item[0];
// 			const value = item[1];
// 			if (key === 'age') {
// 				userObj.firstAge = value;
// 			} else {
// 				userObj[key] = value; // заполняет пустой объект данными из массива
// 			}
			
// 			//item - ["name", "John"] на первом цикле и ["age", 30] на втором цикле
// 			//item[0] - "name" на первом цикле и "age" на втором цикле
// 			//item[1] - "John" на первом цикле и 30 на втором цикле
// 		}
// 	)

// 	return userObj

// }


// function entries(obj) {
// 	let arr = [];
// 	for (let key in obj) {
// 		let iterArray = [];
// 		iterArray.push(key);
// 		iterArray.push(obj[key])
// 		arr.push(iterArray)
// 	}
// 	return arr;
// }

// console.log(userEntriesArray)


// Object.keys(user) – возвращает массив ключей.
// Object.values(user) – возвращает массив значений.
// Object.entries(user) – возвращает массив пар [ключ, значение].


// let user = {
//   name: "John",
//   age: 30
// };
// Object.keys(user) // ["name", "age"]
// Object.values(user) // ["John", 30]
// Object.entries(user) // [ ["name","John"], ["age",30] ]

// console.log( Object.keys(user) ); // ["name", "age"]
// console.log( Object.values(user) ); // ["John", 30]
// console.log( Object.entries(user) ); // [ ["name","John"], ["age",30] ]


// Вот пример использования Object.values ​​для перебора значений свойств в цикле:
// let user = {
//   name: "John",
//   age: 30
// };

// // // перебор значений
// for (let value of Object.values(user)) { // ["John", 30]
//   console.log(value); // John, затем 30
// }


// ==============// Задачи //===========================

// Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), 
// которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// console.log( sumSalaries(salaries) ); // 650


// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// console.log( count(user) ); // 2


// Деструктуризация объекта
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let { height, title, width } = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200


// Остаток объекта «…» rest operator
// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };


// let someObj = { ...options };
// console.log(someObj)
// someObj.height = 9999;
// console.log(someObj)
// console.log(options)
// title = свойство с именем title
// rest = объект с остальными свойствами
// let { 
// 	title,
// 	...restBlablabla 
// } = options;


// let title = options.title;
// let restBlablabla = {};
// for (let key in options) {
// 	if (key !== 'title') {
// 		restBlablabla[key] = options[key]
// 	}
// }


// сейчас title="Menu", rest={height: 200, width: 100}
// console.log(title);  // Menu
// console.log(restBlablabla);
// console.log(restBlablabla.height);  // 200
// console.log(restBlablabla.width);   // 100


// function test(importantParam, ...restParam) {
// 	console.log(importantParam)
// 	console.log(restParam[3])
// }


// test(555, 1, 2, 'fdfdf', 3, 4, 'fdfdsfs')


//================// Задачи //============================

// Деструктурирующее присваивание
// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:


// let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false


// Максимальная зарплата
// У нас есть объект salaries с зарплатами:


// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };


// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.