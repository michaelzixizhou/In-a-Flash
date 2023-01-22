import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const LoginWrapper = styled.div`
  border-radius: 10px;
  border: 2px solid #000;
  background-color: #fff;
  height:500px;
  position: fixed;
  display: row;
  width: 400px;
`

const FormWrapper = styled.div`
  position: relative;
  vertical-align: top;
`
const LoginHeader = styled.div`
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 100px;
  color: #4169e1;
  font-family: sans-serif;
`
const Button = styled.button`
  background-color: orange; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 60px;
  border-radius: 10px;
`
const Label = styled.label`
  padding: 10px;
  font-size: 20px;
  
`

const Input = styled.input`
  :focus {
    border: 3px solid #555;
  }
  width: 200px;
  margin-bottom: 20px;
`

const LoginText = styled.div`
  font-size: 20px;
`


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
    <LoginWrapper>
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <FormWrapper>
            <LoginHeader>Welcome, please sign in.</LoginHeader>
            <form>
              <LoginText>Email:</LoginText>
              <Label style={{
              }
              }>
            
            <Input type="email" name="email" required />
              </Label>
              
              <div>
                <LoginText>Password:</LoginText>
              <Label>
            <Input type="password" name="password" required />
              </Label>
                
          </div>
         
          <Button onClick={handleLogin}>Login</Button>
            </form>
          </FormWrapper>
      )}
    </LoginWrapper>
  );
}

export default Login;
