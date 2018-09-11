import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';


const ButtonOne = (props) => {
    
    return (
        <button style={props.styles}>I am ButtonOne</button>
    )
    
    /*
    let _styles = {...styles.default}
    if (props.disable){
        _styles = {..._styles,...styles.disable};
    }

    return (
        <button style={_styles}>I am ButtonOne</button>
    )
    */
}

export default stylesWrapper(ButtonOne);