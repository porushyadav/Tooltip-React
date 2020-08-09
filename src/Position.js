import React from 'react';
import './style.css';

let Position=()=> {

//getting the position of the element
  return (
    <div className="option-div">
     <select id="option">
     <option data-value="top">top</option>
     <option data-value="right">right</option>
     <option data-value="bottom">bottom</option>
     <option data-value="left">left</option>

     </select>

    </div>
  );

}

export default Position;
