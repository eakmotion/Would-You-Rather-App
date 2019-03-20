import React, { Component } from 'react';
import { Row, Card, Button, Dropdown, Image, Media } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <Row className='justify-content-md-center'>
        <Card>
          <Card.Header as='h5'>Welcome to the Would You Rather App</Card.Header>
          <Card.Subtitle as='h7' className='center text-padding'>
            Please sign in to continue
          </Card.Subtitle>
          <Card.Body>
            <Card.Title className='center'>Sign In</Card.Title>
            <Dropdown style={{ marginBottom: '10px' }}>
              <Dropdown.Toggle style={{ width: '100%' }}>Select Users</Dropdown.Toggle>
              <Dropdown.Menu className='super-colors' style={{ width: '100%' }}>
                <Dropdown.Item href='#' as='button'>
                  <Media>
                    <Image
                      style={{ marginRight: '10px' }}
                      width={30}
                      height={30}
                      src='http://placehold.it/250x250'
                      alt='Generic placeholder'
                      roundedCircle
                    />
                    <Media.Body>Sarah Edo</Media.Body>
                  </Media>
                </Dropdown.Item>
                <Dropdown.Item href='#' as='button'>
                  <Media>
                    <Image
                      style={{ marginRight: '10px' }}
                      width={30}
                      height={30}
                      src='http://placehold.it/250x250'
                      alt='Generic placeholder'
                      roundedCircle
                    />
                    <Media.Body>Tyler Mac</Media.Body>
                  </Media>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button block>Sign In</Button>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default Login;
