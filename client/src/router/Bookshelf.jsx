import { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from '../components/UserNav';
import BookItem from '../components/BookItem';
import { BASE_URL } from '../globals';

export default function Bookshelf(props) {
    const [userBooks, setUserBooks] = useState([]);

    const getUserBooks = async () => {
        let response = await axios.get(`${BASE_URL}${props.match.params.username}/bookshelf`);
        setUserBooks(response.data.books);
    };
    const deleteBook = async (param) => {
        let newBookIds = userBooks.map((book) => {return book._id}).filter((bookId) => {return bookId !== param._id});
        let updatedUser = await axios.put(`${BASE_URL}${props.match.params.username}/adduserbook`, 
            {
                books: [...newBookIds]
            }
        );
        setUserBooks(updatedUser.data.books);
        await axios.delete(`${BASE_URL}${props.match.params.username}/bookshelf/deletebook/${param._id}`);
    };

    useEffect(() => {
        getUserBooks();
    }, []);

    return (
        <div>
            <UserNav username={props.match.params.username}/>
            <h1>{props.match.params.username}'s Bookshelf:</h1>
            {
                userBooks.map((book) => (
                    <BookItem 
                        key={book._id}
                        username={props.match.params.username} 
                        book={book}
                        deleteBook={() => deleteBook(book)}
                    />
                ))
            }
        </div>
    );
};