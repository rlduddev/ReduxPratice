import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store/store';

const Detail = ({todo:{text}, btnOnclick}) => {
    return (
        <li>
            {text}
            <button onClick={btnOnclick}>Delete</button>
        </li>
    )
}

function mapDispatchProps(dispatch, ownProps) {
    console.log(ownProps);
    return {
        btnOnclick: () => {dispatch(actionCreator.deleteTodo(parseInt(ownProps.todo.id)))}
    }
}
export default connect(null, mapDispatchProps) (Detail);