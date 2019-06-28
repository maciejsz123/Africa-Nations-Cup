import React, {Component} from 'react';
import Match from './match.jsx';
import matches from './matchesData.js';
import jwt_decode from 'jwt-decode';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

class Bet extends Component {
  constructor() {
    super();
    let map = new Map();
    map.set(1, "round 1");
    map.set(2, "round 2");
    map.set(3, "round 3");
    map.set(4, "round of 16");
    map.set(5, "quarter finals");
    map.set(6, "semifinals");
    map.set(7, "finals");

    this.state = {
      actualRound: 1,
      roundNames: map,
      user: "",
      displayMessage: false
    };
  }

  componentDidMount() {
    if(localStorage.usertoken) {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      this.setState({
        user: decoded.data[0].login
      });
    }
  }

  nextRound() {
    if(this.state.actualRound === 7) {
      return 0;
    }
    this.setState({
      actualRound: this.state.actualRound + 1
    });
  }

  previousRound() {
    if(this.state.actualRound === 1) {
      return 0;
    }
    this.setState({
      actualRound: this.state.actualRound - 1
    });
  }

  sendData() {
    let divs = Array.from(document.getElementsByClassName("row"));
    divs.shift();
    let round = this.state.actualRound;
    let login = this.state.user;
    divs.forEach( div => {
      let homeTeam = div.children.homeTeam.innerHTML;
      let awayTeam = div.children.awayTeam.innerHTML;
      let homeValue = div.children.inputs.children.homeInput.value;
      let awayValue = div.children.inputs.children.awayInput.value;

      if(homeTeam === "---" || awayTeam === "---") return;

      if(homeValue === "" || awayValue === "") {
        fetch('/deleteBet', {
          method: "DELETE",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userLogin: login,
            week: round,
            homeTeam: homeTeam,
            awayTeam: awayTeam,
          })
        });
      }

      if(homeValue && awayValue) {
        if((homeValue > 9 || homeValue < 0) || (awayValue > 9 || awayValue < 0)) return;
        fetch('/postBets', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userLogin: login,
            week: round,
            homeTeam: homeTeam,
            goalsHomeTeam: homeValue,
            awayTeam: awayTeam,
            goalsAwayTeam: awayValue
          })
        })
      }
    });

    this.showMessage();
  }

  showMessage() {
    this.setState({
      displayMessage: true
    });
    setTimeout( () => {
      this.setState({
        displayMessage: false
      });
    }, 2500);
  }

  render() {
    let loggedIn = (
      <React.Fragment>
        <div className="row">
          <a className="col-4 text-right" href="#" onClick={this.previousRound.bind(this)}><h3><IoIosArrowBack/></h3></a>
          <h3 className="col-4 text-center">
            {this.state.roundNames.get(this.state.actualRound)}
          </h3>
          <a className="col-4 text-left" href="#" onClick={this.nextRound.bind(this)}><h3><IoIosArrowForward/></h3></a>
        </div>
        {matches.map( (match, i) => {
          if(this.state.actualRound === match.round) {
            return <Match key={i} homeTeam={match.homeTeam}
              homeImg={match.homeFlag}
              awayTeam={match.awayTeam}
              awayImg={match.awayFlag}
              date={match.date}
              round={this.state.actualRound}
              user={this.state.user}
            />
          }
        })}
        {this.state.displayMessage ?
          <div style={{position: 'fixed', bottom: '80px', right: '0', border: '1px solid grey', backgroundColor: "#007bff", color:'white', borderRadius: '3px', padding: '20px 27.5px', margin:'10px'}}>
            <span>data has been saved</span>
          </div> :
        ""}

        <button className="btn btn-primary" onClick={this.sendData.bind(this)} style={{position: 'fixed', bottom: '0', right: '0', border: '1px solid grey', padding: '20px', margin:'10px'}}>
          Click here to save data
        </button>
      </React.Fragment>
    );

    let loggedOut = (
      <h1>Logged out, log in to see data</h1>
    );

    return(
      <div className="container">
        {this.props.logged ? loggedIn : loggedOut}
      </div>
    );
  }
}

export default Bet;
