import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='navBar'>
            <Link to={'/signup'} className='navLink'>Sign up</Link>
            <Link to={'/login'} className='navLink'>Login</Link>
            <Link to={'/about'} className='navLink'>About</Link>
        </div>
    )
}
