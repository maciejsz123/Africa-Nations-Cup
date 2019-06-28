import React, { Component } from 'react';
import GroupName from './groupName';

class ThirdPlaceRanking extends Component {

  createRows = () => {
    let group = this.props.teams;
    let rows = [];
    let styleRow;

    for(let i=0; i<6; i++) {
      switch (i) {
        case 0: styleRow="table-success";
          break;
        case 1: styleRow="table-success";
          break;
        case 2: styleRow="table-success";
          break;
        case 3: styleRow="table-success";
          break;
        case 4: styleRow="table-danger";
          break;
        case 5: styleRow="table-danger";
          break;
        default: styleRow="table-danger";
      }
      let groupName = <td>{group.name[i]}</td>
      let team = <td><img src={group.teamImage[i]} alt={group.altImage[i]}/>{group.teams[i]}</td>
      let goalsg = <td>{group.totalGoalsGained[i]}</td>
      let goalsl = <td>{group.totalGoalsLost[i]}</td>
      let points = <td>{group.totalPoints[i]}</td>
      rows.push(<tr className={styleRow} key={`${group.name}_${i}`}>{groupName}{team}{goalsg}{goalsl}{points}</tr>)
    }

    return rows;
  }


  render() {
    return(
      <div className="container text-center">
        <table className='table table-hover'>
          <caption style={{captionSide: 'top'}}>
            <GroupName group="Third Place Ranking"/>
          </caption>
          <thead>
            <tr>
              <th style={{width: "8%"}}>Group</th>
              <th style={{width: "44%"}}>Country</th>
              <th style={{width: "16%"}}>Goals Gained</th>
              <th style={{width: "16%"}}>Goals Lost</th>
              <th style={{width: "16%"}}>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.createRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ThirdPlaceRanking;
