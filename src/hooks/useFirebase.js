import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import {
    getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
    signOut, updateProfile, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, getIdToken
} from "firebase/auth"
import axios from 'axios';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // const signInUsingGoogle = () => {
    //     setIsLoading(true);

    //     return signInWithPopup(auth, googleProvider);
    // }

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, user.photoURL, 'PATCH');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            setIsLoading(true);
            if (user) {
                setUser(user);
                fetch(`http://localhost:5000/api/users/${user.email}`)
                    .then(res => res.json())
                    .then(data => setAdmin(data.admin))
                    .then(() => setIsLoading(false))
                getIdToken(user)
                    .then(idToken => {
                        // console.log(idToken)
                        setToken(idToken);
                    })
            }
            else {
                setUser({})
                setIsLoading(false);
            }
            // setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
    }

    const processLogin = (email, password) => {
        setIsLoading(true);
        return (signInWithEmailAndPassword(auth, email, password));
    }

    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                saveUser(email, name, 'post');
                logOut();
                setError('');
                verifyEmail();
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setUserName(name);
            })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    // set Admin
    useEffect(() => {

    }, [user.email])

    const saveUser = (email, name, photo = null, method) => {
        const user = { email, name, photo };
        axios({
            method: method,
            url: 'http://localhost:5000/api/users',
            data: user
        });
    }

    return {
        user,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        processLogin,
        saveUser,
        logOut,
        admin,
        registerNewUser,
        error,
        setError,
        token
    };
};

export default useFirebase;