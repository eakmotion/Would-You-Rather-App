import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import Question from './Question';

class Home extends Component {
  state = {
    questionState : 'unAnswered'
  };

  handleSelect = (e) => {
    this.setState({
      questionState : e
    });
  };

  render() {
    const { authedUser, questions, unAnswered, answered, owned } = this.props;
    const { questionState } = this.state;

    const questionList = authedUser
      ? questionState === 'unAnswered'
        ? unAnswered
        : questionState === 'answered' ? answered : owned
      : questions;
    return (
      <div>
        {authedUser && (
          <Nav fill variant='tabs' defaultActiveKey='unAnswered' onSelect={this.handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey='unAnswered'>Unanswered Questions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='answered'>Answered Questions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='owned'>Your Questions</Nav.Link>
            </Nav.Item>
          </Nav>
        )}
        <div>
          {questionList ? (
            Object.values(questionList).map((question) => (
              <Question key={question.id} question={question} />
            ))
          ) : (
            <h4 className='center text-padding'>No questions</h4>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    authedUser,
    questions,
    answered   :
      users[authedUser] &&
      Object.keys(users[authedUser].answers)
        .map((answerId) => questions[answerId])
        .filter((question) => question.author !== authedUser),
    unAnswered :
      users[authedUser] &&
      Object.keys(questions)
        .filter((questionId) => !users[authedUser].answers.hasOwnProperty(questionId))
        .map((questionId) => questions[questionId])
        .filter((question) => question.author !== authedUser),
    owned      :
      users[authedUser] &&
      Object.values(users[authedUser].questions).map((questionId) => questions[questionId])
  };
};

export default connect(mapStateToProps)(Home);
