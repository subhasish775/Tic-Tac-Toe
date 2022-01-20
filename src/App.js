import React, {useState, useEfefct, useEffect} from 'react';
import SourceComponent from './SourceComponent';
const initialState = ["","","","","","","","",""];
function App (){
    const [gameState, updateGameState] =useState(initialState);
    const [isAChange, updateAChange] = useState(false);
 const onSquareClick =(index)=>{
    let string= Array.from(gameState);
    string[index]= isAChange ? "X" : "0" ;
    updateGameState(string);
    updateAChange(!isAChange);
    }
useEffect(()=>{
  const winner= checkWinner();
  if(winner){
      alert(`Wow ! ${winner} has won the game`);
      updateGameState(initialState);
  }
},[gameState])

    const checkWinner =()=>{
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [2,5,8],
            [1,4,7],
        ];
      for (let i=0; i< lines.length; i++ ){
          const [a,b,c] = lines[i]
          if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
              return gameState[a];
          }
      }
      return null;
    }
    return (
        <div className="app-header">
         <p className="heading-text">React Tic-Tac-Toe 2022</p>
         <div className="row jc-center">
         <SourceComponent className="b-bottom-right" state={gameState[0]} onClick={()=>onSquareClick(0)} />
         <SourceComponent className="b-bottom-right"state={gameState[1]} onClick={()=>onSquareClick(1)}/>
         <SourceComponent className="b-bottom"state={gameState[2]} onClick={()=>onSquareClick(2)}/>
         </div>
         <div className="row jc-center">
         <SourceComponent className="b-bottom-right"state={gameState[3]} onClick={()=>onSquareClick(3)}/>
         <SourceComponent className="b-bottom-right"state={gameState[4]}onClick={()=>onSquareClick(4)}/>
         <SourceComponent className="b-bottom" state={gameState[5]}onClick={()=>onSquareClick(5)}/>
         </div>
         <div className="row jc-center">
         <SourceComponent className="b-right"state={gameState[6]} onClick={()=>onSquareClick(6)}/>
         <SourceComponent className="b-right"state={gameState[7]} onClick={()=>onSquareClick(7)}/>
         <SourceComponent state={gameState[8]} onClick={()=>onSquareClick(8)}/>
         </div>
         <button className="clear-button" onClick={()=>updateGameState(initialState)}>Clear Game</button>
         <p>Subhasish Ghosh</p>
        </div>
    )
}
export default App;