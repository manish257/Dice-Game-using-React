import React from 'react';
import ReactDOM from 'react-dom';
import RollDice from "./components/RollDice";

function App5() {
    return (
        <div className="App">
            <RollDice />
        </div>
    );
};


ReactDOM.render(
    <App5 />,
    document.querySelector('#root')


);

