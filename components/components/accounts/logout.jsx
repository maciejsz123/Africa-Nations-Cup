import React, {Component} from 'react';

class Logout extends Component {

  render() {
    return(
      <React.Fragment>
        <h1>{this.props.logged ? 'you just logged out' : 'not logged in'}</h1>
      </React.Fragment>
    )
  }
}

export default Logout;
