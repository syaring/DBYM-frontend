import * as React from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import { Route, Switch, Redirect } from 'react-router-dom'
import * as _ from 'lodash'

import HomePage from 'src/components/Pages/HomePage'
// import UserPage from 'components/UserPage/UserPage'
// import MeetUpForm from 'components/MeetUpForm/MeetUpForm'

import {
  AppPropsType as Props,
  AppStateType as State,
  UserType,
} from 'src/types/types'

import USERS from 'src/data/tmpUserData'

import './App.css'

class AppStore {
  @observable user: UserType = {}
  @observable id = -1
  get getCurrentUser () {
    return this.user;
  }
  setCurrentUser (id: number) {
    this.user = _.find(USERS, user => user._id === id) || {}
  }
}

class App extends React.Component<Props, State> {

  state = {
    isLoggedIn: false
  }

   componentDidMount () {
    this.checkLoginStatus()
  }

  // setUserInfo () {
  // }

  checkLoginStatus () {

  }

  render () {
    return(
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        {/* <div className="App-contents">
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
          </div> */}
      </div>
    )
  }
}

export default App
