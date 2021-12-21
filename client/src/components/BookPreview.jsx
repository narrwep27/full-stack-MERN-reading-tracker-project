import { useState } from "react";
import axios from "axios";

export default function BookPreview(props) {
    const [readStat, setReadStat] = useState('');
    const [statText, setStatText] = useState('');
    
    const handleSubmit = async () => {
        if (readStat) {
            let user = await axios.get(`http://localhost:3001/existinguser/${props.username}`);
            let book = await axios.post(`http://localhost:3001/${props.username}/addbook`, 
                {
                    title: props.title,
                    author: props.author,
                    publisher: props.publisher,
                    yearPublished: props.pubYear,
                    readingStatus: readStat,
                    imageUrl: props.imgUrl,
                    user: user.data._id
                }
            );
            await axios.put(`http://localhost:3001/${props.username}/adduserbook`, 
                {
                    books: [...user.data.books, book.data[0]._id]
                }
            );
            props.setTitle('');
            props.setAuthor('');
            props.setPublisher('');
            props.setPubYear('');
            props.setImageUrl('https://media.istockphoto.com/vectors/book-blank-red-cover-vector-id164474860?k=6&m=164474860&s=170667a&w=0&h=Q8MwXunqtg9_hRGEwxCHjBStGSsA_JD_tiu3nePNYac=');
            props.setISBN('');
            props.setAddDisplay(
                <div className="alertDisplay">
                    <div className="alert">
                        <h3>Book added!</h3>
                        <p>See it in your bookshelf or add another one!</p>
                        <button onClick={props.removeAddDisplay}>Okay</button>
                    </div>
                </div>
            );
            setReadStat('')
        } else {
            setStatText(
                <p className="statText"><b>Set a reading status 👉</b></p>
            );
        };
    };
    let previewDisplay = 
        <div className="previewDisplay">
            <h3>No preview yet. Search for a book or fill in the info fields.</h3>
        </div>;
    if (props.title && props.author && props.publisher && props.pubYear) {
        previewDisplay = 
            <div className="previewDisplay">
                <div className='preview'>
                    <h3>{props.title} ({props.pubYear})</h3>
                    <p><em>By {props.author}</em></p>
                    <p>Publisher: {props.publisher}</p>
                    <img src={props.imgUrl} alt={props.title} />
                </div>
                {statText}
                <select onChange={(e) => setReadStat(e.target.value)}>
                    <option value=''>--Select a reading status--</option>
                    <option value='Want to Read'>Want to Read</option>
                    <option value='Currently Reading'>Currently Reading</option>
                    <option value='Finished Reading'>Finished Reading</option>
                </select>
                <button onClick={handleSubmit}>Add Book!</button>
            </div>
    };
    
    return (
        <div className="BookPreviews">
            {previewDisplay}
        </div>
    );
};