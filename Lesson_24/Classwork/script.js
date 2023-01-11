// написать обработчик, который позволит выводить строку "привет"
// при нажатии на кнопку .change_mode

const change_button = document.querySelector(".change_mode");
const main = document.querySelector(".main");



if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}
// доработать данный процесс таким образом, чтобы
// при нажатии на кнопку элементу с классом main добавлялся класс dark

change_button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});
//localStorage.getItem('mode') в консоли



// найти и применить метод у classList, позволяющий добавлять
// класс, если его нет и удалять его, если он есть

// повесить на эти кнопки обработчики и при нажатии на
// них выводить + или - в консоль

const fontSizeIncr = document.querySelector(".text-size-btns .incr");
const fontSizeDecr = document.querySelector(".text-size-btns .decr");

fontSizeIncr.addEventListener("click", () => {
  console.log("+");
});
fontSizeDecr.addEventListener("click", () => {
  console.log("-");
});

// реализовать увеличение и уменьшение текста ".main p" на 1 при нажатии
// на соответствующие кнопки

const main_text = document.querySelector(".main p");
/* main_text.style.fontSize = '15px'; */
/* let fontSize = 12; */

// 1) проверить наличие значения fontSize в localStorage и если его нет,
// задать 12, а если есть, считать в переменную

let fontSize;

if (localStorage.getItem("fontSize")) {
  fontSize = +localStorage.getItem("fontSize");
} else {
  fontSize = 12;
  localStorage.setItem("fontSize", fontSize);
}
main_text.style.fontSize = fontSize + "px";

/* fontSizeIncr.addEventListener('click', ()=>{
    const current_fontSize = parseInt(main_text.style.fontSize);
    main_text.style.fontSize = current_fontSize + 1 + 'px'
})
fontSizeDecr.addEventListener('click', ()=>{
    const current_fontSize = parseInt(main_text.style.fontSize);
    main_text.style.fontSize = current_fontSize - 1 + 'px'
}) */

/* fontSizeIncr.addEventListener("click", () => {
  fontSize+=1;
  main_text.style.fontSize = fontSize + "px";
});
fontSizeDecr.addEventListener("click", () => {
  fontSize-=1;
  main_text.style.fontSize = fontSize + "px";
}); */

// при изменении размера шрифта перезаписывать значение в localStorage

fontSizeIncr.addEventListener("click", () => {
  fontSize += 1;
  localStorage.setItem("fontSize", fontSize);
  main_text.style.fontSize = fontSize + "px";
});
fontSizeDecr.addEventListener("click", () => {
  fontSize -= 1;
  localStorage.setItem("fontSize", fontSize);
  main_text.style.fontSize = fontSize + "px";
});
