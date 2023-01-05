import React, { useState } from "react";
import { GlobalStyle } from "./styles/globalStyle";
import { Header, Button, Menu, Main } from './styles/style'

function App() {
  const [clicked, setClicked] = useState([])
  const [undo, setUndo] = useState([])

  function getCordenates(e){
    const {clientX, clientY} = e
    setClicked([...clicked, {clientX, clientY}])
  }

  function handleUndo(){
    const newClicked = [...clicked]
    const undoPoints = newClicked.pop()
    setClicked(newClicked)
    setUndo([...undo, undoPoints])
  }

  function handleRedo(){
    const newUndoPoints = [...undo]
    const undoPoints = newUndoPoints.pop()
    setUndo(newUndoPoints)
    setClicked([...clicked, undoPoints])
  }

  return (
  <>
    <GlobalStyle />
    <Header>
      <Menu>
        <Button disabled={undo.length === 0} onClick={handleRedo}>Redo</Button>
        <Button disabled={clicked.length === 0} onClick={handleUndo}>Undo</Button>
      </Menu>
    </Header>
    <Main onClick={getCordenates}>
       {clicked.map((clicked, index) => {
        return (
          <div
            key={index}
            style={{left: clicked.clientX - 4,
            top: clicked.clientY - 4,
            position: "absolute",
            borderRadius: '50%',
            width: '10px',
            height: '10px',
            background: 'red'}}>
          </div>
        )
       })}
    </Main>
  </>
  );
}

export default App;