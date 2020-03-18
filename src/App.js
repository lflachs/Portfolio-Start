import React from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/About-me/AboutMe";
import "./components/main.scss";
import Button from "./components/UI/Button";
import MyWork from "./components/MyWork/MyWork";

class App extends React.Component {
  state = {
    darkMode: true
  };
  onToggleChange = () => {
    console.log("test");
    this.setState(prevState => ({
      darkMode: !this.state.darkMode
    }));
  };
  render() {
    const { darkMode } = this.state;
    return (
      <div className="App">
        <Header onToggleChange={this.onToggleChange} darkMode={darkMode} />
        <AboutMe />
        <MyWork darkMode={darkMode} />
      </div>
    );
  }
}

export default App;
