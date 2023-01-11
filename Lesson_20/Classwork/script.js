/* const elem =  document.querySelector('p');
const elem_list = document.querySelectorAll('p');

console.log(elem);
console.log(elem.innerText);
console.log(elem.innerHTML);
console.log(elem.innerContent);

const text_list = [...elem_list].map(elem => elem.innerText);
console.log(text_list);


const main_elem = document.getElementById('main');
const p_list = document.getElementsByTagName('p');

console.log(main_elem);
console.log(p_list); */

// вывести в консоль текст из параграфа, который находится в
// div с классом main
/* 
const p_elem = document.querySelector('.main p');
console.log(p_elem.innerText); */

// вывести параграф с классом info из div с идентификатором main

/* const p_elem_inf = document.querySelector('#main .info');
console.log(p_elem_inf.innerText); */

// найти параграф с классом main, который находится в div, который находится в div с идентификатором info

/* const p_elem_info = document.querySelector('#info div .main');
console.log(p_elem_info.innerText); */

const rootElem = document.querySelector("#root");

/* const words = ["velosiped", "samokat", "liji"];

words.forEach((word) => {
  const p_elem = document.createElement("p");
  p_elem.innerText = word;
  rootElem.append(p_elem);
}); */

/* const arr = [12, 4, 32];
function func() {
    const a = arr;    
}
func (); */

/* const p_elem = document.createElement('p');
p_elem.innerText = "I am new element";

rootElem.append(p_elem); */

const products = [
  {
    title: "велосипед",
    price: 45000,
    count: 12,
    link: "https://example.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/80px-Alexandr_Ivanov_001.jpg",
  },
  {
    title: "самокат",
    price: 25000,
    count: 13,
    link: "https://example.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/80px-Alexandr_Ivanov_001.jpg",
  },
  {
    title: "лыжи",
    price: 30000,
    count: 0,
    link: "https://example.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/80px-Alexandr_Ivanov_001.jpg",
  },
];

products.forEach(({ title, price, count, link, img }) => {
  const container = document.createElement("div");
  const title_p = document.createElement("p");
  const price_p = document.createElement("p");
  const count_p = document.createElement("p");
  const link_a = document.createElement("a");
  const picture_img = document.createElement("img");
  container.append(picture_img, title_p, price_p, count_p, link_a);
  rootElem.append(container);
  container.classList.add("product");
  link_a.innerText = "Подробнее...";
  link_a.href = link;
  picture_img.src = img;
  link_a.target = "_blank";
  title_p.innerText = title;
  price_p.innerText = price;

  /*   if (products.count === 0) {
    count_p.innerText = "товар закончен";
} else {
  count_p.innerText = product.count
};
}); */
  count_p.innerText = count === 0 ? "Товар закончился" : count;
});

/* products.forEach((product) => {
  rootElem.innerHTML += `
        <div>
        <p>${product.title}</p>
        <p>${product.price}</p>
        </div>
        
        `;
}); */

// добавить в каждый объект свойство count с каким-либо числом и
// выводить кол-во продуктов отдельный параграфом

/*
<div>
<p>Название</p>
<p>Цена</p>
<p>Кол-во</p>
</div>
*/

/* products.forEach((product) => { 
    const container = document.createElement("div");

    const count_p = document.createElement("p");
    container.append(count_p);
    rootElem.append(container);

    count_p.innerText = product.count;
    
  }); */

  
