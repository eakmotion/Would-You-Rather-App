import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Question from './Question';
import Answer from './Answer';
import Leaderboard from './Leaderboard';
import Login from './Login';
import { Container } from 'react-bootstrap';
import MainNav from './MainNav';
import AddQuestion from './AddQuestion';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Container>
          <MainNav />
          <Route path='/' exact component={Home} />
          <Route path='/question/:id'>
            <Switch>
              <Route path='/question/add' exact component={AddQuestion} />
              <Route path='/question/:id' component={Question} />
            </Switch>
          </Route>
          <Route path='/question/:id/answer' exact component={Answer} />
          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path='/login' exact component={Login} />
        </Container>
      </Router>
    );
  }
}

export default connect()(App);
