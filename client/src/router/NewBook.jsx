import { useState } from "react";
import axios from "axios";
import UserNav from "../components/UserNav";

export default function NewBook(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [readStat, setReadStat] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [imgUrl, setImageUrl] = useState('');
    const [ISBN, setISBN] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = await axios.get(`http://localhost:3001/existinguser/${props.match.params.username}`);
        let book = await axios.post(`http://localhost:3001/${props.match.params.username}/addbook`, 
            {
                title: title,
                author: author,
                publisher: publisher,
                yearPublished: pubYear,
                readingStatus: readStat,
                imageUrl: imgUrl,
                user: user.data._id
            }
        );
        await axios.put(`http://localhost:3001/${props.match.params.username}/adduserbook`, 
            {
                books: [...user.data.books, book.data[0]._id]
            }
        );
        props.history.push(`/${props.match.params.username}/bookshelf`);
    };
    const bookSearch = async (e) => {
        e.preventDefault();
        let response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${ISBN}&format=json&jscmd=details`);
        console.log(response.data[`ISBN:${ISBN}`]);
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
                <form className="enterInfo" onSubmit={handleSubmit}>
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
                    <label>Reading Status <span>(required)</span>:</label>
                    <select onChange={(e) => setReadStat(e.target.value)}>
                        <option value=''>--Select a reading status--</option>
                        <option value='Want to Read'>Want to Read</option>
                        <option value='Currently Reading'>Currently Reading</option>
                        <option value='Finished Reading'>Finished Reading</option>
                    </select>
                    <label>Image URL <span>(optional)</span>:</label>
                    <input 
                    onChange={(e) => setImageUrl(e.target.value)}
                    type='text'
                    placeholder="image URL"
                    value={imgUrl}/>
                    <button type="submit">Preview</button>
                </form>
                <div className="preview">
                    <h2>This is the book preview</h2>
                </div>
            </div>
        </div>
    );
};