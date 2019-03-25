import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions';
import Answer from './Answer';
import Question from './Question';

class QuestionPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { question, dispatch } = this.props;
    const answer = e.target['answer'].value;

    dispatch(handleAddQuestionAnswer({ qid: question.id, answer }));
  };

  render() {
    const { question, answered, user } = this.props;

    if (question === undefined) {
      return <p className='center'>Question doesn't existed.</p>;
    }

    return (
      <div>
        {answered ? (
          <Answer question={question} user={user} />
        ) : (
          <Question question={question} handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return {
    question,
    user     : users[authedUser],
    answered :
      question &&
      users[authedUser] &&
      Object.keys(users[authedUser].answers).filter((answer) => answer === question.id)[0]
        ? true
        : false
  };
}

export default connect(mapStateToProps)(QuestionPage);
