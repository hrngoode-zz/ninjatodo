import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Post from "./components/Post"

// BrowserRouter needed to surround all routes.
// Route loads component when url entered.
// Switch tag ensures only one route chosen.

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post}/>
          </Switch>
          
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
