import React from 'react';
import { useState } from 'react';
import Die from "./Die";
import "./RollDice.css";


const RollDice = ({sides}) => {

    const [state, setState] = useState({
        die1: 'one',
        die2: 'one',
        rolling: false,
        Score1: 1,
        Score2: 1,
        totalScore1: 1,
        totalScore2: 1,
    }
    );

    const refreshPage = () => {
        window.location.reload(false);
    }
      

    const {die1, die2, rolling, Score1,Score2,totalScore1, totalScore2} = state;

        const roll = () => {
            const newDie1 = sides[Math.floor(Math.random() * sides.length)];
            const newDie2 = sides[Math.floor(Math.random() * sides.length)];
            const score1 = Object.values(newDie1);
            const score2 = Object.values(newDie2);
            

            setState({
                die1: Object.keys(newDie1),
                die2: Object.keys(newDie2),
                rolling: true,
                Score1: score1[0],
                Score2: score2[0],
                totalScore1: totalScore1 + score1[0],
                totalScore2: totalScore2 + score2[0],
            });

            setTimeout(() => {
                setState((prevState) => ({...prevState, rolling: false}))
            }, 900);
        };

        

    return ( 
        <>
            <h1> DICE GAME </h1>
            <div className='roll-dice'>
                <div className='rolldice-container'>
                <Die face={String(die1)} rolling={rolling} />
                <Die face={String(die2)} rolling={rolling} />
                </div>

                <button onClick={roll} disabled={rolling}>
                    {rolling ? "Rolling..." : "Roll Dice"}
                </button>

                <div>User Score Just Now: {Score1} </div>
                <div>AI Score Just Now:   {Score2} </div>
                <h3>User Score Total:   {totalScore1} </h3>
                <h3>AI Score Total:   {totalScore2} </h3>

                <button onClick={refreshPage}>Refresh</button>
                

            </div>
            
        </>
    );
};



RollDice.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {six: 6},
    ],
}

export default RollDice;