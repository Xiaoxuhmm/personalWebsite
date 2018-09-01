import React, {Component} from 'react';
import {
  UserListWrapper,
  NameCardWrapper,
  NameCardText,
  NameCardAvatar
} from '../style';
import {theme} from '../../../components/globals';
import Avator from '../icon.jpg';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      userNames : ['user1', 'user2', 'user3'],
    }
  }

  render(){
    const users = this.state.userNames.map(userName =>
      <NameCardWrapper key={userName}>
        <NameCardAvatar src={Avator} alt={"Avator"}/>
        <NameCardText theme={theme}>
          {userName}
        </NameCardText>
      </NameCardWrapper>
    )
    return (
      <div>
      <UserListWrapper>
        {users}
      </UserListWrapper>
      </div>
    )
  }
}

export default UserList;
