class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() { // esto cambia al opuesto, true or false
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if(this.state.display){
          return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    )
    } else{
      return(
                <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
        <h2>I'm not going to display anything</h2>
       </div>
      );
    }
  }
};

/// Alternative conditional

//        {(this.state.display)&&<h1>Displayed!</h1>}
