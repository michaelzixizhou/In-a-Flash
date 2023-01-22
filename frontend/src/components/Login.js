import React, { useEffect, useState } from "react";

function Login() {
  // state variable to track the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check if the user is already logged in
  const loggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [loggedIn]);

  function handleLogin() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    window.location.reload();
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <button onClick={handleLogin}>Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
