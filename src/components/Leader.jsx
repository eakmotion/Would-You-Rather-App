import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  Card,
  Media,
  Image
} from 'react-bootstrap';

class Leader extends Component {
  render() {
    return (
      <Row className='justify-content-md-center'>
        <Card>
          <Card.Header as='h5'><Badge pill variant='success'>1st</Badge> Sarah Edo</Card.Header>
          <Card.Body>
            <Media>
              <Image
                width={150}
                height={150}
                src='http://placehold.it/250x250'
                alt='Generic placeholder'
                roundedCircle
                thumbnail
              />
              <Media.Body>
                <ListGroup className='list-group-flush' style={{ width: '17rem', padding: '0 20px' }}>
                  <ListGroupItem>Answered Questions <Badge pill variant='secondary'>7</Badge></ListGroupItem>
                  <ListGroupItem>Created Questions <Badge pill variant='secondary'>3</Badge></ListGroupItem>
                </ListGroup>
              </Media.Body>
              <Media.Body>
                <Card style={{ width: '6rem' }}>
                  <Card.Header as='h7' className='center'>Score</Card.Header>
                  <Card.Body className='center'>
                    <h3>
                      <Badge pill variant='success'>
                        10
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
