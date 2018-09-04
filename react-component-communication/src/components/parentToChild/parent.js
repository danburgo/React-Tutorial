import React from 'react';
import Child from './child';

const parent = (props) => {
    return(
        <div>
            <Child doWhatever={props.changeTheWorldEvent} title ={props.title} ></Child>
            <Child doWhatever={props.keepTheWorldEvent} title ={props.title} xyz='xyz' ></Child>
        </div>
        )
}
 
export default parent;