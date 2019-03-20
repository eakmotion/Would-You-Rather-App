import React, { Component } from 'react';
import { Row, Image, Media, Form, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    const { question, authorAvatar } = this.props;

    if (question === undefined) {
      return <p className='center'>Question doesn't existed.</p>;
    }

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
                src={authorAvatar || 'http://placehold.it/100x100'}
                alt='Generic placeholder'
                roundedCircle
                thumbnail
              />
              <Media.Body>
                <h5>Would you rather ..</h5>
                <Form>
                  <Form.Group>
                    <Form.Check type='radio' label={optionOne.text} name='answer' />
                    <Form.Check type='radio' label={optionTwo.text} name='answer' />
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

function mapStateToProps({ users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  return {
    question,
    authorAvatar : question && users[question.author] ? users[question.author].avatarURL : null
  };
}

export default connect(mapStateToProps)(Question);
