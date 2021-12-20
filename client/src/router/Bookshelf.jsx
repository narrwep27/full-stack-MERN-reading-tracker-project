import { useEffect } from 'react';
import axios from 'axios';
import UserNav from '../components/UserNav';

export default function Bookshelf(props) {

    return (
        <div>
            <UserNav username={props.match.params.username}/>
            <h1>Your Bookshelf:</h1>
        </div>
    )
}
