import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestionAnswer } from '../utils/api';
import { addUserAnswer } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function receiveQuestions(questions) {
  return {
    type      : RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestionAnswer(answer) {
  return {
    type : ADD_QUESTION_ANSWER,
    answer
  };
}

export function handleAddQuestionAnswer({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(addQuestionAnswer({ authedUser, qid, answer }));
        dispatch(addUserAnswer({ authedUser, qid, answer }));
        dispatch(hideLoading());
      })
      .catch((error) => console.error(error));
  };
}
