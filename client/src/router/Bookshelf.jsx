import { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from '../components/UserNav';
import BookItem from '../components/BookItem';

export default function Bookshelf(props) {
    const [userBooks, setUserBooks] = useState([]);

    const getUser = async () => {
        let response = await axios.get(`http://localhost:3001/existinguser/${props.match.params.username}`);
        setUserBooks(response.data.books);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <UserNav username={props.match.params.username}/>
            <h1>{props.match.params.username}'s Bookshelf:</h1>
            {
                userBooks.map((param, index) => (
                    <BookItem 
                        key={index}
                        username={props.match.params.username} 
                        bookId={param}
                        userBooks={userBooks}
                        setUserBooks={setUserBooks} />
                ))
            }
        </div>
    );
};