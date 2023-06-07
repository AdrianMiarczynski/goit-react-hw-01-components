import { Profile } from './profile/profile';
import { Statistics } from './statysyics/statistics';
import data from './data/data.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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
    </div>
  );
};
