import React from "react";
import "./styles.css";

export default class Age extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "Guess my age"
    };
  }
  buttonClick() {
    this.setState({
      age: "My age is 120"
    });
  }
  render() {
    return (
      <div>
        <h1> Guess the age</h1>
        <h2> {this.state.age} </h2>
        <button onClick={() => this.buttonClick()}> Show my Age</button>
        <button onClick={this.buttonClick.bind(this)}> Show my Age</button>
      </div>
    );
  }
}
