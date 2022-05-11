import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Cat from "./Cat";

// const name = 'Jacob';
// const greeting = "Hello Jacob";
// const loggedIn = true;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  getCats() {
    axios.get("https://catfact.ninja/breeds").then((response) => {
      this.setState({
        data: response.data.data,
      });
    });
  }

  cats() {
    return this.state.data.map((cat, index) => {
      return <Cat key={index} title={cat.breed} desc={cat.origin} />;
    });
  }

  componentDidMount() {
    this.getCats();
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        {this.cats()}
      </div>
    );
  }
}