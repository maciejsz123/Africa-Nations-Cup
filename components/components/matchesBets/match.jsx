import React, {Component} from 'react';

class Match extends Component {
  constructor() {
    super();
    this.state = {
      homeValue: '',
      awayValue: ''
    }
  }

  places2(value) {
    return  (value < 10 ? "0" : "") + value;
  }

  componentDidMount() {
    fetch('/getBet')
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach( entry => {
        if(entry.week === this.props.round &&
            entry.userLogin === this.props.user &&
            entry.homeTeam === this.props.homeTeam &&
            entry.awayTeam === this.props.awayTeam) {
          this.setState({
            homeValue: entry.goalsHomeTeam,
            awayValue: entry.goalsAwayTeam
          });
        }

      })
    });
  }

  onChange(e) {
    if(e.target.name === "homeInput") {
      this.setState({
        homeValue: e.target.value
      });
    } else if(e.target.name === "awayInput") {
      this.setState({
        awayValue: e.target.value
      });
    }

  }

  render() {
    return(
      <div className="row border rounded py-2 my-2" style={{backgroundColor: "#edede2"}}>
        <div className="col-1 text-right">
          {`${this.props.date.getDate()}.${this.places2(this.props.date.getMonth())}`}
        </div>
        <div className="col-1 text-left">
          {`${this.props.date.getHours()}:${this.places2(this.props.date.getMinutes())}`}
        </div>
        <div className="col-2 text-right" name="homeTeam">
          {this.props.homeTeam}
        </div>
        <div className="col-1 text-left">
          <img alt={`${this.props.homeTeam} img`} src={this.props.homeImg}/>
        </div>
        <div className="col-2 text-center" name="inputs">
          <input type="text" name="homeInput" value={this.state.homeValue} onChange={this.onChange.bind(this)}></input>
          <span>:</span>
          <input type="text" name="awayInput" value={this.state.awayValue} onChange={this.onChange.bind(this)}></input>
        </div>
        <div className="col-1 text-right">
          <img alt={`${this.props.awayTeam} img`} src={this.props.awayImg}/>
        </div>
        <div className="col-2 text-left" name="awayTeam">
          {this.props.awayTeam}
        </div>
      </div>
    );
  }
}

export default Match;
