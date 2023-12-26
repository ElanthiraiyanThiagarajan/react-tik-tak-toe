import React from "react";
import Square from "./Square";
import calculateWinner from "./CalculateWinner";
// import "./App.css";

// import Table from "./table/Table";
// import Form from "./forms/Form";

// class App extends Component {
//   // state = {
//   //   characters: [
//   //     {
//   //       name: "Charlie",
//   //       job: "Janitor",
//   //     },
//   //     {
//   //       name: "Mac",
//   //       job: "Bouncer",
//   //     },
//   //     {
//   //       name: "Dee",
//   //       job: "Aspring actress",
//   //     },
//   //     {
//   //       name: "Dennis",
//   //       job: "Bartender",
//   //     },
//   //   ],
//   // };

//   // removeCharacter = (index) => {
//   //   const { characters } = this.state;
//   //   this.setState({
//   //     characters: characters.filter((character, i) => {
//   //       return i !== index;
//   //     }),
//   //   });
//   // };

//   // handleSubmit = (character) =>{
//   //   this.setState({characters:[...this.state.characters,character]})
//   // }

//   render() {
//     // const { characters } = this.state;

//     return (
//       // <div className="container">
//       //   <Table
//       //     characterData={characters}
//       //     removeCharacter={this.removeCharacter}
//       //   />
//       //   <Form handleSubmit={this.handleSubmit}/>
//       // </div>

//       <div className="App"></div>
//     );
//   }
// }

// export default App;

 function Board({ xIsNext, squares, onPlay }) {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare)
    // setSquares(nextSquare);
    // setXIsNext(!xIsNext);

  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = 'Winner : ' + winner;
  } else{
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board
