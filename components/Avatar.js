import AvatarStyle from '../components/styles/AvatarStyle';

const Avatar = props => (
  <AvatarStyle>
    <img className="avatarImage" src={props.avatar} alt="" width="32" />
  </AvatarStyle>
);

export default Avatar;
