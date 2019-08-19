import ContainerStyle from '../components/styles/ContainerStyle';
import Messaging from '../components/Messaging';
import Users from '../static/mockUsers.json';

const Home = props => (
  <ContainerStyle>
    {Users.map((user, key) => (
      <Messaging user={user} key={key} />
    ))}
  </ContainerStyle>
);

export default Home;
