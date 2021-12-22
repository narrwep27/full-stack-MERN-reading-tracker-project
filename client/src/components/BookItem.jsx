import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";

export default function BookItem(props) {
    const [book, setBook] = useState({});
    const [newStat, setStat] = useState('');

    const getBook = async () => {
        let response = await axios.get(`${BASE_URL}${props.username}/bookshelf/${props.bookId}`);
        setBook(response.data);
    };
    const changeStatus = async () => {
        let book = await axios.put(`${BASE_URL}${props.username}/bookshelf/editbook/${props.bookId}`, 
            {
                readingStatus: newStat
            }
        );
        setBook(book.data);
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div className="bookItem">
            <img src={book.imageUrl} />
            <div>
                <h3>{book.title} ({book.yearPublished})</h3>
                <p><em>{book.author}</em></p>
                <p className="readStat">{book.readingStatus}</p>
            </div>
            <div>
                <select onChange={(e) => setStat(e.target.value)}>
                    <option value=''>--New status--</option>
                    <option value='Want to Read'>Want to Read</option>
                    <option value='Currently Reading'>Currently Reading</option>
                    <option value='Finished Reading'>Finished Reading</option>
                </select>
                <button onClick={changeStatus}>Set Status</button>
            </div>
            <div>
                <button onClick={props.deleteBook}>Delete</button>
            </div>
        </div>
    );
};