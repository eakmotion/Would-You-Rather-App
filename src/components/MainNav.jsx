import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser';

class MainNav extends Component {
  handleLogout = () => {
    this.props.dispatch(removeAuthedUser());
  };

  render() {
    const { authedUser } = this.props;

    return (
      <Navbar bg='light' variant='light' style={{ marginBottom: '20px' }}>
        <Navbar.Brand href='/'>Would you Rather?</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className='mr-auto'>
          <NavLink to='/' exact activeClassName='active' className='nav-link'>
            Home
          </NavLink>
          {authedUser && <NavLink to='question/add' activeClassName='active' className='nav-link'>
            New Question
          </NavLink>}
          <NavLink to='/leaderboard' activeClassName='active' className='nav-link'>
            Leaderboard
          </NavLink>
        </Nav>
        <Navbar className='justify-content-end'>
          {authedUser && (
            <Navbar.Text>
              Hello, <NavLink to='/login'>{authedUser.name}</NavLink>
            </Navbar.Text>
          )}
          <NavLink
            to='/login'
            activeClassName='active'
            className='nav-link'
            onClick={authedUser ? this.handleLogout : null}>
            {authedUser ? 'Logout' : 'Login'}
          </NavLink>
        </Navbar>
      </Navbar>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser : users[authedUser]
  };
}

export default withRouter(connect(mapStateToProps)(MainNav));
