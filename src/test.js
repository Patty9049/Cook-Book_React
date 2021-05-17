import React, { Component, useState, useEffect } from "react";

// class Test extends Component {
//   state = {
//     counter: 0,
//     text: "",
//   };

//   componentDidMount() {
//     // this.changeCounterTo100();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.counter !== this.state.counter) {
//       this.addALetterToText();
//     }
//   }

//   addALetterToText = () => {
//     this.setState({
//       text: this.state.text + "A",
//     });
//   };

//   changeCounterTo100 = () => {
//     this.setState({
//       counter: 100,
//     });
//   };

//   increaseCounter = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };

//   decreaseCounter = () => {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.decreaseCounter}>-</button>
//         <h1>{this.state.counter}</h1>
//         <h1>{this.state.text}</h1>
//         <button onClick={this.increaseCounter}>+</button>
//       </div>
//     );
//   }
// }

const Test = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    // changeCounterTo100();
  }, []);

  useEffect(() => {
    if (counter !== 0) {
      addALetterToText();
    }
  }, [counter]);

  const addALetterToText = () => {
    setText(text + "A");
  };

  const changeCounterTo100 = () => {
    setCounter(100);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={decreaseCounter}>-</button>
      <h1>{counter}</h1>
      <h1>{text}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Test;
