import { AuthContext } from "./AuthContext";
import { useState, useContext } from "react";

const LogInPage = () => {
    const { logIn } = useContext(AuthContext)
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleLogin = () => {
        logIn(credentials);
    }

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="Username" />

            <br />

            <input
                type="password"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Password" />

            <br />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
};

export default LogInPage;