import React, { Component } from 'react';
import New from '../../image/new.png';
import MeetUpForm from './MeetUpForm';

class NewGroup extends Component {
  render() {
    return (
      <div className="NewGroup">
        <MeetUpForm hostId={this.props.hostId}/>
      </div>
    );
  }
}

export default NewGroup;
