import React, { Component } from "react";
import "../src/App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar title="NewsMonk" />
        <News country="in" category="general" pageSize={5}/>
      </>
    );
  }
}