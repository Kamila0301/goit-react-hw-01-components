import {
  SectionFriend,
  ListItem,
  ListFriend,
  Status,
  Photo,
  Name,
} from './FriendList.styled';

export const Friendlist = ({ friends }) => {
  return (
    <SectionFriend>
      <ListItem>
        {friends.map(el => {
          return (
            <ListFriend key={el.id}>
              <Status status={el.isOnline} />
              <Photo src={el.avatar} alt={el.name} width="48" />
              <Name>{el.name}</Name>
            </ListFriend>
          );
        })}
      </ListItem>
    </SectionFriend>
  );
};
