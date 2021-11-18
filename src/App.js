import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";

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

class App extends Component {
  constructor(){
    super();
    this.state = {
      numDisplay: 0,
    }
  }

  handleButtonClick=(btn)=>{
    // console.log(btn)
    if (btn.type === "number"){
      let newNumDisplay;
      if (this.state.numDisplay === "0"){
        newNumDisplay = btn.display;
      } else {
        newNumDisplay = this.state.numDisplay + btn.display
      }

      this.setState({
        numDisplay: newNumDisplay,
      });
    }
  }

  render(){

    let buttonArr = keypadArr.map((button, index) => {
      return (
      <div 
        key={index}
        className="calc-button"
        onClick={()=>this.handleButtonClick(button)}
        >
          {button.display}
        </div>
      )
    })

    return (
      <div id="calc-container">
        <div id="display">
          {this.state.numDisplay}
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
- Adding numDisplay to state. Switched static value with this.state.numDisplay to be dynamic.

  Each one of these buttons is going to have one event.
- make `handleButtonClick` so when you click on a button, it triggers an event. onClick event.
- add a key (with "input") to the div, using the .map()

- Want each button to have the information that we can pass into it. So we invoke it with an anonymous arrow function (so that it doesn't trigger immediately)
- Prevent it from invoking immediately. Invoke it/triggers only when you click the buttons.
- can now pass in the entire button object


- can write a switch statement. based on which buttons I press, can do certain actions.
- can separate the logic.

- created a variable. if it's zero, set display to 0. If it's not, set display to prior value. and replace it.
*/
