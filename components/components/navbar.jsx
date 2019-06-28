import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    const userLink = (
      <Link to='/logout' className="nav-link" onClick={this.props.logout} >
        Log-out
      </Link>
    );
    const loginLink = (
      <Link to='/login' className="nav-link" onClick={this.props.login}>
        Log-in
      </Link>
    );
    return(
      <nav className="navbar navbar-default justify-content-center bg-light">
        <ul className='nav navabar-nav'>
          <li className='navbar-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link' to='/testTipster'>Test Tipster</Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link' to='/players'>Players</Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link' to='/bet'>Bet</Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link' to='/statistics'>Statistics</Link>
          </li>
          <li className='navbar-item active'>
            <Link className='nav-link' to='/ranking'>Ranking</Link>
          </li>
          <li>
            {localStorage.usertoken ? userLink : loginLink}
          </li>
        </ul>
      </nav>
    );
  }

}

export default Navbar;
