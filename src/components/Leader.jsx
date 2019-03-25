import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge, Row, Card, Media } from 'react-bootstrap';
import { getNumberWithOrdinal, getTotalScore } from '../utils/helpers';
import AvatarImage from './AvatarImage';

class Leader extends Component {
  render() {
    const { user, rank, authedUser } = this.props;
    const currentUser = user && user.id === authedUser;

    return (
      <Row className='justify-content-md-center'>
        <Card style={{ margin: '10px 0' }} border={currentUser ? 'success' : null}>
          <Card.Header as='h5'>
            <Badge pill variant={rank === 1 ? 'success' : 'secondary'}>
              {getNumberWithOrdinal(rank)}
            </Badge>{' '}
            {user.name}
            {currentUser && (
              <Badge pill variant='secondary' style={{ float: 'right' }}>
                Your Rank
              </Badge>
            )}
          </Card.Header>
          <Card.Body>
            <Media>
              <AvatarImage author={user.id} />
              <Media.Body>
                <ListGroup
                  className='list-group-flush'
                  style={{ width: '17rem', padding: '0 20px' }}>
                  <ListGroupItem>
                    Answered Questions{' '}
                    <Badge pill variant='secondary'>
                      {Object.keys(user.answers).length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Created Questions{' '}
                    <Badge pill variant='secondary'>
                      {user.questions.length}
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </Media.Body>
              <Media.Body>
                <Card style={{ width: '6rem' }}>
                  <Card.Header className='center'>Score</Card.Header>
                  <Card.Body className='center'>
                    <h3>
                      <Badge pill variant='success'>
                        {getTotalScore(user.questions, user.answers)}
                      </Badge>
                    </h3>
                  </Card.Body>
                </Card>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default Leader;
