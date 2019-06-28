import React from 'react';
import BracketMatch from './bracketMatch.jsx';

class Bracket extends React.Component {

  determineTeamsSetUp() {
    let thirdPlaceQualifiedTeams = [
      'CDAB', 'CABE', 'CABF', 'DABE', 'DABF', 'EABF', 'CDAE',
      'CDAF', 'CAFE', 'DAFE', 'CDBE', 'CDBF', 'ECBF', 'EDBF', 'CDFE'
    ];
    let groupsOrder = this.props.thirdTeams.name.slice(0, 4);
    let actualOrder = "";

    for(let groupName in thirdPlaceQualifiedTeams) {
      let counter = 0;
      for(let i=0; i<4; i++) {
        if(thirdPlaceQualifiedTeams[groupName].includes(groupsOrder[i])) {
          counter++;
        } else {
          counter = 0;
          break;
        }
      }
      if(counter === 4) {
        actualOrder = thirdPlaceQualifiedTeams[groupName];
        break;
      }
    }

    return Array.from(actualOrder);
  }

  render() {
    let order = this.determineTeamsSetUp();
    if(!Object.keys(order).length) {
      return "";
    }
    return(
      <div className="container-fluid bracket">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 d-flex flex-column justify-content-around">
            <h4 className="align-self-center">Round of 16</h4>
            <BracketMatch team1={this.props.groupTeams.groupD} place1={0} team2={this.props.groupTeams[`group${order[0]}`]} place2={2} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.groupTeams.groupA} place1={1} team2={this.props.groupTeams.groupC} place2={1} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.groupTeams.groupB} place1={1} team2={this.props.groupTeams.groupF} place2={1} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.groupTeams.groupA} place1={0} team2={this.props.groupTeams[`group${order[1]}`]} place2={2} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.groupTeams.groupB} place1={0} team2={this.props.groupTeams[`group${order[2]}`]} place2={2} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.groupTeams.groupC} place1={0} team2={this.props.groupTeams[`group${order[3]}`]} place2={2} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.groupTeams.groupE} place1={0} team2={this.props.groupTeams.groupD} place2={1} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.groupTeams.groupF} place1={0} team2={this.props.groupTeams.groupE} place2={1} handleChange={this.props.handleChange}/>
          </div>
          <div className="col-12 col-md-6 col-xl-3 d-flex flex-column justify-content-around">
            <h4 className="align-self-center">Quarter finals</h4>
            <BracketMatch team1={this.props.bracket} place1={0} team2={this.props.bracket} place2={1} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.bracket} place1={2} team2={this.props.bracket} place2={3} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.bracket} place1={4} team2={this.props.bracket} place2={5} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.bracket} place1={6} team2={this.props.bracket} place2={7} handleChange={this.props.handleChange}/>
          </div>
          <div className="col-12 col-md-6 col-xl-3 d-flex flex-column justify-content-around">
            <h4 className="align-self-center">Semifinals</h4>
            <BracketMatch team1={this.props.bracket} place1={8} team2={this.props.bracket} place2={9} handleChange={this.props.handleChange}/>
            <BracketMatch team1={this.props.bracket} place1={10} team2={this.props.bracket} place2={11} handleChange={this.props.handleChange}/>
          </div>
          <div className="col-12 col-md-6 col-xl-3 d-flex flex-column justify-content-around">
            <h4 className="align-self-center">Final</h4>
            <BracketMatch team1={this.props.bracket} place1={14} team2={this.props.bracket} place2={15} handleChange={this.props.handleChange}/>
            <h4 className="align-self-center">Third Place Match</h4>
            <BracketMatch team1={this.props.bracket} place1={12} team2={this.props.bracket} place2={13} handleChange={this.props.handleChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Bracket;
