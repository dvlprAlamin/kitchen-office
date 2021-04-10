import { createContext, useContext, useEffect, useState } from "react";
import firebase from 'firebase/app'
import { auth } from "../firebase";
const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
}

export const AuthProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [loading, setLoading] = useState(true);
    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const logOut = () => {
        return auth.signOut();
    }

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return auth.signInWithPopup(provider)
    }
    const facebookSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return auth.signInWithPopup(provider)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoggedInUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, []);

    // const createIdToken = ()=> {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //         sessionStorage.setItem('token', idToken)
    //         console.log(idToken);
    //       }).catch(function(error) {
    //         // Handle error
    //       });
    // }

    const value = {
        loggedInUser,
        setLoggedInUser,
        // createIdToken,
        signUp,
        login,
        googleSignIn,
        facebookSignIn,
        logOut
    }
    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}