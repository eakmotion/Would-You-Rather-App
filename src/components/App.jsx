import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import '../App.css';
import Dashboard from './Dashboard'
import Question from './Question'
import Answer from './Answer'
import Leaderboard from './Leaderboard'
import Membership from './Membership'
import { Container } from 'react-bootstrap';
import MainNav from './MainNav'
import AddQuestion from './AddQuestion'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <MainNav />
          <Route path='/' exact component={Dashboard} />
          <Route path='/question/add' exact component={AddQuestion} />
          <Route path='/question/:id' exact component={Question} />
          <Route path='/question/:id/answer' exact component={Answer} />
          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path='/login' exact component={Membership} />
        </Container>
      </Router>
    );
  }
}

export default App;
