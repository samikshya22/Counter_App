import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';

function App() {
  const root = 5
  const a = 10
  const b = 20
  const [selectedcolor, setselectedcolor]=useState("black")
  
  function handleClick (){
    console.log("a="+a +",b="+b)
    
  

  }
  function handleRed(){
    console.log("Red")
  }
  function handleBlue(){
    console.log("Blue")

  }
  function handleGreen(){
    console.log("Green")

  }
  const handleColor=(Color) => {
    console.log(Color)
    setselectedcolor(Color)

  }

  
  return (
    <div>
      <button onClick={()=>handleColor("red")}>
        Red
        </button>
        <button onClick={()=>handleColor("blue")}>
        Blue
      </button>
      <button onClick={()=>handleColor("green")}>
        Green
      </button>
      
      

      <div className='box' style={{backgroundColor:selectedcolor}}>
        
      </div>

    </div>


  );
}

export default App;
