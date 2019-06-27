import React from 'react';
import styled from 'styled-components';
import idGen from '../../idGen';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';


const StyledBtnBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 66px;

    .btn {
        width: 133px;
        height: 40px;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
    }

    .btn:focus {
        outline: none;
    }

    .btn-hide {
        background: #FFE482;
    }

    .btn-add {
        background: #FFFFFF;
    }
`;

const BtnBlock = ({addTodo, hideTodo, clearValue, inputReducer: {value}}) => {
    return (
        <StyledBtnBlock>
            <button onClick={hideTodo} className="btn btn-hide">Hide completed</button>
            <button onClick={() => {if (value !== '') {addTodo(idGen(), value); clearValue('')}}} className="btn btn-add">Add new</button>
        </StyledBtnBlock>
    )
}

const mapStateToProps = ({inputReducer}) => {
    return {inputReducer}
};

const mapDispatchToProps = (dispatch) => {
    const {addTodo, hideTodo, clearValue} = bindActionCreators(actions, dispatch);

    return {addTodo, hideTodo, clearValue}
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnBlock);