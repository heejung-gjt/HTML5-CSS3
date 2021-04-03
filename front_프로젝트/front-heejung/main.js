const $submit = document.querySelector('.submit');
const $box = document.querySelector('.box');
const $boxContent = document.querySelector('.box-submit');
let todos = [];
const $close = document.querySelector('.close');
const $textarea = document.querySelector('textarea');
const $contentItem = document.querySelector('.content-items');

let now = new Date();
$submit.onclick=()=>{
    $box.style.display='block';
}
$close.onclick=()=>{
    $box.style.display='none';

}
$boxContent.onclick=()=>{
    if($textarea.value=='')return;
    console.log($textarea.value)
    $textarea.value='';
    $box.style.display='none';
}

// const render=()=>{
//     $contentItem.innerHTML = todos.map(todo=>{
//         return `<li class=${todo.id}><span><img src="" alt="">${todo.date}</span></li>`
//     }).join();
// }

const getTodos = () =>{
    todos=[
        {id:1,content:'hi',date:now},
        {id:2,content:'hiddd',date:now}
    ]

    // render();
}

getTodos();