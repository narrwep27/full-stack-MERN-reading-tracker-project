import { useState } from "react";
import axios from "axios";
import UserNav from "../components/UserNav";
import BookPreview from "../components/BookPreview";

export default function NewBook(props) {
    const [ISBN, setISBN] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [imgUrl, setImageUrl] = useState('https://media.istockphoto.com/vectors/book-blank-red-cover-vector-id164474860?k=6&m=164474860&s=170667a&w=0&h=Q8MwXunqtg9_hRGEwxCHjBStGSsA_JD_tiu3nePNYac=');
    const [bookAddDisplay, setAddDisplay] = useState('');

    const removeAddDisplay = () => {
        setAddDisplay('');
    };

    const bookSearch = async (e) => {
        e.preventDefault();
        let response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${ISBN}&format=json&jscmd=details`);
        console.log(response.data[`ISBN:${ISBN}`]);
        let book = response.data[`ISBN:${ISBN}`];
        let year = book.details.publish_date.split(', ');
        setTitle(book.details.title);
        setAuthor(book.details.authors[0].name);
        setPublisher(book.details.publishers[0]);
        setPubYear(year[1]);
        setImageUrl(book.thumbnail_url);
    };

    return (
        <div>
            <UserNav username={props.match.params.username}/>
            <div className="newBook">
                <form className='search' onSubmit={bookSearch}>
                    <h3>Search for your book here!</h3>
                    <label>ISBN:</label>
                    <input
                        onChange={(e) => setISBN(e.target.value)}
                        type='text'
                        placeholder='ISBN' 
                        value={ISBN}
                    />
                    <button type="submit">Search</button>
                </form>
                <h2>OR</h2>
                <form className="enterInfo">
                    <h3>Enter book info here!</h3>
                    <label>Title <span>(required)</span>:</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        placeholder="title"
                        value={title}
                    />
                    <label>Author <span>(required)</span>:</label>
                    <input
                        onChange={(e) => setAuthor(e.target.value)}
                        type='text'
                        placeholder="author"
                        value={author}
                    />
                    <label>Publisher <span>(required)</span>:</label>
                    <input
                        onChange={(e) => setPublisher(e.target.value)}
                        type='text'
                        placeholder="publisher"
                        value={publisher}
                    />
                    <label>Year Published <span>(required)</span>:</label>
                    <input
                        onChange={(e) => setPubYear(e.target.value)}
                        type='number'
                        placeholder="####"
                        value={pubYear}
                    />
                    {/* <label>Reading Status <span>(required)</span>:</label>
                    <select onChange={(e) => setReadStat(e.target.value)}>
                        <option value=''>--Select a reading status--</option>
                        <option value='Want to Read'>Want to Read</option>
                        <option value='Currently Reading'>Currently Reading</option>
                        <option value='Finished Reading'>Finished Reading</option>
                    </select> */}
                    <label>Image URL <span>(optional)</span>:</label>
                    <input 
                    onChange={(e) => setImageUrl(e.target.value)}
                    type='text'
                    placeholder="image URL"
                    value={imgUrl}/>
                </form>
                <BookPreview
                    username={props.match.params.username}
                    title={title}
                    setTitle={setTitle}
                    author={author}
                    setAuthor={setAuthor}
                    publisher={publisher}
                    setPublisher={setPublisher}
                    pubYear={pubYear}
                    setPubYear={setPubYear}
                    imgUrl={imgUrl} 
                    setImageUrl={setImageUrl}
                    setISBN={setISBN}
                    setAddDisplay={setAddDisplay}
                    removeAddDisplay={removeAddDisplay}
                />
            </div>
            {bookAddDisplay}
        </div>
    );
};