import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertDisplay, setAlert] = useState(undefined);

    const reset = () => {
        setUsername('');
        setPassword('');
        setAlert(undefined);
    };
    const alertChange = (text) => {
        setAlert(
            <div className="alertDisplay">
                <div className="alert">
                    <p>{text}</p>
                    <button onClick={reset}>Okay</button>
                </div>
            </div>
        );
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username && password) {
            let response = await axios.get(`http://localhost:3001/existinguser/${username}`);
            if (response.data.length === 1) {
                if (response.data[0].password === password) {
                    props.history.push(`/${username}/bookshelf`);
                } else {
                    alertChange('Password does not match our records');
                };
            } else {
                alertChange('Username not found');
            };
        } else {
            alertChange('Username and/or password are missing');
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
            {alertDisplay}
        </div>
    );
};