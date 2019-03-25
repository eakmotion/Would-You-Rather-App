import React from 'react';
import { Row, Media, Form, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AvatarImage from './AvatarImage';
import { connect } from 'react-redux';

const Question = ({ question, handleSubmit, canVote }) => {
  const { id, author, optionOne, optionTwo } = question;

  return (
    <Row className='justify-content-md-center'>
      <Card style={{ width: '500px', margin: '10px 0' }}>
        <Card.Header as='h5'>{`${author} asks:`}</Card.Header>
        <Card.Body>
          <Media>
            <AvatarImage author={author} style={{ marginRight: '20px' }} />
            <Media.Body>
              <h5>Would you rather ..</h5>
              {handleSubmit ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Check
                      type='radio'
                      label={optionOne.text}
                      name='answer'
                      value='optionOne'
                    />
                    <Form.Check
                      type='radio'
                      label={optionTwo.text}
                      name='answer'
                      value='optionTwo'
                    />
                  </Form.Group>
                  {canVote ? (
                    <Button variant='primary' type='submit'>
                      Submit
                    </Button>
                  ) : (
                    <Link className='btn btn-primary' to='/login'>
                      Login to Vote
                    </Link>
                  )}
                </Form>
              ) : (
                <div>
                  <p>{`...${optionOne.text}...`}</p>
                  <Link className='btn btn-primary' to={`/question/${id}`}>
                    View Poll
                  </Link>
                </div>
              )}
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
    </Row>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { canVote: authedUser ? true : false };
};

export default connect(mapStateToProps)(Question);
