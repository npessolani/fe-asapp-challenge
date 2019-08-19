import ContainerStyle from '../components/styles/ContainerStyle';
import Messaging from '../components/Messaging';

const Users = [
  {
    name: 'Laura',
    avatar: 'http://localhost:3000/static/laura.jpg',
    rol: 'sender',
    email: 'laura@gmail.com'
  },
  {
    name: 'Rob',
    avatar: 'static/rob.jpg',
    rol: 'receiver',
    email: 'rob@gmail.com'
  }
];

const Home = props => (
  <ContainerStyle>
    {Users.map((user, key) => (
      <Messaging user={user} key={key} />
    ))}
  </ContainerStyle>
);

export default Home;
