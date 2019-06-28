import React, { Component } from 'react';
import GroupName from './groupName.jsx';
import MatchInGroup from './matchInGroup';

class Group extends Component {
  createRows = () => {
    let rows = [];
    let props = this.props.group;
    let styleRow;
    for(let i=0; i<4; i++) {
      switch (i) {
        case 0: styleRow="table-success";
          break;
        case 1: styleRow="table-success";
          break;
        case 2: styleRow="table-info";
          break;
        default: styleRow="table-danger";
      }
      let team = <td><img src={props.teamImage[i]} alt={props.altImage[i]} />{props.teams[i]}</td>
      let goalsg = <td>{props.totalGoalsGained[i]}</td>
      let goalsl = <td>{props.totalGoalsLost[i]}</td>
      let points = <td>{props.totalPoints[i]}</td>
      rows.push(<tr className={styleRow} key={`${props.name}_${i}`}>{team}{goalsg}{goalsl}{points}</tr>)
    }
    return rows;
  }

  render() {
    let props = this.props.group;
    return(
        <div className="col-md-6">
          <table className='table table-hover'>
            <caption style={{captionSide: 'top'}}>
              <GroupName group={props.name}/>
            </caption>
            <thead>
              <tr>
                <th style={{width: "52%"}}>Country</th>
                <th style={{width: "16%"}}>Goals Gained</th>
                <th style={{width: "16%"}}>Goals Lost</th>
                <th style={{width: "16%"}}>Points</th>
              </tr>
            </thead>
            <tbody>
              {this.createRows()}
            </tbody>
          </table>
          <div>
            <MatchInGroup group={this.props.group} handleChange={this.props.handleChange} home='0' away='3' />
            <MatchInGroup group={this.props.group} handleChange={this.props.handleChange} home='1' away='2' />
            <MatchInGroup group={this.props.group} handleChange={this.props.handleChange} home='2' away='3' />
            <MatchInGroup group={this.props.group} handleChange={this.props.handleChange} home='0' away='1' />
            <MatchInGroup group={this.props.group} handleChange={this.props.handleChange} home='2' away='0' />
            <MatchInGroup group={this.props.group} handleChange={this.props.handleChange} home='3' away='1' />
          </div>
        </div>

    );
  }
}

export default Group;
