import "./App.css";

function App() {
  let keypadArr = [
    { display: "1", value: 1, type: "number" },
    { display: "2", value: 2, type: "number" },
    { display: "3", value: 3, type: "number" },
    { display: "4", value: 4, type: "number" },
    { display: "5", value: 5, type: "number" },
    { display: "6", value: 6, type: "number" },
    { display: "7", value: 7, type: "number" },
    { display: "8", value: 8, type: "number" },
    { display: "9", value: 9, type: "number" },
    { display: "0", value: 1, type: "number" },
    { display: "+", value: "plus", type: "operations" },
    { display: "-", value: "minus", type: "operations" },
    { display: "*", value: "multiply", type: "operations" },
    { display: "-", value: "divide", type: "operations" },
    { display: "=", value: "equals", type: "operations" },
  ];

  let buttonArr = keypadArr.map((button) => {
    return <div className="calc-button">{button.display}</div>;
  });

  return <div>{buttonArr}</div>;
}

export default App;

/*
- create keypadArr to make an array of objects, for our buttons
- map through all the buttons. want to show what the display is.

*/
