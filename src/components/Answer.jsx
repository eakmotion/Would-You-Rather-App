import React, { Component } from 'react';
import { ProgressBar, Badge, Row, Image, Media, Card } from 'react-bootstrap';

class Answer extends Component {
  render() {
    return (
      <Row className='justify-content-md-center'>
        <Card>
          <Card.Header as='h5'>Asked by Tyler McGin</Card.Header>
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
                <h5>Results:</h5>
                <div>
                  <Card border='success' bg='primary' text='white' style={{ width: '18rem', marginBottom: '10px' }}>
                    <Card.Body>
                      <Card.Title>
                        <Badge pill variant='warning'>
                          Your Vote
                        </Badge>
                      </Card.Title>
                      <Card.Subtitle className='text-padding'>Would you rather find $50 yourself?</Card.Subtitle>
                      <ProgressBar
                        striped
                        variant='success'
                        now={2 / 3 * 100}
                        label={`${(2 / 3 * 100).toFixed(1)}%`}
                      />
                      <Card.Text className='center text-padding'>2 out of 3 votes</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Subtitle className='text-padding'>
                        Would you rather have your bestfriend find $500?
                      </Card.Subtitle>
                      <ProgressBar
                        striped
                        variant='success'
                        now={1 / 3 * 100}
                        label={`${(1 / 3 * 100).toFixed(1)}%`}
                      />
                      <Card.Text className='center text-padding'>1 out of 3 votes</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default Answer;
