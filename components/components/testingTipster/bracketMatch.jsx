import React from 'react';

class BracketMatch extends React.Component {

  render() {
    let team1 = this.props.team1.teams[this.props.place1];
    let image1 = this.props.team1.teamImage[this.props.place1];
    let alt1 = this.props.team1.altImage[this.props.place1];

    let team2 = this.props.team2.teams[this.props.place2];
    let image2 = this.props.team2.teamImage[this.props.place2];
    let alt2 = this.props.team2.altImage[this.props.place2];
    return(
      <div className="matchInGroup">
        <label style={{justifySelf: "end"}}>
          {team1}
          <img src={image1} alt={alt1} />
          <input data-team={team1} data-image={image1} data-alt={alt1} type="text" maxLength="1" onChange={this.props.handleChange}/>
        </label>

        <span style={{textAlign: "center"}}>:</span>

        <label style={{justifySelf: "start"}}>
          <input data-team={team2} data-image={image2} data-alt={alt2}  type="text" maxLength="1" onChange={this.props.handleChange}/>
          <img src={image2} alt={alt2} />
          {team2}
        </label>
      </div>
    );
  }
}

export default BracketMatch;
