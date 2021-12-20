import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username && password) {
            let response = await axios.get(`http://localhost:3001/existinguser/${username}`);
            if (response.data[0].username) {
                if (response.data[0].password === password) {
                    console.log('username and password match');
                    // props.history.push(`/${username}/bookshelf`);
                } else {
                    console.log('passwords do not match');
                };
            } else {
                console.log('username not found');
            };
        } else {
            console.log('username and/or password missing');
        };
    };

    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit}>
                <h2>Login here!</h2>
                <label>Username:</label>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    type='text'
                    placeholder="username"
                    value={username} 
                />
                <label>Password:</label>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder="password"
                    value={password}
                />
                <button type='submit'>Login!</button>
            </form>
        </div>
    );
};