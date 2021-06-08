import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div className="text-muted">Home</div>,
    main: () => <h2>GameRoom</h2>
  },
  {
    path: "/pac-man",
    sidebar: () => <div className="text-muted">Pac-Man</div>,
    main: () => <h2>Pac-Man</h2>
  },
  {
    path: "/dice-game",
    sidebar: () => <div className="text-muted">Dice-Game</div>,
    main: () => <h2>Dice-Game</h2>
  }
];

export default function SideNavBar() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-3 bg-light py-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.sidebar />}
                    />
                  ))}
                </Switch>
              </ol>
            </nav>
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/pac-man">Pac-Man</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/dice-game">Dice Game</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-9">
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
              </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
