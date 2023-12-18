import React from 'react';
import Nav from '../../Nav/Nav.tsx';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { auth } from '../../Firebase/firebase.js';
import styles from './ProfileScreen.module.scss';

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.profileScreen}>
      <Nav />
      <div className={styles.profileScreen_body}>
        <h1>Edit Profile</h1>
        <div className={styles.profileScreen_info}>
          <img
            src="https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"
            alt=""
          />
          <div className={styles.profileScreen_details}>
            <h2>{user.email}</h2>
          
          <div className={styles.profileScreen_favorites}>
            <h3>Your Favorites</h3>
            {/* FAVORITES FILMS ROW */}
            <button onClick={() => auth.signOut()} 
            className={styles.profileScreen_signOut}>
              Sign Out
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
