import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import SideNavBar from './components/SideNavBar';
import Navigation from './components/Navigation';
import Home from './pages/Home'
import DiceGame from './pages/DiceGame'
import TicTacToe from './pages/TicTacToe'
import Pokegame from './pages/Pokegame'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-2 bg-light py-3">
            <Navigation />
          </div>
          <div className="col-10">
            <main>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/tictactoe">
                  <TicTacToe />
                </Route>
                <Route path="/dicegame">
                  <DiceGame />
                </Route>
                <Route path="/pokegame">
                  <Pokegame />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
