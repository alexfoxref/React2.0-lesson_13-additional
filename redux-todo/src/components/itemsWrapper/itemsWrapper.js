import React from 'react';
import styled from 'styled-components';
import Item from '../item';
import {connect} from 'react-redux';



const StyledItemsWrapper = styled.span`
    margin-bottom: auto;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;

    .item {
        margin-top: 0;
        margin-bottom: 20px;
        width: 100%;
        position: relative; 
    }

    .item:hover {
        cursor: pointer;
    }

    .item:after {
        content: "";
        position: absolute;
        top: 35px;
        left: 0;
        height: 1px;
        width: 60px;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: auto;
    }

    .item-completed {
        text-decoration: line-through;
        color: rgba(0, 0, 0, 0.6);
    }
`;

const ItemsWrapper = ({todosReducer}) => {
    const items = todosReducer.map(item => {
        const {id, itemCompleted, itemText} = item;
        return (
            <Item 
                itemText={itemText} 
                itemCompleted={itemCompleted} 
                id={id} 
                key={`item${id}`}/>
        )
    });

    return (
        <StyledItemsWrapper>
            {items}
        </StyledItemsWrapper>
    )
}

const mapStateToProps = ({todosReducer}) => {
    return {todosReducer}
};


export default connect(mapStateToProps)(ItemsWrapper);