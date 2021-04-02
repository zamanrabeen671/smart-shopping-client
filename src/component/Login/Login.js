import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSigned: false,
        name: '',
        email: '',
        password: '',
        success: '',
        error: '',
        photo: ''

    })
    const handleGoogleSign = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const user = result.user;
                const { displayName, photoURL, email } = user;
                const signedInUser = {
                    isSigned: true,
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }
    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            const signedOut = {
                isSigned: false,
                name: '',
                photo: null,
                email: ''
            }
            setUser(signedOut);
            setLoggedInUser(signedOut);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className="login-container container">
            <img src={loggedInUser.photo} alt="" className="user-photo" />
            <h2>Welcome <span style={{ color: 'green' }}>{loggedInUser.name}</span> to Our Website</h2>
            <h3>Your Mail: <span style={{ color: 'tomato' }}>{loggedInUser.email}</span></h3>
            {
                loggedInUser.isSigned ? <button className="btn btn-danger" onClick={handleLogOut}>Log Out</button> :
                    <button onClick={handleGoogleSign} className="btn btn-success"><FontAwesomeIcon icon={faGoogle} /> Sign up with Google</button>
            }

        </div>
    );
};

export default Login;