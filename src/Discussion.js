import React, { Component } from "react";
import discussionImage from './Images/discussion.png';
import discussion2Image from './Images/discussion2.png';
 
class Discussion extends Component {
  render() {
    return (
      <div>
        <img src={discussionImage} atl="discussion" width="450" height="300" />
        <ol>
          <li>Activities</li>
          <li>Artists</li>
          <li>Childcare</li>
          <li>Classes</li>
          <li>Events</li>
        </ol>
        <img src={discussion2Image} atl="discussion2" width="450" height="300" align="right"/>
      </div>
    );
  }
}
 
export default Discussion;