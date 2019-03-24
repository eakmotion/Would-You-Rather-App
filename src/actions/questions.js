import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { addUserAnswer, addUserQuestion } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
  return {
    type      : RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type     : ADD_QUESTION,
    question
  };
}

export function addQuestionAnswer(answer) {
  return {
    type   : ADD_QUESTION_ANSWER,
    answer
  };
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const question = {
      author        : authedUser,
      optionOneText,
      optionTwoText
    };

    dispatch(showLoading());
    return saveQuestion(question).then((response) => {
      dispatch(addQuestion(response));
      dispatch(addUserQuestion(response));
      dispatch(hideLoading());
    });
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
