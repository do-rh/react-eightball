import React, { useState } from 'react';
import { getRandomState } from './helpers';

const EIGHTBALL_STATES = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]; // could also move to another file.

/** Renders an eightball state
 * Props: eightballStates - array of states
 * States: msg, color
 * 
 * App -> Eightball
 */
function Eightball() {
    // const [msg, setMsg] = useState('Think of a Question');
    // const [color, setColor] = useState('black');

    const [eightball, setEightball] = useState({msg: 'Think of a Question', color: 'black'})


    function handleClick() {
        const currentState = getRandomState(EIGHTBALL_STATES); //destructure instead
        //could change to an object as the state 
        setEightball(currentState);
        // setMsg(currentState.msg);
        // setColor(currentState.color);
    }

    const backgroundStyle = {
        'backgroundColor': eightball.color,
        'borderRadius': '50%',
        'width': '200px',
        'height': '200px',
        'color': 'white',
        'borderWidth' : '0px',
        'fontWeight': 'bold'
    }; //move to css, keep dynamic here.

    return (
        <div className='eightball'>
            <button className='btn' style={backgroundStyle} onClick={handleClick}>
                {eightball.msg}
            </button>
        </div>
    )
}

export default Eightball;