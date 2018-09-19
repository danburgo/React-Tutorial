const {createStore} = require('redux');

const initialState = {
    age: 21
};

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    
    if (action.type ==='ADD'){
        newState.age += action.val;
    }
    if (action.type ==='SUBSTRACT'){
        newState.age -= action.val;
    }

    return newState;    
}

const store = createStore(myReducer);

//When state changes redux automatically calls this function
store.subscribe(() => {
    console.log('State changed: ' + JSON.stringify(store.getState()));
});

//console.log('Initial State: ' + JSON.stringify(store.getState()));
//store.dispatch({type: 'ADD'});
//store.dispatch({type: 'ADD'});
//store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD', val: 7});
//console.log('After Add: ' + JSON.stringify(store.getState()));
//store.dispatch({type: 'SUBSTRACT'});
store.dispatch({type: 'SUBSTRACT', val: 5});
//console.log('After Substract: ' + JSON.stringify(store.getState()));
//console.log(store.getState());