import * as React from 'react';

export interface IMyClassProps {name?: string; isMarried: boolean;}
export interface IMyClassState {age: number;}

class MyClass extends React.Component<IMyClassProps,IMyClassState> {

    public static defaultProps: Partial <IMyClassProps>= {
        name: 'dandaman'
    };

    public state={
        age: 21
    };

    public render() {
        return (
        <div>
            <h1>My name is: {this.props.name} and I am {this.state.age} years</h1>
            <h1>{this.props.isMarried}</h1>
        </div>
        );
    }
}

export default MyClass;
