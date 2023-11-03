import {
  Card,
  MainInfo,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  List,
  Span,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <MainInfo>
        <Avatar src={avatar} alt={username} />
        <UserName>{username} </UserName>
        <Tag> {tag} </Tag>
        <Location> {location}</Location>
      </MainInfo>

      <Stats>
        <List>
          <Span>Followers</Span>
          <Quantity>{followers}</Quantity>
        </List>
        <List>
          <Span>Views</Span>
          <Quantity>{views}</Quantity>
        </List>
        <List>
          <Span>Likes</Span>
          <Quantity>{likes}</Quantity>
        </List>
      </Stats>
    </Card>
  );
};
