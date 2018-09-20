const initialState = {
  id:0,
  age: 20,
  history: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      //newState.age += action.value;
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({id: Math.random(), age: state.age + action.value}) //concat returns a new array
      }
    case "AGE_DOWN":
      //newState.age += action.value;
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({id: Math.random(),age: state.age - action.value}) //concat returns a new array
      }
    case "DELETE_ITEM":
      return {
        ...state,
        history: state.history.filter(el => el.id !== action.key)
      }
  }
  return newState;
};

export default reducer;
