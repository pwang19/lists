import Home from "./components/home/home";
import { Component } from "react";
import Navbar from "./components/home/navbar";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;