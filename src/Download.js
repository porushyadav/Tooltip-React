import React from 'react';
import './style.css';

let Download=(props)=> {

    //gettinh the current state of toolpick and position of the elements
const{toolpick,position}=props.buttonPosition;
console.log(toolpick);
  return (
      <div >
      {toolpick&&
      <div className={position}>
      <div id="text">File Size 50Mb</div>
      </div>}
      
     <div id="button-download" onMouseOver={props.onchangeToolPick} onMouseOut={props.onchangeToolPick}>
     <div className="download-name">Download</div>
     <div className="download-icon"><img  alt="download image" src="https://image.flaticon.com/icons/svg/810/810863.svg"></img></div>

     </div>
     </div>
     
     

  );

}

export default Download;
