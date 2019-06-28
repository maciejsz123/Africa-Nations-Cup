import React, {Component} from 'react';
import Group from './group.jsx';
import ThirdPlaceRanking from './thirdPlaceRanking';
import Bracket from './bracket.jsx';

class TestTipster extends Component {

  constructor() {
    super();
    this.state = {
      groups: {
        groupA: {
          staticTeam: ["Egypt", "DR Congo", "Uganda", "Zimbabwe"],
          staticFlag : [require('./images/Egypt.png'),require('./images/DR Congo.png'),require('./images/Uganda.png'),require('./images/Zimbabwe.png')],
          number: 0,
          name: 'A',
          teams: ["Egypt", "DR Congo", "Uganda", "Zimbabwe"],
          altImage: ['EGY', 'DRC', 'UGA', 'ZIM'],
          teamImage: [require('./images/Egypt.png'),require('./images/DR Congo.png'),require('./images/Uganda.png'),require('./images/Zimbabwe.png')],
          goalsGainedPosition: [ [0,6,9], [2,7,11], [3,4,8], [1,5,10] ],
          goalsLostPosition: [ [1,7,8], [3,6,10], [2,5,9], [0,4,11] ],
          totalGoalsGained: [0,0,0,0],
          totalGoalsLost: [0,0,0,0],
          totalPoints: [0,0,0,0]
        },
        groupB: {
          staticTeam: ["Nigeria", "Guinea", "Madagascar", "Burundi"],
          staticFlag : [require('./images/Nigeria.png'),require('./images/Guinea.png'),require('./images/Madagascar.png'),require('./images/Burundi.png')],
          number: 1,
          name: 'B',
          teams: [ "Nigeria", "Guinea", "Madagascar", "Burundi"],
          altImage: ['NIG', 'GU', 'MAD', 'BUR'],
          teamImage: [require('./images/Nigeria.png'),require('./images/Guinea.png'),require('./images/Madagascar.png'),require('./images/Burundi.png')],
          goalsGainedPosition: [ [0,6,9], [2,7,11], [3,4,8], [1,5,10] ],
          goalsLostPosition: [ [1,7,8], [3,6,10], [2,5,9], [0,4,11] ],
          totalGoalsGained: [0,0,0,0],
          totalGoalsLost: [0,0,0,0],
          totalPoints: [0,0,0,0]
        },
        groupC: {
          staticTeam: ["Senegal", "Algeria", "Kenya", "Tanzania"],
          staticFlag : [require('./images/Senegal.png'),require('./images/Algeria.png'),require('./images/Kenya.png'),require('./images/Tanzania.png')],
          number: 2,
          name: 'C',
          teams: ["Senegal", "Algeria", "Kenya", "Tanzania"],
          altImage: ['SEN', 'ALG', 'KEN', 'TAN'],
          teamImage: [require('./images/Senegal.png'),require('./images/Algeria.png'),require('./images/Kenya.png'),require('./images/Tanzania.png')],
          goalsGainedPosition: [ [0,6,9], [2,7,11], [3,4,8], [1,5,10] ],
          goalsLostPosition: [ [1,7,8], [3,6,10], [2,5,9], [0,4,11] ],
          totalGoalsGained: [0,0,0,0],
          totalGoalsLost: [0,0,0,0],
          totalPoints: [0,0,0,0]
        },
        groupD: {
          staticTeam: ["Morocco","Ivory Coast", "South Africa", "Namibia"],
          staticFlag : [require('./images/Morocco.png'),require('./images/Ivory Coast.png'),require('./images/South Africa.png'),require('./images/Namibia.png')],
          number: 3,
          name: 'D',
          teams: [ "Morocco","Ivory Coast", "South Africa", "Namibia"],
          altImage: ['MAR', 'IVC', 'SOA', 'NAM'],
          teamImage: [require('./images/Morocco.png'),require('./images/Ivory Coast.png'),require('./images/South Africa.png'),require('./images/Namibia.png')],
          goalsGainedPosition: [ [0,6,9], [2,7,11], [3,4,8], [1,5,10] ],
          goalsLostPosition: [ [1,7,8], [3,6,10], [2,5,9], [0,4,11] ],
          totalGoalsGained: [0,0,0,0],
          totalGoalsLost: [0,0,0,0],
          totalPoints: [0,0,0,0]
        },
        groupE: {
          staticTeam: ["Tunisia", "Mali", "Mauritius", "Angola"],
          staticFlag : [require('./images/Tunisia.png'),require('./images/Mali.png'),require('./images/Mauritius.png'),require('./images/Angola.png')],
          number: 4,
          name: 'E',
          teams: ["Tunisia", "Mali", "Mauritius", "Angola"],
          altImage: ['TUN', 'MAL', 'MAU', 'ANG'],
          teamImage: [require('./images/Tunisia.png'),require('./images/Mali.png'),require('./images/Mauritius.png'),require('./images/Angola.png')],
          goalsGainedPosition: [ [0,6,9], [2,7,11], [3,4,8], [1,5,10] ],
          goalsLostPosition: [ [1,7,8], [3,6,10], [2,5,9], [0,4,11] ],
          totalGoalsGained: [0,0,0,0],
          totalGoalsLost: [0,0,0,0],
          totalPoints: [0,0,0,0]
        },
        groupF: {
          staticTeam: ["Cameroon", "Ghana", "Benin", "Guin-Bissau"],
          staticFlag : [require('./images/Cameroon.png'),require('./images/Ghana.png'),require('./images/Benin.png'),require('./images/Guinea-Bissau.png')],
          number: 5,
          name: 'F',
          teams: ["Cameroon", "Ghana", "Benin", "Guin-Bissau"],
          altImage: ['CAM', 'GHA', 'BEN', 'GUI'],
          teamImage: [require('./images/Cameroon.png'),require('./images/Ghana.png'),require('./images/Benin.png'),require('./images/Guinea-Bissau.png')],
          goalsGainedPosition: [ [0,6,9], [2,7,11], [3,4,8], [1,5,10] ],
          goalsLostPosition: [ [1,7,8], [3,6,10], [2,5,9], [0,4,11] ],
          totalGoalsGained: [0,0,0,0],
          totalGoalsLost: [0,0,0,0],
          totalPoints: [0,0,0,0]
        }
      },
        thirdPlaceGroup: {
          name: [],
          teams: [],
          altImage: [],
          teamImage: [],
          totalGoalsGained: [],
          totalGoalsLost: [],
          totalPoints: []
        },
        bracket: {
          teams: [],
          altImage: [],
          teamImage: []
        }
    }
  }

