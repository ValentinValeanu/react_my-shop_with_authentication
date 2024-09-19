import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const SignInPage = () => {
    const { signIn } = useContext(AuthContext);
    const [userData, setUserData] =
        useState({ firstName: '', lastName: '', email: '', username: '', address: '', username: '', password: '' });

    const handleSignIn = (e) => {
        e.preventDefault();

        signIn(userData);
    }

    return (
        <div style={{ "margin": "0 auto", "width": "550px", "border": "1px solid rgba(0, 0, 0, 0.1)", "borderRadius": "4px" }}>
            <h2 style={{ "textAlign": "center", "padding": "20px" }}> Sign In </h2>

            <br />

            <form style={{ "padding": "15px" }}>
                <div className="row">
                    <div className="form-group col-6">
                        <label>FirstName</label>
                        <input type="text" className="form-control" id="firstName" placeholder="FirstName"
                            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
                    </div>

                    <div className="form-group col-6">
                        <label>LastName</label>
                        <input type="text" className="form-control" id="lastName" placeholder="LastName"
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="inputPassword4">Username</label>
                    <input type="text" className="form-control" id="inputUsername" placeholder="Username"
                        onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Headhard 12"
                        onChange={(e) => setUserData({ ...userData, address: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </div>

                <br />

                <button type="submit" className="btn btn-primary" onClick={handleSignIn}>Sign in</button>
            </form >
        </div>
    )
};

export default SignInPage;