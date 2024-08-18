import React, { } from "react";
import './App.css';

import Home from './components/Home';
import UserIndex from './components/User/UserHome';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import UserView from "./components/User/UserView";
import UserEdit from "./components/User/UserEdit";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/users" element={<UserIndex/>} />
          <Route exact path="/users/view/:id" element={<UserView/>} />
          <Route exact path="/users/edit/:id" element={<UserEdit/>} />

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
