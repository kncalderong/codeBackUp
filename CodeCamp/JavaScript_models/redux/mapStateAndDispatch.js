const state = [];

// change code below this line
const mapStateToProps = (state)=>{
  return {
    messages: state
  }
}


//#################3

//this is the action
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    submitNewMessage: function(message){
      dispatch(addMessage(message))
    }
  }


//################
//conected to a React Component
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(mapStateToProps,mapDispatchToProps)(Presentational)
