import { createStore } from 'redux';
/* plus, minus */
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

number.innerText = 0;

const countModifier = (count = 0, action) => {
  switch(action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleMinus = () => {
  countStore.dispatch({type: MINUS});
}

add.addEventListener("click", () => {
  countStore.dispatch({type: ADD});
});

minus.addEventListener("click", handleMinus);
/* --plus, minus */

/* add todo */

const ul = document.getElementById("list");
const form = document.getElementById("form");
const button = document.getElementById("addButton");
const input = document.getElementById("text");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO"

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text: text, id: Date.now()
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO, 
    id: id 
  }
}

const toDoReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case ADD_TODO:
      const newToDoObj = {text: action.text, id: action.id}
      return [newToDoObj, ...state];
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== parseInt(action.id);
      });
    default:
      return state;
  }
}

const toDoStore = createStore(toDoReducer);

toDoStore.subscribe(() => console.log(toDoStore.getState()));

const paintTodo = () => {
  const todos = toDoStore.getState();

  ul.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", disPatchDeleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

toDoStore.subscribe(paintTodo);

const disPatchAddTodo = (text) => {
  toDoStore.dispatch(addTodo(text));
}

const disPatchDeleteTodo = (e) => {
  const id = e.target.parentNode.id;
  toDoStore.dispatch(deleteTodo(id));
}

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  disPatchAddTodo(toDo);
}

form.addEventListener("submit", onSubmit);
/* -- add toto */