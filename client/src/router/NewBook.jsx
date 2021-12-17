import { useState } from "react";
import axios from "axios";
import UserNav from "../components/UserNav";

export default function NewBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [overview, setOverview] = useState('');
    const [readStat, setReadStat] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pubYear, setPubYear] = useState(0);
    const [imgUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <UserNav />
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type='text'
                    placeholder="title"
                    value={title}
                />
                <label>Author:</label>
                <input
                    onChange={(e) => setAuthor(e.target.value)}
                    type='text'
                    placeholder="author"
                    value={author}
                />
                <label>Overview:</label>
                <textarea
                    onChange={(e) => setOverview(e.target.value)}
                    placeholder="overview"
                    value={overview}
                    rows='4'>
                </textarea>
                <label>Reading Status:</label>
                <select onChange={(e) => setReadStat(e.target.value)}>
                    <option value=''>--Select a reading status--</option>
                    <option value='Want to Read'>Want to Read</option>
                    <option value='Currently Reading'>Currently Reading</option>
                    <option value='Finished Reading'>Finished Reading</option>
                </select>
                <label>Publisher:</label>
                <input
                    onChange={(e) => setPublisher(e.target.value)}
                    type='text'
                    placeholder="publisher"
                    value={publisher}
                />
                <label>Year Published:</label>
                <input
                    onChange={(e) => setPubYear(e.target.value)}
                    type='number'
                    placeholder="####"
                    value={pubYear}
                />
                <label>Image URL:</label>
                <input 
                onChange={(e) => setImageUrl(e.target.value)}
                type='text'
                placeholder="image URL"
                value={imgUrl}/>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};