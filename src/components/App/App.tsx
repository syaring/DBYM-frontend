import axios from 'axios';
import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import UserPage from '../UserPage/UserPage'
import MeetUpForm from 'src/components//MeetUpForm/MeetUpForm'

import {
  AppStateType as StateType,
  AppPropsType as PropsType,
} from 'src/types/types'

import './App.css'

class App extends React.Component<PropsType, StateType> {

  componentDidMount () {
    this.checkLoginStatus();
  }

  setUserInfo (user) {
    this.setState({
      isLoggedIn: true,
      userId: '',
    });
  }

  checkLoginStatus () {
  }



  render () {
    return(
      <div className="App">
        <div className="App-contents">
          <Switch>
          <Route exact path='/'
            render={()=>{
              return(
                  <Redirect to={`/${this.state.fbId}`} />
              )
            }}
          />
          {
            <Route exact path={`/:uid`}
              render={(props)=>{
                return(
                  this.state.isLoggedIn &&
                  <div>
                    <UserPage userId={this.state.fbId} userName={this.state.userName} />
                  </div>
                )
              }}
            />
          }

            <Route exact path={`/:uid/new`}
              render={props => {
                return (
                  this.state.isLoggedIn &&
                  <div>
                    <MeetUpForm hostId={props.match.params.uid} hostName={this.state.userName}/>
                  </div>
                );
              }}
            />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