  componentDidMount() {
    this.sortThirdPlace();
    document.querySelector('input').focus();
  }

  handleChange(event, group) {
    let inputs = [].slice.call(document.querySelectorAll("input"));
    let actualInputNum = inputs.indexOf(event.target);
    let value = event.target.value;

    if(!/\d/.test(value)) {
      event.target.value = '';
      event.target.style = "background: tomato";
      return;
    } else {
      event.target.style = "background: default";
      value = parseInt(value);
    }

    let home = (actualInputNum%2 === 0);

    for(let i=0; i<4; i++) {
      let x,y,z;
      x = parseInt(inputs[group.goalsGainedPosition[i][0] + 12*group.number].value) || 0;
      y = parseInt(inputs[group.goalsGainedPosition[i][1] + 12*group.number].value) || 0;
      z = parseInt(inputs[group.goalsGainedPosition[i][2] + 12*group.number].value) || 0;
      group.totalGoalsGained[i] = x + y + z;

      x = parseInt(inputs[group.goalsLostPosition[i][0] + 12*group.number].value) || 0;
      y = parseInt(inputs[group.goalsLostPosition[i][1] + 12*group.number].value) || 0;
      z = parseInt(inputs[group.goalsLostPosition[i][2] + 12*group.number].value) || 0;
      group.totalGoalsLost[i] = x + y + z;
    }

    if((home && inputs[actualInputNum + 1].value) || (!home && inputs[actualInputNum - 1].value)) {
      for(let i=0; i<4; i++) {
      let x = 0; let y = 0; let z = 0;
        if(inputs[group.goalsGainedPosition[i][0] + 12*group.number].value && inputs[group.goalsLostPosition[i][0] + 12*group.number].value) {
          if(inputs[group.goalsGainedPosition[i][0] + 12*group.number].value > inputs[group.goalsLostPosition[i][0] + 12*group.number].value) {
            x = 3;
          } else if(inputs[group.goalsGainedPosition[i][0] + 12*group.number].value < inputs[group.goalsLostPosition[i][0] + 12*group.number].value) {
            x = 0;
          } else {
            x = 1;
          }
        }

        if(inputs[group.goalsGainedPosition[i][1] + 12*group.number].value && inputs[group.goalsLostPosition[i][1] + 12*group.number].value) {
          if(inputs[group.goalsGainedPosition[i][1] + 12*group.number].value > inputs[group.goalsLostPosition[i][1] + 12*group.number].value) {
            y = 3;
          } else if(inputs[group.goalsGainedPosition[i][1] + 12*group.number].value < inputs[group.goalsLostPosition[i][1] + 12*group.number].value) {
            y = 0;
          } else {
            y = 1;
          }
        }

        if(inputs[group.goalsGainedPosition[i][2] + 12*group.number].value && inputs[group.goalsLostPosition[i][2] + 12*group.number].value) {
          if(inputs[group.goalsGainedPosition[i][2] + 12*group.number].value > inputs[group.goalsLostPosition[i][2] + 12*group.number].value) {
            z = 3;
          } else if(inputs[group.goalsGainedPosition[i][2] + 12*group.number].value < inputs[group.goalsLostPosition[i][2] + 12*group.number].value) {
            z = 0;
          } else {
            z = 1;
          }
        }

        group.totalPoints[i] = x + y + z;
      }

    }

    /*let allInputsFilled = true;
    for(let i = 0 ; i< 72; i++) {
      if(!inputs[i].value) {
        allInputsFilled = false;
        break;
      }
    }
    if(allInputsFilled) {
      // code goes here
    }*/

    group = this.sortTable(group);

    this.setState({
      [`group${group.name}`]: group
    });
    this.sortThirdPlace();

    (actualInputNum >= inputs.length-1) ? inputs[actualInputNum].focus() : inputs[actualInputNum+1].focus();
  }

