import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

const MainNav = () => {
  return (
    <Navbar>
      <Navbar.Brand href='/'>Would you Rather?</Navbar.Brand>
      <Navbar.Toggle />
      <Nav className='mr-auto'>
        <NavLink to='/' exact activeClassName='active' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='question/add' activeClassName='active' className='nav-link'>
          New Question
        </NavLink>
        <NavLink to='/leaderboard' activeClassName='active' className='nav-link'>
          Leaderboard
        </NavLink>
      </Nav>
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          Hello, <NavLink to='/logout'>Eakmotion</NavLink>
        </Navbar.Text>
        <NavLink to='/logout' activeClassName='active' className='nav-link'>
          Logout
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MainNav);
