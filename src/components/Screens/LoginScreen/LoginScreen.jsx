import React, { useState } from 'react';
import styles from './LoginScreen.module.scss';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginScreen_background}>

        <div className={styles.loginScreen_logo}>
          <img className="logo" src="https://i.imgur.com/gWXmuR5.png" alt="Pixema Light Logo" />
        </div>

        <button onClick={() => setSignIn(true)}
        className={styles.loginScreen_button}>
          Sign In
        </button>

        <div className={styles.loginScreen_gradient}>
        </div>

        <div className={styles.loginScreen_body}>
            {signIn ? (
                <SignUpScreen/>
            ) :  (
                <>
                <h1>Unlimited films and more.</h1>
                <h2>Watch anywhere.</h2>
                <h3>Ready to watch? Enter your email to create your account.</h3>
            
            <div className={styles.loginScreen_input}>
            <form>
                <input type="email"
                placeholder='Email Address' />
                <button onClick={() => setSignIn(true)}
                className={styles.loginScreen_GetStarted}>
                    GET STARTED
                </button>
            </form>
        </div>
            
            
            </>
        )}
            
        </div>

        

      </div>

    </div>
  );
}

export default LoginScreen;
