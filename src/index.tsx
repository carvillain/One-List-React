import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, Create } from './components';
import './styles.css'

// Import From react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SpotifyService } from './services/spotify.service';


class AuthRoute extends React.Component<{}, { isAuth: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { isAuth: false };
  }

  componentDidMount() {
    if (!window.location.hash) {
      SpotifyService.authenticate();
    } else {
      const token = window.location.hash.substr(14).split('&')[0];
      localStorage.setItem('spotifyToken', token);
    }
  }

  render() {
    return (
      <React.StrictMode>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home title={'One List'} />
            </Route>

            <Route path='/create'>
              <Create></Create>
            </Route>

            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>

          </Switch>
        </Router>
      </React.StrictMode>
    )
  }
}

ReactDOM.render(
  <AuthRoute />,
  document.getElementById('root')
);

