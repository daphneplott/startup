import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';
import { AuthState } from './authState';

export function Login() {
  return (
    <main className="body container-fluid text-center">
        <div>
          <h1>Login</h1>
          <form method="get">
            <div class="input-group mb-3">
              <input class="form-control" type="text" placeholder="Username" />
            </div>
            <div class="input-group mb-3">
              <input class="form-control" type="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">
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

export function Logout() {
  const 
}