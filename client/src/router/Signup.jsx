import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'

export default function Signup(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reentry, setReentry] = useState('');
    const [unLength, setUnLength] = useState('');
    const [unEmoji, setUnEmoji] = useState('');
    const [pdCheck, setpdCheck] = useState('');
    const [matchEmoji, setMatchEmoji] = useState('');
    const [pdLength, setPdLength] = useState('');
    const [lengthEmoji, setLengthEmoji] = useState('');
    const [checkDiv, setCheckDiv] = useState('checkDiv');
    const [alertDisplay, setAlert] = useState(undefined);

    const reset = () => {
        setUsername('');
        setPassword('');
        setReentry('');
        setUnLength('');
        setUnEmoji('');
        setpdCheck('');
        setMatchEmoji('');
        setPdLength('');
        setLengthEmoji('');
        setCheckDiv('checkDiv');
        setAlert(undefined);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === reentry && username.length > 6 && password.length > 6) {
            let response = await axios.get(`http://localhost:3001/existinguser/${username}`);
            if (response.data.length === 1) {
                setAlert(
                    <div className="alertDisplay">
                        <div className="alert">
                            <p>That username already exists. Please login or choose a different username</p>
                            <button onClick={() => props.history.push(`/login`)}>Login</button>
                            <button onClick={reset}>Reset fields</button>
                        </div>
                    </div>
                );
            } else {
            await axios.post('http://localhost:3001/newuser', 
                {
                    username: username,
                    password: password,
                    books: []
                }
            );
            props.history.push(`/${username}/bookshelf`);
            };
        } else {
            setCheckDiv('checkAlert');
        };
    };

    useEffect(() => {
        if (username) {
            username.length > 6 ? setUnLength('unLong') : setUnLength('unShort');
            unLength === 'unLong' ? setUnEmoji('✅') : setUnEmoji('🚫')
        };
        if (password || reentry) {
            password === reentry ? setpdCheck('match') : setpdCheck('mismatch');
            pdCheck === 'match' ? setMatchEmoji('✅') : setMatchEmoji('🚫');
            password.length > 6 ? setPdLength('pdLong') : setPdLength('pdShort');
            pdLength === 'pdLong' ? setLengthEmoji('✅') : setLengthEmoji('🚫');
        };
    }, [
        password, 
        reentry, 
        matchEmoji, 
        pdCheck, 
        pdLength,
        lengthEmoji,
        username,
        unLength,
        unEmoji
    ]);

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
                <div className={checkDiv}>
                    <p className={unLength}>{unEmoji} Username must be at least 7 characters</p>
                    <p className={pdLength}>{lengthEmoji} Password must be at least 7 characters</p>
                    <p className={pdCheck}>{matchEmoji} Passwords must match</p>
                </div>
                <button type='submit'>Sign up!</button>
            </form>
            {alertDisplay}
        </div>
    );
};