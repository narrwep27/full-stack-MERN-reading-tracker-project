import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reentry, setReentry] = useState('');
    const [pdCheck, setpdCheck] = useState('');
    const [checkEmoji, setEmoji] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === reentry && username) {
        console.log('passwords match & username');
            //     await axios.post('http://localhost:3000/newuser', {
        //     username: username,
        //     password: password,
        //     books: []
        // });
        } else {
            console.log('passwords must match');
            setPassword('');
            setReentry('');
        };
    };

    useEffect(() => {
        if (password || reentry) {
            password === reentry ? setpdCheck('match') : setpdCheck('mismatch');
            pdCheck === 'match' ? setEmoji('✅') : setEmoji('🚫');
        };
    }, [password, reentry, checkEmoji, pdCheck]);

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
                    value={reentry} />
                <p className={pdCheck}>{checkEmoji} Passwords must match</p>
                <button type='submit'>Signup!</button>
            </form>
        </div>
    );
};