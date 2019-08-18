import ContainerStyle from '../components/styles/ContainerStyle';
import Messaging from '../components/Messaging';

const Home = props => (
  <ContainerStyle>
    <Messaging sender={'Laura'} />
    <Messaging sender={'Rob'} />
  </ContainerStyle>
);

export default Home;
