import React,{ Component } from 'react';

class MatchInGroup extends Component {

  render() {
    let props = this.props.group;
    return(
      <div className="matchInGroup">

        <label style={{justifySelf: "end"}}>
          {props.staticTeam[this.props.home]}
          <img src={props.staticFlag[this.props.home]} alt={props.altImage[this.props.home]} />
          <input type="text" maxLength="1" onChange={this.props.handleChange}/>
        </label>

        <span style={{textAlign: "center"}}>:</span>

        <label>
          <input type="text" maxLength="1" onChange={this.props.handleChange}/>
          <img src={props.staticFlag[this.props.away]} alt={props.altImage[this.props.away]} />
          {props.staticTeam[this.props.away]}
        </label>

      </div>
    );
  }
}

export default MatchInGroup;
