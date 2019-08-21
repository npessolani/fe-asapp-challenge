import React, { Component } from 'react';
import ContainerStyle from '../components/styles/ContainerStyle';
import Messaging from '../components/Messaging';
import users from '../static/mockUsers.json';

class Home extends Component {
  render() {
    const { user } = this.props;
    return (
      <ContainerStyle>
        {users.map((user, key) => (
          <Messaging user={user} key={key} />
        ))}
      </ContainerStyle>
    );
  }
}

export default Home;
