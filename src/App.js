import React from 'react';
// u need first to install " npm i react-router-dom "
import {BrowserRouter, Route , Switch} from 'react-router-dom' ;
import Navbar from "./components/Navbar"; 
import Home from "./components/Home"; 
import About from "./components/About"; 
import Contact from "./components/Contact"; 
import Post from "./components/Post";

function App() {
  return (
// wrap the whole app in the "BrowserRouter" tag
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      {/*  switch obligate just one URL  */}
      <Switch>
      {/*  give the existing routes according to each component */}
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />

      <Route path='/:post_id' component={Post} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
