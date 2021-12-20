import { useEffect, useState } from "react";
import axios from "axios";

export default function BookItem(props) {
    const [book, setBook] = useState({});

    const getBook = async () => {
        let response = await axios.get(`http://localhost:3001/${props.user}/bookshelf/${props.bookId}`);
        setBook(response.data[0]);
    };
    const deleteBook = async () => {
        await axios.delete(`http://localhost:3001/${props.user}/bookshelf/deletebook/${props.bookId}`);
        let response = await axios.get(`http://localhost:3001/existinguser/${props.user}`);
        let newBooksArr = response.data[0].books.filter((param) => { return param !== props.bookId});
        console.log(newBooksArr);
        await axios.put(`http://localhost:3001/${props.user}/adduserbook`, 
            {
                books: [...newBooksArr]
            }
        );
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