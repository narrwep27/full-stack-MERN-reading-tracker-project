import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='navBar'>
            <Link to={'/'} className='navLink'>Home</Link>
            <Link to={'/about'} className='navLink'>About</Link>
        </div>
    )
}
