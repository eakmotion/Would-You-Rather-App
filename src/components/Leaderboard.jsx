import React, { Component } from 'react';
import Leader from './Leader';
import { connect } from 'react-redux';
import { getTotalScore } from '../utils/helpers';

class Leaderboard extends Component {
  render() {
    const { users, authedUser } = this.props;

    return (
      Object.values(users) &&
      Object.values(users).map((user, index) => (
        <Leader key={user.id} user={user} rank={index + 1} authedUser={authedUser} />
      ))
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users      : Object.values(users).sort(
      (a, b) => getTotalScore(b.questions, b.answers) - getTotalScore(a.questions, a.answers)
    ),
    authedUser
  };
};

export default connect(mapStateToProps)(Leaderboard);
