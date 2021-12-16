import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit}>
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