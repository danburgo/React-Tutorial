import * as React from 'react';

type MyCompProps = {
    name: 'techsithDEFAUULT' | 'Interviewnest'
};
 
const MyComp = (props: MyCompProps) => {
    return (
        <div>
            <h1>{props.name}</h1>

        </div>  
    );
}
 
export default MyComp;
