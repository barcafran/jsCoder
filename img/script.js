let addButton = document.getElementById("add-button")

addButton.addEventListener("click", addToDoItem);

function addToDoItem(){
    alert("Clickeaste el boton");
    let itemText = toDoEntryBox.value;
    newToDoItem(itemText)
}

let toDoEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");

function newToDoItem (itemText) {
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(itemText);

    toDoItem.appendChild(toDoText)
    toDoList.appendChild(toDoItem)
}

//Boton de Guardado

let saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", saveList);

function saveList(){
    alert("Clickeaste el boton");

    let toDos = [];
    let toDoPrimera = [];

    let primera = toDoList.children.item(0);
    let toDoInfo2 = {
        "texto": primera.innerText
    }
    toDoPrimera.push(toDoInfo2)

    for(let i = 1; i < toDoList.children.length; i++ ){

        let toDo = toDoList.children.item(i);

        let toDoInfo = {
            "texto": toDo.innerText
        }

        toDos.push(toDoInfo)
    }

    localStorage.setItem("listaTareas", JSON.stringify(toDos))
    localStorage.setItem("primerTarea", JSON.stringify(toDoPrimera))
}