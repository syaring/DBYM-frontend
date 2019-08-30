import * as axios from 'axios';
import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import UserPage from '../UserPage/UserPage';
import MeetUpForm from '../MeetUpForm/MeetUpForm';

// import { StateType, PropsType } from './AppType';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      fbId: '100139207583564',
      userName: '',
      userEmail: '',
      friendList: '',
      uesrId:''
    };
  }

  setUserInfo(user){
    this.setState({
      isLoggedIn: true,
      fbId: user.UserFbId,
      userName: user.UserName,
      userEmail: user.UserEmail,
      friendList: user.friendList,
      uesrId: user.UserId
    });

  }

  checkLoginStatus() {
    axios
      .get(`http://localhost:8087/userInfo/${this.state.fbId}`)
      .then(({ data }) => {
        if(data[0]) {
          const user = data[0];

          this.setState({
            isLoggedIn: true,
            // fbId: response.authResponse.userID,
            userName: user.UserName,
            userEmail: user.UserEmail,
            friendList: user.UserFriends,
            userId: user._id
          });
        }
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
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
