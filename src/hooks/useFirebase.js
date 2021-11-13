import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import {
    getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
    signOut, updateProfile, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "firebase/auth"
import axios from 'axios';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            setIsLoading(true);
            if (user) {
                setUser(user);
                fetch(`https://arcane-plains-11484.herokuapp.com/users/${user.email}`)
                    .then(res => res.json())
                    .then(data => setAdmin(data.admin))
                    .then(() => setIsLoading(false))
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

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        axios({
            method: method,
            url: 'https://arcane-plains-11484.herokuapp.com/users',
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
        setError
    };
};

export default useFirebase;