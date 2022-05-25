const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input"); // todo-form 안에 input
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // update를 위해 let사용

function saveToDos(){
    //JSON.stringify 를 사용하여 문자열("")로 변경해주자.
    // ex ) ["ㅇㅇ","ㅇㅇ","ㄴㄴ","ㅁㅁ"]
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); 
}



function deleteToDo(event){
    const li = event.target.parentElement; // target = button 이고 button의 paraent = li
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement('li'); // li 생성
    li.id = newTodo.id;
    const span = document.createElement('span'); // span생성
    const button = document.createElement('button');
    button.innerText = "❌"
    button.addEventListener("click",deleteToDo)
    li.appendChild(span); // li 안에 span 생성
    li.appendChild(button);
    span.innerText = newTodo.text;  // span 안에 input값 생성 // 
    toDoList.appendChild(li) // html의 todo-list안에 li를 브라우저에 추가
    
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newToDoObj); // toDos array안에 push로 넣어준다
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos // toDos는 기존에 갖고있는 localStorage를 기억한다.
    parsedToDos.forEach(paintToDo)
}