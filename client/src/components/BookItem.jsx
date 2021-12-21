import { useEffect, useState } from "react";
import axios from "axios";

export default function BookItem(props) {
    const [book, setBook] = useState({});

    const getBook = async () => {
        let response = await axios.get(`http://localhost:3001/${props.username}/bookshelf/${props.bookId}`);
        setBook(response.data);
    };
    const deleteBook = async () => {
        await axios.delete(`http://localhost:3001/${props.username}/bookshelf/deletebook/${props.bookId}`);
        let newBooksArr = props.userBooks.filter((param) => { return param !== props.bookId});
        await axios.put(`http://localhost:3001/${props.username}/adduserbook`, 
            {
                books: [...newBooksArr]
            }
        );
        props.setUserBooks(newBooksArr);
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div className="bookItem">
            <div>
                <h3>{book.title}</h3>
                <p><em>{book.author}</em></p>
                <p>{book.overview}</p>
                <p className="readStat">{book.readingStatus}</p>
            </div>
            <div>
                <button onClick={deleteBook}>Delete</button>
            </div>
        </div>
    );
};