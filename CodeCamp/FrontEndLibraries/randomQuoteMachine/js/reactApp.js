var randomFrases= [
    {frase:"If you want to lift yourself up, lift up someone else.",
    autor : "Booker T. Washington"},
    {frase:"Whatever the mind of man can conceive and believe, it can achieve.",
    autor: "Napoleon Hill"},
    {frase: "I would rather die of passion than of boredom.",
    autor: "Vincent van Gogh"},
    {frase:"Every child is an artist. The problem is how to remain an artist once he grows up.",
    autor:"Pablo Picasso"},
  {
    frase:"Suffer the pain of discipline, or the pain of regret.",
    autor:"Batman"
  },
  {frase:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",
   autor:"Dalai Lama"
  },
  {
    frase:"The only person you are destined to become is the person you decide to be.",
    autor:"Ralph Waldo Emerson"
  },
  {
    frase:"Life is 10% what happens to me and 90% of how I react to it.",
    autor:"Charles Swindoll"
  },
  {
  frase:"The best time to plant a tree was 20 years ago. The second best time is now.",
    autor: "Chinese Proverb"
  },
  {frase:"Either you run the day, or the day runs you.",
  autor:"Jim Rohn"},
  {frase:"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
   autor:"Booker T. Washington"
  },
  {
    frase:"The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    autor:"Jesse Owens"
  },
  {
    frase:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    autor:"Leonardo Da Vinci"
  }
]

var colors=[  '#16a085',  '#27ae60',  '#2c3e50',  '#f39c12',  '#e74c3c',  '#9b59b6',  '#FB6964',  '#342224',  '#472E32',
  '#BDBB99',  '#77B1A9',  '#73A857'
]

function QuoteBox(props){
  return (
    <div className="quoteText">&ldquo;<span id="text">{props.text}</span>&rdquo;</div>
  );
}

function Author(props){
  return (<div className="quoteAuthor">- <span id="author">{props.autor}</span></div>);
}

class ButtonQuote extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hover:false
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

 toggleHover() { this.setState({ hover: !this.state.hover }); }

  render(){
    var buttonBackground={}
    if(this.state.hover){
      buttonBackground={backgroundColor: this.props.color,
                       borderColor:this.props.color,
                       color:"#fff"}
    } else{
      buttonBackground= {backgroundColor: "#fff",
                        }
    }

    return(
      <button id="new-quote" className="button" onClick={this.props.randomQuote} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={buttonBackground}>New quote</button>);
  }
}

function Tweeter(props){
  return(          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="twitter.com/intent/tweet"><img id="tweet-icon" src="https://img.icons8.com/material/452/twitter--v1.png" /></a>);
}

  // Main component, with function to generate randomColors and randomQuotes and update de state of the app

class RandomQuote extends React.Component {
constructor(props){
    super(props);
      const f = Math.floor(Math.random() * randomFrases.length);
      const c = Math.floor(Math.random() * colors.length);

    this.state = {
      frase: randomFrases[f].frase,
      autor: randomFrases[f].autor,
      color: colors[c]
    }
    this.randomQuote=this.randomQuote.bind(this);
  }
  randomQuote(){
    let randomNumber = Math.floor(Math.random() * randomFrases.length);
    let randomColor = Math.floor(Math.random() * colors.length);

    this.setState((state)=>{
      const currentFrase = state.frase;
      const currentColor = state.color;
      while (currentFrase === randomFrases[randomNumber].frase){
        randomNumber = Math.floor(Math.random() * randomFrases.length);
      }
      while (currentColor === colors[randomColor]){
        randomColor = Math.floor(Math.random() * colors.length);
      }
      return{
        frase: randomFrases[randomNumber].frase,
        autor: randomFrases[randomNumber].autor,
        color: colors[randomColor]
      }
    });
  }

  render(){

    return(
      <div id="container" style={{backgroundColor:this.state.color}}>
        <QuoteBox text={this.state.frase} />
        <Author autor={this.state.autor}/>



        <div className="buttons">

          <Tweeter />
          <ButtonQuote randomQuote={this.randomQuote} color={this.state.color}/>

        </div>
      </div>
    )
  }
};

ReactDOM.render(<RandomQuote />, document.getElementById("quote-box"));
