import React, {Component} from 'react';
import User from './User';

class Users extends Component {
    state={
        users:[
            {name:"Juan", age: 20},
            {name:"Jill", age: 30},
            {name:"Pedro", age: 40},
            {name:"Pedro", age: 40},
            {name:"Pedro", age: 40},
        ],
        title: "Users List"
    };

    makeMeYounger = () => {
        //console.log('clicked');
        //this.state.users[0].age -=10;
        /*this.setState({
            users:[
                {name:"Juan", age: 10},
                {name:"Jill", age: 20},
                {name:"Pedro", age: 30},
            ]
        });*/
        const newState = this.state.users.map((user) => {
                const tempUser = user;
                if (tempUser.age>26)
                    tempUser.age -=10;
                else
                    tempUser.age = 16;
                return tempUser;
            });
        this.setState (newState);
        
        console.log(this.state.users);
    }

    render(){
        return (
            <div>
                <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
                <br></br>
                <h1>{this.state.title}</h1>
                
                {
                    this.state.users.map((user,i)=>{
                        return <User key={i} age={user.age}>{user.name}</User>
                    })
                }
            </div>
            );  
    /*return (
        
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
-------------------
--OR
        <div>
            <h1>{this.props.title}</h1>
            <User age="20">John</User>
            <User age="30">Peter</User>
            <User age="40">Dan</User>
        </div>
        );*/
    }
}

export default Users;
