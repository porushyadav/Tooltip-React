import React from 'react';
import Download from './Download';
import Position from './Position';

import './App.css';
import './style.css';

class App extends React.Component {

  constructor()
  {
    super();
  this.state={
    toolpick:false,
    position:"top"
  }

  }
//handle the change of state after mouse is hover over it  or mouse is removed
  handlechangeToolPick=()=>
  {
   const position=document.getElementById('option').value;
   const {toolpick}=this.state;
   this.setState({
     position:position,
     toolpick:!toolpick
   })

  }
  

  render()
  {
  return (
    <div className="App">
    <div className="center">

     <Download 
     onchangeToolPick={this.handlechangeToolPick}
     buttonPosition={this.state}/>
     <Position/>
     </div>

    </div>
  );
}
}

export default App;
