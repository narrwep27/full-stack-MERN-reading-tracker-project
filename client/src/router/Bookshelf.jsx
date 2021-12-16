import { useEffect } from 'react';
import axios from 'axios';
import UserNav from '../components/UserNav';

export default function Bookshelf() {
    return (
        <div>
            <UserNav />
            <h1>Your Bookshelf:</h1>
        </div>
    )
}
