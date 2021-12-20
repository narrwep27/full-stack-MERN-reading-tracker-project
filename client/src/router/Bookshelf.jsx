import { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from '../components/UserNav';
import BookItem from '../components/BookItem';

export default function Bookshelf(props) {
    const [user, setUser] = useState(undefined);
    
    useEffect( async () => {
        const getUser = async () => {
            let currentUser = await axios.get(`http://localhost:3001/existinguser/${props.match.params.username}`);
            setUser(currentUser);
        };
        getUser();
        console.log(user.data[0].books);
    }, []);

    return (
        <div>
            <UserNav username={props.match.params.username}/>
            <h1>Your Bookshelf:</h1>
            {
                user.data[0].books.map((param) => (
                    <BookItem id={param} />
                ))
            }
        </div>
    )
}
