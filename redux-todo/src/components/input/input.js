import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';


const StyledInput = styled.input`
    height: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    border: none;
    border-bottom: 1px solid #000000;

    ::placeholder {
        color: rgba(0, 0, 0, 0.4);
    }
    
    :focus {
        outline: none;
    }
`;

const Input = ({inputReducer: {value}, setValue}) => {
    return (
        <StyledInput
            onChange={event => {value = event.target.value; setValue(value)}} 
            value={value} 
            type="text" 
            placeholder="Enter a new todo item"/> 
    )
}

const mapStateToProps = ({inputReducer}) => {
    return {inputReducer}
};

const mapDispatchToProps = (dispatch) => {
    const {setValue} = bindActionCreators(actions, dispatch);

    return {
        setValue
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);