import React, { useRef } from 'react';
import styles from './SingUpScreen.module.scss';
import { auth } from '../../Firebase/firebase';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    const register = (e) => {
        e.preventDefault();


        auth
            .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

        )
        .then((authUser) => {
            console.log(authUser)
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();
    };





  return (
    <div className={styles.signUpScreen}>
      <form className={styles.form}>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
            <span className={styles.signUpScreen_grey}>New to Pixema? </span> 
            <span className={styles.signUpScreen_link} onClick={register}>
                Sign Up Now. 
                </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
