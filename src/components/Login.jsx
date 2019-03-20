import React, { Component } from 'react';
import { Row, Card, Dropdown, Image, Media } from 'react-bootstrap';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const { users } = this.props;
    
    return (
      <Row className='justify-content-md-center'>
        <Card>
          <Card.Header as='h5'>Welcome to the Would You Rather App</Card.Header>
          <Card.Subtitle className='center text-padding'>Please sign in to continue</Card.Subtitle>
          <Card.Body>
            <Card.Title className='center'>Sign In</Card.Title>
            <Dropdown style={{ marginBottom: '10px' }}>
              <Dropdown.Toggle style={{ width: '100%' }}>Select Users</Dropdown.Toggle>
              <Dropdown.Menu className='super-colors' style={{ width: '100%' }}>
                {Object.values(users) &&
                  Object.values(users).map((user) => (
                    <Dropdown.Item href='#' as='button' key={user.id}>
                      <Media>
                        <Image
                          style={{ marginRight: '10px' }}
                          width={30}
                          height={30}
                          src={user.avatarURL}
                          alt={user.name}
                          roundedCircle
                        />
                        <Media.Body>{user.name}</Media.Body>
                      </Media>
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Login);
