import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.style = {
      fontWeight : "bold", fontSize: "8px"
    }

    this.state = {
      name: "James",
    };
  }

  componentDidMount() {
    this.setState({
      name: "I've Mounted! ",
    })
    this.ChangeName();
  }

  ChangeName = () => {
    setInterval(() => {
      this.setState({
        name: "John Brite",
      })
    },  10000)
  }

  render () {
    return (
    <h1 style={this.style}> Hello {this.state.name} </h1>
    );
  }
}