/* const result = fetch("https://fakestoreapi.com/products/1000000000")
  //console.log(result);
  .then(
    (resp) => {
      console.log(resp);
      return resp.json();
    },
    (err) => {
      console.log(err);
    }
  )
  .then(
    (data) => console.log(data),
    () => {
      console.log("json parse error");
    }
  ); */
/* 
const promise = new Promise((resolve, rejecte) => {
  const rand_value = Math.random();
  if (rand_value > 0.5) {
    resolve(rand_value);
  } else {
    reject(rand_value);
  }
});
promise.then(
  (value) => console.log(`Resolve: ${value}`),
  (value) => console.log(`Reject: ${value}`)
); */

/* fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(resp => resp.json())
.then(data => console.log(data)) */

// создать функцию, которая получает в качестве аргумента
// * id поста и выводит данные о нем в консоль

const root = document.querySelector("#root");
function createElement(data) {
  const container = document.createElement("div");
  const title = document.createElement("p");
  const body = document.createElement("p");
  container.append(title, body);

  title.innerText = data.title;
  body.innerText = data.body;
  root.append(container);
}

function getData(post_id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then((resp) => resp.json())
    .then((data) => createElement(data));
}
getData(2);
