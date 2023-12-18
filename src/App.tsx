import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import MovieScreen from './components/Screens/MovieScreen/MovieScreen';
import ProfileScreen from './components/Screens/ProfileScreen/ProfileScreen';
import './App.scss';
import LoginScreen from './components/Screens/LoginScreen/LoginScreen';
import { auth } from './components/Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {   
                console.log(userAuth);
                dispatch(login({
                   uid: userAuth.uid,
                   email: userAuth.email,
                })
                );

            
            } else {
                //logged out
                dispatch(logout());
            }
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <Router>
            {!user ? (
                <LoginScreen />
            ) : (
            <Routes>
                <Route path="/profile" element={<ProfileScreen/>} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/movie/:movieId" element={<MovieScreen />} />
                
            </Routes>
            )}
        </Router>
    );
}

export default App;
