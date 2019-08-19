import HeaderMessageStyle from '../components/styles/HeaderMessageStyle';
import Avatar from '../components/Avatar';

const HeaderMessage = props => (
  <HeaderMessageStyle>
    <Avatar avatar={props.user.avatar} />
    <span className="headerName">{props.user.name}</span>
  </HeaderMessageStyle>
);

export default HeaderMessage;
