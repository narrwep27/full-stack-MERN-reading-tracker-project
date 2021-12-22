import { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from '../components/UserNav';
import BookItem from '../components/BookItem';
import { BASE_URL } from '../globals';

export default function Bookshelf(props) {
    const [userBooks, setUserBooks] = useState([]);

    const getUser = async () => {
        let response = await axios.get(`${BASE_URL}existinguser/${props.match.params.username}`);
        setUserBooks(response.data.books);
    };
    const deleteBook = async (param) => {
        let deletedBook = await axios.delete(`${BASE_URL}${props.match.params.username}/bookshelf/deletebook/${param}`);
        let newBooksArr = userBooks.filter((item) => { return item !== deletedBook.data.value._id});
        await axios.put(`${BASE_URL}${props.match.params.username}/adduserbook`, 
            {
                books: [...newBooksArr]
            }
        );
        setUserBooks(newBooksArr);
    };

    useEffect(() => {
        getUser();
    }, [userBooks]);

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
                        deleteBook={() => deleteBook(param)}
                    />
                ))
            }
        </div>
    );
};