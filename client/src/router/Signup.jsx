import { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reentery, setReentry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(reentery);
        setUsername('');
        setPassword('');
        setReentry('');
    };

    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit}>
                <h2>Sign up for an account here!</h2>
                <label>Username:</label>
                <input 
                    onChange={(e) => setUsername(e.target.value)} 
                    type='text' 
                    placeholder='username' 
                    value={username} 
                />
                <label>Password:</label>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' 
                    placeholder='password' 
                    value={password}
                />
                <label>Re-enter Password:</label>
                <input 
                    onChange={(e) => setReentry(e.target.value)}
                    type='password' 
                    placeholder='re-enter password'
                    value={reentery} />
                <button type='submit'>Signup!</button>
            </form>
        </div>
    );
};