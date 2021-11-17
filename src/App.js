import { Component } from "react";
import "./App.css";

class App extends Component {
  render(){
    let keypadArr = [
      { display: "+", value: "plus", type: "operation" },
      { display: "-", value: "minus", type: "operation" },
      { display: "x", value: "multiply", type: "operation" },
      { display: "/", value: "divide", type: "operation" },
      { display: "7", value: 7, type: "number" },
      { display: "8", value: 8, type: "number" },
      { display: "9", value: 9, type: "number" },
      { display: "", value: "space", type: "space" },
      { display: "4", value: 4, type: "number" },
      { display: "5", value: 5, type: "number" },
      { display: "6", value: 6, type: "number" },
      { display: "", value: "space", type: "space" },
      { display: "1", value: 1, type: "number" },
      { display: "2", value: 2, type: "number" },
      { display: "3", value: 3, type: "number" },
      { display: "", value: "space", type: "space" },
      { display: "C", value: "clear", type: "clear" },
      { display: "0", value: 1, type: "number" },
      { display: "=", value: "equals", type: "operation" },
    ];
    
    let buttonArr = keypadArr.map((button) => {
      return <div className="calc-button">{button.display}</div>;
    });
    
    return (
    <div id="calc-container">
      <div id="display">
        {0}
      </div>
      <div id="keypad-container"> 
        { buttonArr }
      </div>
    </div>
    )
  }
}

export default App;

/*
- create keypadArr to make an array of objects, for our buttons
- map through all the buttons. want to show what the display is.
- css for buttons to put into CSS Grid.
- re-arrange the button objects. Can even add a button that's a space in between the buttons. OR grid areas (more complicated).
- can go back later, delete the spaces, and re-arrange a different way.
- add styling to the actual buttons themselves.
- Make calc-container, and a div inside for the `display`
- CSS: add parent of calc-container, and the display

- Now we need state. Turn App() into a class component. To add state.
*/
