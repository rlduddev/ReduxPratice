import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addTodo = (text) => {
//     return {type: ADD, id: Date.now(), text: text}
// }

// const deleteTodo = (id) => {
//     return { type: DELETE, id: id }
// }

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELELTE");

// const reducer = (state = [], action) => {
//     switch(action.type){
//         case ADD:
//             return [{id: action.id, text: action.text}, ...state];
//         case DELETE:
//             return state.filter(todo => todo.id != action.id);
//         default:
//             return state;
//     }
// }

const reducer = (state = [], action) => {
    console.log(action);
    switch(action.type){
        case addTodo.type:
            return [{id: action.payload.id, text: action.payload.text}, ...state];
        case deleteTodo.type:
            return state.filter(todo => todo.id != action.payload);
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreator = {
    addTodo,
    deleteTodo,
}

export default store;

