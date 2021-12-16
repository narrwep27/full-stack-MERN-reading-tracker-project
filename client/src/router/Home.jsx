import React from 'react';
import Nav from '../components/Nav';

export default function Home(props) {
    const goToSignup = () => {
        props.history.push('/signup');
    };
    const goToLogin = () => {
        props.history.push('/login');
    };

    console.log(props);

    return (
        <div>
            <Nav />
            <h1>This is the home page</h1>
            <button onClick={goToSignup}>Sign up!</button>
            <button onClick={goToLogin}>Login</button>
        </div>
    );
};