import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    }
  }

  componentDidMount() {
    if(localStorage.usertoken) {
      this.props.login();
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      this.setState({
        user: decoded.data[0].login
      });
    }
  }

  render() {
    return(
      <div>
        <p>Hello user, below is your data</p>
        <p>login: {this.state.user}</p>
      </div>
    );
  }
}

export default Home;
