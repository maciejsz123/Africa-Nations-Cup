import React, {Component} from 'react';
import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: {login: true, register: false},
      data: "",
    }
  }

  handleRegister(e) {
    e.preventDefault();
    let login = e.target[0].value;
    let password = e.target[1].value;
    let email = e.target[2].value;

    fetch('/register',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
        password: password,
        email: email
      })
    })
    .then( v => {
      v.json().then( response => {
        if(response.data) {
          console.log(response.data);
          this.props.history.push('/');
        } else {
          console.log(response.error);
        }
      });
    })
  }

  handleLogin(e) {
    e.preventDefault();
    let login = e.target[0].value;
    let password = e.target[1].value;
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
        password: password
      })
    })
    .then( v => {
      v.json().then( response => {
        if(response.data) {
          localStorage.setItem('usertoken', response.data);
          this.props.history.push('/');
        } else {
          console.log("wrong username or password");
        }

      });
    });
  }

  getStyles() {
    let stylesA = "col text-center m-2 rounded changePageHover";
    let stylesB = stylesA + " activeItem";

    return {
      stylesA,
      stylesB
    };
  }

  styleChangeClick(e) {
    const actual = e.target.attributes.name.value;
    let activeItem;
    if(actual === 'login') {
      activeItem = {login: true, register: false};
    } else if(actual === 'register') {
      activeItem = {login: false, register: true};
    }
    this.setState({
      activeItem: activeItem
    });
  }

  render() {
    let itemClass = this.getStyles();
    let login = (
      <React.Fragment>
        <h2>{this.state.data}</h2>
        <h1>Login Form</h1>
        <form action="logIn" method="POST" onSubmit={this.handleLogin.bind(this)}>
          <input type="text" name="username" placeholder="username" required />
          <input type="password" name="password" placeholder="password" required />
          <button style={{margin: "auto", display: "block"}} className="btn btn-primary" >Login</button>
        </form>
      </React.Fragment>
    );
    let register = (
      <React.Fragment>
        <h1>Register From</h1>
        <form onSubmit={this.handleRegister.bind(this)}  action="register" method="POST">
          <input type="text" name="username" placeholder="username" required />
          <input type="password" name="password" placeholder="password" required />
          <input type="text" name="email" placeholder="email" required />
          <button style={{margin: "auto", display: "block"}} className="btn btn-primary" >Register</button>
        </form>
      </React.Fragment>
    );
    return(
      <div className="login-form">
        <div className="row">
          <div onClick={this.styleChangeClick.bind(this)} name="login" className={this.state.activeItem.login ? itemClass.stylesB : itemClass.stylesA}>Login</div>
          <div onClick={this.styleChangeClick.bind(this)} name="register" className={this.state.activeItem.login ? itemClass.stylesA : itemClass.stylesB}>Register</div>
        </div>
        {this.state.activeItem.login ? login : register}
      </div>
    );
  }
}

export default Login;
