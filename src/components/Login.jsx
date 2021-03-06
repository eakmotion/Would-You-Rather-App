import React, { Component } from 'react';
import { Row, Card, Dropdown, Media, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAuthedUser, removeAuthedUser } from '../actions/authedUser';
import AvatarImage from './AvatarImage';

class Login extends Component {
  handleChange = (e) => {
    this.props.dispatch(setAuthedUser(e));
  };

  handleLogout = () => {
    this.props.dispatch(removeAuthedUser());
  };

  render() {
    const { users, authedUser } = this.props;

    return (
      <Row className='justify-content-md-center'>
        <Card>
          <Card.Header as='h5'>Welcome to the Would You Rather App</Card.Header>
          <Card.Subtitle className='center text-padding'>
            {authedUser && users[authedUser] ? (
              `Hello, ${users[authedUser].name}`
            ) : (
              'Please sign in to continue'
            )}
          </Card.Subtitle>
          {authedUser &&
          users[authedUser] && (
            <div style={{ textAlign: 'center' }}>
              <AvatarImage author={authedUser} />
            </div>
          )}
          <Card.Body>
            <Card.Title className='center'>{authedUser ? 'Switch Users' : 'Sign In'}</Card.Title>
            <Dropdown
              style={{ marginBottom: '10px' }}
              onSelect={this.handleChange}
              defaultValue={authedUser}>
              <Dropdown.Toggle style={{ width: '100%' }}>Select Users</Dropdown.Toggle>
              <Dropdown.Menu className='super-colors' style={{ width: '100%' }}>
                {Object.values(users) &&
                  Object.values(users).map((user) => (
                    <Dropdown.Item eventKey={user.id} key={user.id}>
                      <Media>
                        <AvatarImage
                          author={user.id}
                          isThumbnail={false}
                          size={30}
                          style={{ marginRight: '10px', padding: '0' }}
                        />
                        <Media.Body>{user.name}</Media.Body>
                      </Media>
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            {authedUser && (
              <Button variant='outline-secondary' block onClick={this.handleLogout}>
                Logout
              </Button>
            )}
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  };
}

export default connect(mapStateToProps)(Login);
