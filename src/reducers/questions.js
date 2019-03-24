import { RECEIVE_QUESTIONS, ADD_QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      const question = action.question;

      return {
        ...state,
        [question.id]: question
      };
    case ADD_QUESTION_ANSWER:
      const { qid, answer, authedUser } = action.answer;

      return {
        ...state,
        [qid] : {
          ...state[qid],
          [answer] : {
            ...state[qid][answer],
            votes : [ ...state[qid][answer].votes, authedUser ]
          }
        }
      };
    default:
      return state;
  }
}
