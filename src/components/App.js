import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css';
import Dashboard from './Dashboard'
import Question from './Question'
import Answer from './Answer'
import Leaderboard from './Leaderboard'
import Membership from './Membership'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h3>Would you rather?</h3>
          <Route path='/' exact component={Dashboard} />
          <Route path='/question/:id' exact component={Question} />
          <Route path='/question/:id/answer' component={Answer} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/login' component={Membership} />
        </div>
      </Router>
    );
  }
}

export default App;
