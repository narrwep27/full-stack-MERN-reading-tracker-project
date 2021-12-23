import React from 'react';
import Nav from '../components/Nav';

export default function Home(props) {
    const goToSignup = () => {
        props.history.push('/signup');
    };
    const goToLogin = () => {
        props.history.push('/login');
    };

    return (
        <div>
            <Nav />
            <h1>Welcome to the Book Keep!</h1>
            <button className='homeBtn' onClick={goToSignup}>Sign up!</button>
            <button className='homeBtn' onClick={goToLogin}>Login</button>
        </div>
    );
};