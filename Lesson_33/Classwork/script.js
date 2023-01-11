/* class Dog {

  constructor(name) {
    this.name = name;
  }

  hi() {
    //console.log(this); 
    console.log("Hi, " + this.name);
  }
 
}

const dog_1 = new Dog("Bobik");
const dog_2 = new Dog("Sharik"); */

/* dog_1.name = "Bobik"
dog_2.name = "Sharik" */
/* 
dog_1.init("Bobik");
dog_2.init("Sharik"); */
/* 
dog_1.hi();
dog_2.hi(); */

// Создать класс User со свойствами name, username, age.

class User {
  static _roles = ["manager", "admin", "root", "guest"];

  static add_role(new_role) {
    this._roles.push(new_role);
  }

  constructor(name, username, age, role = "guest") {
    //const roles = ["manager", "admin", "root", "guest"];
    this.name = name;
    this.username = username;
    this.age = age;
    this.change_role(role);
  }

  hi() {
    const { name, username, age, role } = this;
    console.log(`Hi, ${name} ${username} ${age} ${role}!`);
  }
  b_day() {
    this.age += 1;
  }

  change_username(new_name) {
    this.name = new_name;
  }

  change_role(role) {
    if (User._roles.includes(role)) {
      this.role = role;
    } else {
      this.role = null;
    }
  }
}

const user_1 = new User("Oksana", "Bodnarchuk", 40, "admin");
const user_2 = new User("Aleksander", "Bodnarchuk", 39, "husbent");
const user_3 = new User("Daniil", "Motorniy", 28);

user_1.hi();
user_2.hi();
user_3.hi();

console.log(user_1);
console.log(user_2);
console.log(user_3);

user_1.b_day();
user_2.b_day();
user_3.b_day();

console.log(user_1);
console.log(user_2);
console.log(user_3);

// Добавить метод change_username, который получает в качестве аргумента новое имя пользователя и меняет его.

user_3.change_username("Viktor");
console.log(user_3);

user_3.hi();

//Создать класс Product со свойствами title, price, count. И методами change_price и sale.

class Product {
  constructor(title, price, count, income = 0) {
    this.title = title;
    this.price = price;
    this.count = count;
    this.income = income;
  }

  change_price(new_price) {
    if (new_price > 0) {
      this.price = new_price;
    } else {
      console.log(
        `введите корректное значение, ценв ${new_price} отрицательная`
      );
    }
  }

  sale() {
    if (this.count == 0) {
      console.log("товар закончен");
    } else {
      this.count--;
      this.income += this.price;
    }
  }
}

const product_1 = new Product("bike", 2000, 2);

console.log(product_1);

product_1.change_price(1500);
product_1.change_price(2500);
product_1.sale();
product_1.sale();
product_1.sale();

product_1.change_price(-1500);
console.log(product_1);

// 1) доработать метод change_price таким образом, чтобы цена менялась только в случае, если указанная новая цена больше 0

// 2) доработать метод sale таким образом.
// Если при вызову count равен нулю, count не уменьшать и вывести в консль "товар закончился"

// 3) добавить свойство income, которая хранит число прибыли с продаж.
// при каждой успешной продаже свойства income должно увеличиваться на цену товара
