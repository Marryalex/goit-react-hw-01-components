import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

function friendOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles.friendlist}>
        {friends.map(friend => (
          <li className={styles.item} key={friend.id}>
            <span
              className={styles.status}
              style={{ color: friendOnline(friend.isOnline) }}
            >
              ●
            </span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.exact({
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
id: PropTypes.string.isRequired
})
    )
};
export default FriendList;