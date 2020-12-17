import {BrowserRouter , Route , Switch } from "react-router-dom";

import Home from "./componenets/Home";
import About from "./componenets/About";
import Post from "./componenets/Post";
import Project from "./componenets/Project";
import SinglePost from "./componenets/SinglePost";
import NavBar from "./componenets/NavBar";

function App() {
  return (   
  <BrowserRouter>
  <NavBar />
  <Switch>
    <Route exact component={Home} path="/"/>
    <Route component={About} path="/about"/>
    <Route component={SinglePost} path="/post/:slug"/>
    <Route component={Post} path="/post"/>
    <Route component={Project} path="/project"/>
  </Switch>
  </BrowserRouter>
  )
}

export default App;
