import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const LogOutPage = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome {user?.name}</h1>
            <button type="submit" className="btn btn-primary" onClick={logOut}>Logout</button>
        </div>
    )
}

export default LogOutPage;