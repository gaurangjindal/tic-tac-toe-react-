import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Player from './components/ChoosePlayer'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      board : Array(9).fill(null),
      player:null,
      winner:null
    }
  }
  checkWinner(){
    let winlines = 
    [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ]

    for(let index = 0; index <winlines.length;index++){
      const [ a,b,c] = winlines[index];
      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        alert('you won');
       this.setState({
         winner:this.state.winner
       })
      }
    }
  }
  handleClick(index){
    if(this.state.player && !this.state.winner){
      let newBoard = this.state.board
    if(this.state.board[index] === null){
      newBoard[index] = this.state.player

      let newPlayer = this.state.player === "X"? "0":"X"
    this.setState({
      board:newBoard,
      player:newPlayer
    })
    }
    
    this.checkWinner();
    }
    console.log(this.state.board)
    //console.log(index)
  }
  setPlayer(player){
    this.setState({
      player
    })
  }
  render(){
    const Box = this.state.board.map((box,index) => <div className="box" key={index} onClick={()=>this.handleClick(index)}>{box}</div>)
    let status = this.state.player ? <h2>Next Player is {this.state.player}</h2>:<Player player={(e)=> this.setPlayer(e)}/>

    return (
      <div className="container">
        <h1> tic tak toe game</h1>
        {status}
        <div className="board">
         {Box}
        </div>
        
      </div>
    )
  }
}


export default App;
