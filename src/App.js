import React from 'react';
import car from './images/car.png';
import wheel from './images/wheel.png';
import './App.css';

function App() {
  return (
    
      <div class="hero">
	           <div class="highway"></div>
	           <div class="city"></div>
	           <div  class="car"><img src={car}></img></div>
	           <div class="wheel">
	         	  <img src={wheel} id="wheel1"></img>
		          <img src={wheel} id="wheel2"></img>
	             </div>
      </div>
   
  );
}

export default App;
