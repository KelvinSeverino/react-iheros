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
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HeroIndex from "./components/Hero/HeroHome";
import HeroView from "./components/Hero/HeroView";
import HeroEdit from "./components/Hero/HeroEdit";
import BattleRealTime from "./components/Battle/BattleRealTime";
import BattleFinished from "./components/Battle/BattleFinished";


function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />

          <Route exact path="/" element={<ProtectedRoute  element={Home}/>} />
          <Route exact path="/users" element={<ProtectedRoute element={UserIndex}/>} />
          <Route exact path="/users/view/:id" element={<ProtectedRoute element={UserView}/>} />
          <Route exact path="/users/edit/:id" element={<ProtectedRoute element={UserEdit}/>} />

          <Route exact path="/heros" element={<ProtectedRoute element={HeroIndex}/>} />
          <Route exact path="/heros/view/:id" element={<ProtectedRoute element={HeroView}/>} />
          <Route exact path="/heros/edit/:id" element={<ProtectedRoute element={HeroEdit}/>} />

          <Route exact path="/battlesInRealTime" element={<ProtectedRoute element={BattleRealTime}/>} />
          <Route exact path="/battlesFinished" element={<ProtectedRoute element={BattleFinished}/>} />

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
