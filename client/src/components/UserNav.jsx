import React from 'react'
import { Link } from 'react-router-dom';

export default function UserNav() {
    return (
        <div className='userNavBar'>
            <Link to={'/newbook'} className='navLink'>New Book</Link>
            <Link to={'/:username/bookshelf'} className='navLink'>Bookshelf</Link>
            <Link to={'/'} className='logout'>Logout</Link>
        </div>
    )
}
