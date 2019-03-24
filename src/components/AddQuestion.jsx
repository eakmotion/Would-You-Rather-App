import React, { Component } from 'react';
import { Button, Row, Card, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class AddQuestion extends Component {
  state = {
    toHome : false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const optionOneText = e.target['optionOne'].value;
    const optionTwoText = e.target['optionTwo'].value;

    dispatch(handleAddQuestion({ optionOneText, optionTwoText }));

    this.setState({
      toHome : id ? false : true
    });
  };

  render() {
    if (this.state.toHome === true) {
      return <Redirect to='/' />;
    }

    return (
      <Row className='justify-content-md-center'>
        <Card>
          <Card.Header as='h5'>Create a Question</Card.Header>
          <Card.Body>
            <Card.Text>Complete the question:</Card.Text>
            <Card.Title>Would you rather ...</Card.Title>
            <Form style={{ width: '300px' }} onSubmit={this.handleSubmit}>
              <Form.Group className='center'>
                <Form.Control
                  name='optionOne'
                  type='text'
                  placeholder='Enter option one text here'
                />
                <Form.Text className='text-muted text-padding'>OR</Form.Text>
                <Form.Control
                  name='optionTwo'
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

export default connect()(AddQuestion);
