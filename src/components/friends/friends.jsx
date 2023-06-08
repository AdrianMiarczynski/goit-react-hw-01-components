import './friends.css';
import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" key={id}>
            {isOnline ? (
              <span className="status-online"></span>
            ) : (
              <span className="status-offline"></span>
            )}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  firends: PropTypes.array,
};
