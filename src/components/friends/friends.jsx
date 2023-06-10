import css from './friends.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css['friend-item']} key={id}>
            {isOnline ? (
              <span className={css['status-online']}></span>
            ) : (
              <span className={css['status-offline']}></span>
            )}
            <img
              className={css['friend-avatar']}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css['friend-name']}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  firends: PropTypes.array,
};
