import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';
import { AuthState } from './authState';


export function Login(props) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [schoolName,setSchoolName] = React.useState('Hogwarts')
  
  async function loginUser() {
    const response = await fetch(`/api/auth/login`, {
      method: 'post',
      body: JSON.stringify( {username: userName, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName',userName);
      setSchoolName(localStorage.getItem(userName));
      localStorage.setItem('schoolName',schoolName)
      props.onAuthChange(userName,AuthState.Authenticated,schoolName)
    } else {
      const body = await response.json();
      alert("Incorrect username or password")
    }
  }

  return (
    <main className="body container-fluid text-center">
        <div>
          <h1>Login</h1>
          <form method="get">
            <div class="input-group mb-3">
              <input class="form-control" type="text" value = {userName} onChange = {(e) => setUserName(e.target.value)} placeholder="Username" />
            </div>
            <div class="input-group mb-3">
              <input class="form-control" type="password" 
              onChange = {(e) => setPassword(e.target.value)} 
              placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary" 
            onClick={() => loginUser()}
            disabled={!userName || !password}>
              <NavLink className = "nav-link" to = "/" >
              Login
              </NavLink>
            </button>
          </form>
          <div class = "mt-4">
              <button type="submit" class="btn btn-dark">
                <NavLink className = "nav-link" to = "/create_account">
                New student? Create an account
                </NavLink>
              </button>
          </div>
        </div>
      </main>
  );
}