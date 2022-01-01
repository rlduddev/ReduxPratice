import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store/store';
import Detail from './Detail';

const Home = ({todos, addTodo}) => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        addTodo(text);
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {
                    todos.map(todo => (
                        <Detail todo={todo} key={todo.id}/>
                    ))
                }    
            </ul>
        </>
    )
}

function getCurrentState(state) {
    return {todos: state}
}

function mapDispatchProp(dispatch) {
    return {
        addTodo: text => dispatch(actionCreator.addTodo({text: text, id: Date.now()}))
    }
}

export default connect(getCurrentState, mapDispatchProp) (Home);