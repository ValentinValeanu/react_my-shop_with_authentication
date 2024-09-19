import React, { useContext } from 'react'
import LogOutPage from './authentication/LogInPage'
import SignInPage from './authentication/SignInPage'
import { AuthContext } from './authentication/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ "margin": "30px" }}>
      {
        user ? (
          <LogOutPage />
        ) : (
          <SignInPage />
        )
      }
    </div>
  );
}

export default App;
