import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/tictactoe">Tic-Tac-Toe</Link>
        </li>
        <li className="list-group-item">
          <Link to="/dicegame">Dice Game</Link>
        </li>
        <li className="list-group-item">
          <Link to="/pokegame">Pokegame</Link>
        </li>
      </ul>
    </nav>
  );
}