  sortTable(group) {
    for(let i = 0; i < group.totalPoints.length; i++) {
      for(let j = 0; j <= group.totalPoints.length - i - 1; j++) {
        if(group.totalPoints[j] < group.totalPoints[j + 1]) {
          group = changePlaces(group, j);
          j = 0
        }
        if(group.totalPoints[j] === group.totalPoints[j + 1] && group.totalGoalsGained[j] < group.totalGoalsGained[j + 1]) {
          group = changePlaces(group, j);
          j = 0
        }
        if(group.totalPoints[j] === group.totalPoints[j + 1] && group.totalGoalsGained[j] === group.totalGoalsGained[j + 1] && group.totalGoalsLost[j] > group.totalGoalsGained[j + 1]) {
          group = changePlaces(group, j);
        }
      }
    }

    function changePlaces(group, j) {
      for(let key in group) {
        if(!(key === 'staticTeam' || key === 'staticFlag' || key === 'number' || key === "name")) {
          [ group[key][j], group[key][j + 1] ] = [ group[key][j + 1], group[key][j] ];
        }
      }
      return group;
    }
    return group;
  }

  sortThirdPlace() {
    let group = this.state.thirdPlaceGroup;
    let arr = [];

    for(let i in this.state.groups) {
      arr.push(this.state.groups[i]);
    }

    for(let i = 0; i<arr.length; i++) {
      for(let groupKey in group) {
        for(let arrKey in arr[i]) {
          if(groupKey === arrKey) {
            group[groupKey][i] = arr[i][arrKey][2];
          }
        }
      }
    }

    group = this.sortTable(group);
    for(let i=0; i<6; i++) {
      for(let grp in this.state.groups) {
        if(this.state.groups[grp].teams.includes(group.teams[i])) {
          group.name[i] = this.state.groups[grp].name;
        }
      }
    }

    this.setState({
      thirdPlaceGroup: group
    });
  }

  determineDraw(_this, event, actualInputNum, bracket) {

    let team1 = event.target.closest("div").children[0];
    let team2 = event.target.closest("div").children[2];

    let match = event.target.closest("div");
    let tooltip = document.createElement("div");
    let text = document.createTextNode("choose team to promote");
    tooltip.append(text);
    tooltip.style = "position: absolute; left: 50%; transform: translate(-50%, 75%); background-color: tomato";
    match.append(tooltip);

    team1.classList.add("borderDraw");
    team2.classList.add("borderDraw");

    team1.addEventListener("click", getWinner);
    team2.addEventListener("click", getWinner);

    function getWinner(e) {
      team1.classList.remove("borderDraw");
      team2.classList.remove("borderDraw");
      tooltip.innerHTML = "";
      if(e.target.nodeName !== "INPUT" || actualInputNum >27) {
        return;
      }

      let winner = [e.target.dataset.team, e.target.dataset.alt, e.target.dataset.image];

      let loser;
      if(team1 !== e.target.closest("label")) {
        loser = [team1.children[1].dataset.team, team1.children[1].dataset.alt, team1.children[1].dataset.image];
      } else {
        loser = [team2.children[0].dataset.team, team2.children[0].dataset.alt, team2.children[0].dataset.image];
      }

      if(winner && actualInputNum < 24) {
        bracket.teams[Math.floor(actualInputNum / 2)] = winner[0];
        bracket.altImage[Math.floor(actualInputNum / 2)] = winner[1];
        bracket.teamImage[Math.floor(actualInputNum / 2)] = winner[2];
        _this.setState({
          bracket: bracket
        });
      }

      if(winner && actualInputNum>=24 && actualInputNum <= 27) {
        bracket.teams[Math.floor(actualInputNum / 2)] = loser[0];
        bracket.altImage[Math.floor(actualInputNum / 2)] = loser[1];
        bracket.teamImage[Math.floor(actualInputNum / 2)] = loser[2];

        bracket.teams[Math.floor(actualInputNum / 2) + 2] = winner[0];
        bracket.altImage[Math.floor(actualInputNum / 2)+ 2] = winner[1];
        bracket.teamImage[Math.floor(actualInputNum / 2)+ 2] = winner[2];
        _this.setState({
          bracket: bracket
        });
      }

      team1.removeEventListener("click", getWinner);
      team2.removeEventListener("click", getWinner);
    }
  }

