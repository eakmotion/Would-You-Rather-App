import React, { Component } from 'react';
import { Row, Image, Media, Col, Form, Card, Button } from 'react-bootstrap';

class Question extends Component {
  render() {
    return (
      <Row className='justify-content-md-center'>
        <Card>
          <Card.Header as='h5'>Tyler McGin asks:</Card.Header>
          <Card.Body>
            <Media>
              <Image
                style={{ marginRight: '20px'}}
                width={150}
                height={150}
                src='http://placehold.it/250x250'
                alt='Generic placeholder'
                roundedCircle
                thumbnail
              />
              <Media.Body>
                <h5>Would you rather ..</h5>
                <Form>
                  <Form.Group>
                    <Col>
                      <Form.Check
                        type='radio'
                        label='find $50 yourself'
                        name='formHorizontalRadios'
                        id='formHorizontalRadios1'
                      />
                      <Form.Check
                        type='radio'
                        label='have your bestfriend find $500'
                        name='formHorizontalRadios'
                        id='formHorizontalRadios2'
                      />
                    </Col>
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
  }
}

export default Question;
