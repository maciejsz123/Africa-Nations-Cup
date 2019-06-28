import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Navbar from './navbar.jsx';
import TestTipster from './testingTipster/testTipster.jsx';
import Bet from './matchesBets/bet.jsx';
import Statistics from './statistics/statistics.jsx';
import Ranking from './playersRanking/ranking.jsx';
import Home from './home.jsx';
import Login from './accounts/logIn.jsx';
import Players from './players/players.jsx';
import Logout from './accounts/logout.jsx';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      logged: false
    };
  }

  componentDidMount() {
    if(localStorage.usertoken) {
      this.setState({
        logged: true
      });
    }
  }

  login() {
    this.setState({
      logged: true
    });
  }

  logout() {
    this.setState({
      logged: false
    });
    localStorage.removeItem('usertoken');
  }

  render() {
    return(
      <React.Fragment>
        <Navbar logged={this.state.logged} logout={this.logout.bind(this)} login={this.login.bind(this)}/>
        <Route exact path='/' render={() => <Home login={this.login.bind(this)} />} />
        <Route path='/testTipster' component={TestTipster} />
        <Route path='/players' component={Players} />
        <Route path='/bet' render={() => <Bet logged={this.state.logged} />}/>
        <Route path='/statistics' render={() => <Statistics logged={this.state.logged} />}/>
        <Route path='/ranking' render={() => <Ranking logged={this.state.logged} />}/>
        <Route path='/logout' render={()=> <Logout logged={this.state.logged}/>} />
        <Route path='/login' component={Login} />
        </React.Fragment>
    );
  }
}

export default MainPage;
