import React from 'react';
import ItemsWrapper from './itemsWrapper';
import BtnBlock from './btnBlock';
import Input from './input'


const App = () => {
    return (
        <div className="wrapper">
            <div className="todo-window">
                <ItemsWrapper/>
                <Input/>
                <BtnBlock/>
            </div>
        </div>
    )
}

export default App;