import React from 'react';
import { ProgressBar, Badge, Row, Media, Card } from 'react-bootstrap';
import AvatarImage from './AvatarImage';

const votePercentage = (option, total) => {
  return (option / total * 100).toFixed(1);
};

const resultText = (option, total) => {
  return `${option} out of ${total} votes`;
};

const AnswerCard = ({ option, optionCount, total, topAnswer, userAnswer }) => {
  return (
    <Card
      border={topAnswer ? 'success' : null}
      bg={topAnswer ? 'primary' : null}
      text={topAnswer ? 'white' : 'black'}
      style={{ width: '18rem', margin: '10px 0' }}>
      <Card.Body>
        {userAnswer && (
          <Card.Title>
            <Badge pill variant='warning'>
              Your Vote
            </Badge>
          </Card.Title>
        )}
        <Card.Subtitle className='text-padding'>Would you rather {option.text}</Card.Subtitle>
        <ProgressBar
          striped
          variant='success'
          now={votePercentage(optionCount, total)}
          label={`${votePercentage(optionCount, total)}%`}
        />
        <Card.Text className='center text-padding'>{resultText(optionCount, total)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const Answer = ({ user, question }) => {
  const { author, optionOne, optionTwo } = question;
  const userAnswer = user.answers[question.id];
  const optionOneCount = optionOne.votes.length;
  const optionTwoCount = optionTwo.votes.length;
  const total = optionOneCount + optionTwoCount;

  const topAnswer =
    optionOneCount === optionTwoCount
      ? null
      : optionOneCount > optionTwoCount ? 'optionOne' : 'optionTwo';

  return (
    <Row className='justify-content-md-center'>
      <Card style={{ width: '500px', margin: '10px 0' }}>
        <Card.Header as='h5'>Asked by {author}</Card.Header>
        <Card.Body>
          <Media>
            <AvatarImage author={author} style={{ marginRight: '20px' }} />
            <Media.Body>
              <h5>Results:</h5>
              <div>
                <AnswerCard
                  option={optionOne}
                  optionCount={optionOneCount}
                  total={total}
                  topAnswer={topAnswer === 'optionOne'}
                  userAnswer={userAnswer === 'optionOne'}
                />
                <AnswerCard
                  text='optionTwo'
                  option={optionTwo}
                  optionCount={optionTwoCount}
                  total={total}
                  topAnswer={topAnswer === 'optionTwo'}
                  userAnswer={userAnswer === 'optionTwo'}
                />
              </div>
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Answer;
