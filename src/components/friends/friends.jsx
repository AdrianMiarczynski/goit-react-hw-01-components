import './friends.css';
import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="friend-item" key={id}>
            {isOnline ? (
              <span className="status-online"></span>
            ) : (
              <span className="status-offline"></span>
            )}
            <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
            <p className="friend-name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  firends: PropTypes.array
};
