import React, { Component } from 'react';
import { Button, Row, Card, Form } from 'react-bootstrap';

class AddQuestion extends Component {
  render() {
    return (
      <Row className='justify-content-md-center'>
        <Card>
          <Card.Header as='h5'>Create a Question</Card.Header>
          <Card.Body>
            <Card.Text>Complete the question:</Card.Text>
            <Card.Title>Would you rather ...</Card.Title>
            <Form style={{ width: '300px'}}>
              <Form.Group className='center'>
                <Form.Control
                  name='option-one'
                  type='text'
                  placeholder='Enter option one text here'
                />
                <Form.Text className='text-muted text-padding'>OR</Form.Text>
                <Form.Control
                  name='option-two'
                  type='text'
                  placeholder='Enter option two text here'
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default AddQuestion;
