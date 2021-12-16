import React from 'react'
import { Link } from 'react-router-dom';

export default function UserNav() {
    return (
        <div className='userNav'>
            <Link className='navlink'>New Book</Link>
            <Link className='navlink'>Bookshelf</Link>
        </div>
    )
}
