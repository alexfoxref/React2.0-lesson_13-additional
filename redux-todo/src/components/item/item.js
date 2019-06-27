import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';


const Item = ({itemText, todosReducer, id, toggleTodo}) => {

    let itemCompleted;
    todosReducer.filter(item => item.id === id).map(item => itemCompleted = item.itemCompleted);

    let classes = itemCompleted ? 'item item-completed' : 'item';

    return (
        <div onClick={() => {toggleTodo(id)}} className={classes}>
            {itemText}
        </div>
    )
}

const mapStateToProps = ({todosReducer}) => {
    return {todosReducer}
};

const mapDispatchToProps = (dispatch) => {
    const {toggleTodo} = bindActionCreators(actions, dispatch);

    return {
        toggleTodo
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);