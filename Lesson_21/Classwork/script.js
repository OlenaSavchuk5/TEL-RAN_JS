/* const btn_elem = document.querySelector(".btn");
const p_elem = document.querySelector(".text"); */

/* const handler = () => console.log('Hello!');

btn_elem.addEventListener('click', handler); */

/* btn_elem.addEventListener('click', () => console.log('Hello_2'));

btn_elem.removeEventListener('click', handler); */

/* p_elem.addEventListener('click', ()=>console.log("Hello from paragraph)")); */

/* function random_color() {
  //создать функцию, которая возвращает случайный цвет
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

btn_elem.addEventListener(
  "click",
  () => (btn_elem.style.backgroundColor = random_color())
);
 */
/* 2 variant

function random_color(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
    };  */

// создать программу, которая имитирует работу игральных костей при нажатии на кнопку в параграфе должны появиться два случайных числа от 1 до 6

/* function get_random() {
  return Math.ceil(Math.random() * 6);
} */

/* function get_random() {
    return Math.round(Math.random() * 5+1);
  }

btn_elem.addEventListener('click', () => {
    p_elem.innerText = `${get_random()} ${get_random()}`
});
 */

const add_form = document.querySelector(".add_form");
const products = document.querySelector(".products");

let data = [
  {
    id: 1,
    title: "Bicycles",
    price: 45000,
  },
  {
    id: 2,
    title: "Skateboards",
    price: 25000,
  },
  {
    id: 3,
    title: "Scooters",
    price: 15000,
  },
];

/*add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  //console.log(title, price); 
  data.push({ title, price });
  add_form.title.value = "";
  add_form.price.value = "";
  console.log(data);
});*/

// создать функцию, которая для каждого элемента массива data создает div с названием и ценой товара и добавляет в div с классом products

/*
<div>
<p>Название товара</p>
<p>Цена</p>
</div>
*/

add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  const id = Date.now();
/*   if (title.length > 0) {
    data.push({ id, title, price });
  } */// чтобы поле не осталось незаполненным, если нет required в input
  data.push({ id, title, price });
  add_form.title.value = "";
  add_form.price.value = "";

  rerender();
});

function deleteProduct(id) {
  data = data.filter((product) => product.id !== id);
  rerender();
}

/* function createProductCard() {
  data.push(({ id, title, price }) => {
    const container = document.createElement("div");
    const title_p = document.createElement("p");
    const price_p = document.createElement("p");

    // доработать процесс таким образом, чтобы при нажатии на кнопку в консоль выводился идентификатор товара
    const delete_btn = document.createElement("button");
    delete_btn.innerText = "delete";

    title_p.innerText = title;
    price_p.innerText = price;
    container.classList.add("product");

    // вынести процесс создания карточки в отдельную функцию функция должна получать в качестве аргументов id, title, price и возвращать тег div который является контейнером карточки

    container.append(title_p, price_p, delete_btn);
    return container;
  });
} */
/* 
function rerender() {
  products.innerText = "";

  // реализовать здесь проверку, если массив с данными пустой, то вывести параграф с тектом "Товаров нет" в ином случае выводить товары как сейчас

  if (data.length == 0) {
    const info = document.createElement("p");
    info.innerText = "No products";
    products.append(info);
  } else {
    data.forEach(({ id, title, price }) => {
      const container = createProductCard(id, title, price);           
      products.append(container);
    });
  }
}
rerender();

function createProductCard (id, title, price) {
    const container = document.createElement("div");
    const title_p = document.createElement("p");
    const price_p = document.createElement("p");

    // доработать процесс таким образом, чтобы при нажатии на кнопку в консоль выводился идентификатор товара
    const delete_btn = document.createElement("button");
    delete_btn.innerText = "delete"; 
   
    title_p.innerText = title;
    price_p.innerText = price;
    container.classList.add("product");

     // вынести процесс создания карточки в отдельную функцию функция должна получать в качестве аргументов id, title, price и возвращать тег div который является контейнером карточки

     container.append(title_p, price_p, delete_btn);
    return container
}

createProductCard(); */

function createProductCard(id, title, price) {
  const container = document.createElement("div");
  const title_p = document.createElement("p");
  const price_p = document.createElement("p");
  const delete_btn = document.createElement("button");

  delete_btn.innerText = "Удалить";

  delete_btn.addEventListener("click", () => {
    deleteProduct(id);
  });

  container.addEventListener(/* 'dblclick' //двойной клик */ 'mousemove', ()=>  {
    container.style.backgroundColor = getRandom_color();
  });

  title_p.innerText = title;
  price_p.innerText = price;

  container.classList.add("product");

  container.append(title_p, price_p, delete_btn);
  return container;
}

function rerender() {
  products.innerText = ""

  if (data.length === 0) {
    const info = document.createElement("p");
    info.innerText = "Товаров нет";
    products.append(info);
  } else {
    data.forEach(({ id, title, price }) => {
      const container = createProductCard(id, title, price);
      products.append(container);
    });
  }
}

rerender();

// создать функцию, которая возвращает случайный цвет
// rgb(124, 56, 32) 

function getRandom_color() {
  //создать функцию, которая возвращает случайный цвет
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// сделать так, чтобы при двойном нажатии на карточку с товаром менялся цвет ее заднего фона

btn_color.addEventListener(
  "dbl_click",
  () => (btn_color.style.backgroundColor = getRandom_color())
);
