import { useEffect, useState } from "react";
import axios from "axios";

export default function BookItem(props) {
    const [book, setBook] = useState({});

    const getBook = async () => {
        let response = await axios.get(`http://localhost:3001/${props.id}/bookshelf`);
        setBook(response.data[0]);
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div className="bookItem">
            <h3>{book.title}</h3>
            <p><em>{book.author}</em></p>
            <p>{book.overview}</p>
            <p className="readStat">{book.readingStatus}</p>
        </div>
    );
};