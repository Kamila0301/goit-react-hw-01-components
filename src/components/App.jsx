import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import dataUsers from '../data/data.json';
import { Friendlist } from './FriendList/FriendList';
import friendUsers from '../data/friends.json';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dataUsers} />
      <Friendlist friends={friendUsers} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
