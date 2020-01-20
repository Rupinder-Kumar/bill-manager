import React, { Component } from 'react';
import FeatureTabs from "./components/FeatureTabs/FeatureTabs";
import Dashboard from "./containers/Dashboard/Dashboard";
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
        {activeFeature === "Dashboard" ?  <Dashboard /> : ""}
      </React.Fragment>
    );
  }
}

export default App;
