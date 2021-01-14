// ~~~~~ Query Selectors ~~~~~
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const doneListUl = document.querySelector(".doneList");
const deleteAllTodo = document.querySelector(".footer button");
const deleteAllDone = document.querySelector("#clearDoneTasks");
const nightModeToggler = document.querySelector("#nightModeToggler");
document.querySelector(".animation-area").classList.add(".yellow-filter");

function include(file, where) {
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName(where).item(0).appendChild(script);
}

/* Include Many js files */
include('js/fontawesome.js', 'head');
include('js/jscolor.js', 'body');
include('js/todo.js', 'body');
include('js/script.js', 'body');