  handleBracketChange(event, bracket) {
    let inputs = [].slice.call(document.querySelectorAll(".bracket input"));
    let actualInputNum = inputs.indexOf(event.target);
    let value = event.target.value;
    if(!/\d/.test(value)) {
      event.target.value = '';
      event.target.style = "background: tomato";
      return;
    } else {
      event.target.style = "background: default";
      value = parseInt(value);
    }
    let home = (actualInputNum%2 === 0);
    let winner, loser;

    if(home && inputs[actualInputNum + 1].value) {
      if(value > inputs[actualInputNum + 1].value) {
        winner = [event.target.dataset.team, event.target.dataset.alt, event.target.dataset.image];
        loser = [inputs[actualInputNum + 1].dataset.team, inputs[actualInputNum + 1].dataset.alt, inputs[actualInputNum + 1].dataset.image];
      } else if (value < inputs[actualInputNum + 1].value) {
        loser = [event.target.dataset.team, event.target.dataset.alt, event.target.dataset.image];
        winner = [inputs[actualInputNum + 1].dataset.team, inputs[actualInputNum + 1].dataset.alt, inputs[actualInputNum + 1].dataset.image];
      } else {
        this.determineDraw(this, event, actualInputNum, bracket);
      }
    }
     if(!home && inputs[actualInputNum - 1].value) {
       if(value > inputs[actualInputNum - 1].value) {
         winner = [event.target.dataset.team, event.target.dataset.alt, event.target.dataset.image];
         loser = [inputs[actualInputNum - 1].dataset.team, inputs[actualInputNum - 1].dataset.alt, inputs[actualInputNum - 1].dataset.image];
       } else if (value < inputs[actualInputNum - 1].value) {
        loser = [event.target.dataset.team, event.target.dataset.alt, event.target.dataset.image];
        winner = [inputs[actualInputNum - 1].dataset.team, inputs[actualInputNum - 1].dataset.alt, inputs[actualInputNum - 1].dataset.image];
       } else {
         this.determineDraw(this, event, actualInputNum, bracket);
       }
     }

     if(winner && actualInputNum < 24) {
       bracket.teams[Math.floor(actualInputNum / 2)] = winner[0];
       bracket.altImage[Math.floor(actualInputNum / 2)] = winner[1];
       bracket.teamImage[Math.floor(actualInputNum / 2)] = winner[2];
       this.setState({
         bracket: bracket
       });
     }

     if(winner && actualInputNum>=24 && actualInputNum <= 27) {
       bracket.teams[Math.floor(actualInputNum / 2)] = loser[0];
       bracket.altImage[Math.floor(actualInputNum / 2)] = loser[1];
       bracket.teamImage[Math.floor(actualInputNum / 2)] = loser[2];

       bracket.teams[Math.floor(actualInputNum / 2) + 2] = winner[0];
       bracket.altImage[Math.floor(actualInputNum / 2)+ 2] = winner[1];
       bracket.teamImage[Math.floor(actualInputNum / 2)+ 2] = winner[2];
       this.setState({
         bracket: bracket
       });
     }
    (actualInputNum >= inputs.length-1) ? inputs[actualInputNum].focus() : inputs[actualInputNum+1].focus();
  }

  render() {
    return(
      <div className="container-fluid row">
        <Group group={this.state.groups.groupA} handleChange= {(e) => this.handleChange(e, this.state.groups.groupA)}/>
        <Group group={this.state.groups.groupB} handleChange= {(e) => this.handleChange(e, this.state.groups.groupB)}/>
        <Group group={this.state.groups.groupC} handleChange= {(e) => this.handleChange(e, this.state.groups.groupC)}/>
        <Group group={this.state.groups.groupD} handleChange= {(e) => this.handleChange(e, this.state.groups.groupD)}/>
        <Group group={this.state.groups.groupE} handleChange= {(e) => this.handleChange(e, this.state.groups.groupE)}/>
        <Group group={this.state.groups.groupF} handleChange= {(e) => this.handleChange(e, this.state.groups.groupF)}/>
        <ThirdPlaceRanking teams={this.state.thirdPlaceGroup}/>
        <Bracket groupTeams={this.state.groups} thirdTeams={this.state.thirdPlaceGroup} bracket={this.state.bracket} handleChange={(e) => this.handleBracketChange(e, this.state.bracket)}/>
      </div>
    );
  }
}

export default TestTipster;
