const action = {
  type: 'LOGIN'
}
// Define an action creator here:

function actionCreator(){
  return(action)
}

// o tambien;

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

store.dispatch(loginAction());
