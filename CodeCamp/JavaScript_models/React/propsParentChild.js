const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.task.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List task={["sisterna","workOut","mercado"]}/>
        <h2>Tomorrow</h2>
        <List task={["freeCodeCamp",'workOut','perras',"english"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
