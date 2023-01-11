
// создать функцию, которая получает в качестве аргумента
// получает название поста и добавляет в элемент #root
// параграф с названием поста

const root = document.querySelector("#root");
const add_form = document.querySelector('.add_form')


function createPost(title, body) {
  const container = document.createElement("div");
  const title_p = document.createElement("p");
  const body_p = document.createElement("p");
  container.classList.add("post")
  title_p.classList.add('subheader')

  title_p.innerText = title;
  body_p.innerText = body;

  container.append(title_p, body_p);
  root.append(container);
}

// доработать функцию createPost таким образом, чтобы функция
// получала два аргумента (заголовок и текст поста)
// и формировала следующую верстку

/*
<div>
<p>Заголовок</p>
<p>Текст</p>
</div>
*/

// используя функцию createPost отображайте данные, пришедшие с сервера,
// в интерфейсе



// добавить скрипт, который позволит при отправке формы выводить в консоль значение указанного id

add_form.addEventListener("submit", event => {
  event.preventDefault();
  const id = event.target.id.value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((resp) => resp.json())
  .then(({ title, body}) => createPost(title, body));

  event.target.id.value = "";
});

// доработайте процесс таким образом, чтобы при отправке формы в интерфейс 
// добавлялся пост с указанным id

// добавить параграфу с заголовком класс subheader и увеличить у него размер текста до 30 px 


/* fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
title: 'foo',
body: 'bar',
userId: 1,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));  */


const input_form = document.querySelector('.input_form')

input_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {title, body, user_id} = event.target;

  senfPost(title.value, body.value, user_id.value)

user_id.value = ""
title.value = ""
body.value = ""
})

// создать функцию, которая получает в качестве аргументов title, body, user_id и отправляет эти данные на сервер для добавления нового поста 
const senfPost = (title, body, userId) => {
fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({title, body, userId}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then(({title, body}) => createPost(title, body)); 
}

// применить функию sendPost в отправке формы получив данные из формы отправьте их на сервер для добавления нового поста 

// получив данные с сервера добавьте их в массив posts и вызовите rerender, предварительно создав его 


const addToLocalStorage = (title, body) => {
  const posts = localStorage.getItem("posts") 
      ? JSON.parse(localStorage.getItem("posts"))
      : []
  const newPosts = { title, body } 
  posts.push(newPosts)
  localStorage.setItem('posts', JSON.stringify(posts))
  rerender()
}

const rerender = () => { 
  postsName.value = ''
}






