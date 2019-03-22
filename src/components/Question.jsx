import React from 'react';
import { Row, Image, Media, Form, Card, Button } from 'react-bootstrap';

const Question = ({ questionAvatar, question, handleSubmit }) => {
  const { author, optionOne, optionTwo } = question;

  return (
    <Row className='justify-content-md-center'>
      <Card>
        <Card.Header as='h5'>{`${author} asks:`}</Card.Header>
        <Card.Body>
          <Media>
            <Image
              style={{ marginRight: '20px' }}
              width={150}
              height={150}
              src={questionAvatar || 'http://placehold.it/100x100'}
              alt={author}
              roundedCircle
              thumbnail
            />
            <Media.Body>
              <h5>Would you rather ..</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Check type='radio' label={optionOne.text} name='answer' value='optionOne' />
                  <Form.Check type='radio' label={optionTwo.text} name='answer' value='optionTwo' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Question;
