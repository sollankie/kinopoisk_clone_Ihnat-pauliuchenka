import React from 'react';
import styles from './Banner.module.scss'; 

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header
      className={styles.banner} 
      style={{
        backgroundImage: `url('https://marcos.kirsch.mx/wp-content/uploads/2013/01/cropped-cropped-cropped-black-banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
        <div className={styles.banner_content}>
            <h1 className={styles.banner_title}>Movie Name</h1>
            <div className={styles.banner_buttons}>
                <button className={styles.banner_button}>Play</button>
                <button className={styles.banner_button}>My List</button>
            </div>
            <h1 className={styles.banner_description}>
                {truncate(`Test descxirption`, 150)}
            </h1>
        </div>

        <div className={styles.banner_fadeBottom} />
    </header>
  );
}

export default Banner;

