import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Carousel from './Carousel';
import Login from './login';

const App = () => {
  const [cookies, , removeCookie] = useCookies(['user']);
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.user);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    removeCookie('user');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!cookies.user);
  }, [cookies]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <Carousel isLoggedIn={isLoggedIn} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
