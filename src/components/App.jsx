import { Profile } from './profile/profile';
import { Statistics } from './statysyics/statistics';
import data from './data/data.json';
import friends from './data/friends.json';
import { FriendList } from './friends/friends';
import transactions from './data/transactions.json';
import { TransactionHistory } from './transactions/transactions';
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};

export default App;