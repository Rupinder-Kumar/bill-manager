import React, { Component } from 'react';
import FeatureTabs from "./components/FeatureTabs/FeatureTabs";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    activeFeature: "Dashboard"
  }
  handleTabChange = (feature) => {
    this.setState({
      activeFeature: feature
    })
  }
  render() {
    const { activeFeature } = this.state;
    return (
      <React.Fragment>
       <FeatureTabs activeFeature={activeFeature} handleTabChange={this.handleTabChange} />
        {activeFeature === "Dashboard" ? : ""}
      </React.Fragment>
    );
  }
}

export default App;
