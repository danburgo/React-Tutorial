import React from 'react';

const user = (props) => {
    return (  
    <li>
        <span key={props.id}>name: {props.children}, Age: {props.age}</span>
        <input onChange={props.changeEvent} value={props.children}></input>
        <button onClick={props.delEvent}>Delete</button>
    </li>
    );
}
 
export default user;