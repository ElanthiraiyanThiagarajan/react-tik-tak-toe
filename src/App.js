import React, { useState } from "react";
import Board from "./tic-toc-toe/Board";
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

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description = move > 0 ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
