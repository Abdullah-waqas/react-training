
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


class Contact extends React.Component {
  render() {
    return <h1>Contact</h1>
  }
}

class Notfound extends React.Component {
  render() {
    return (
      <h1>Page Not Found</h1>
    )
  }
}

class Users extends React.Component {
  render() {
    console.log(this.props);
    return <h1>Users</h1>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}


const Routing = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)




ReactDOM.render(<Routing />, document.getElementById('root'));
