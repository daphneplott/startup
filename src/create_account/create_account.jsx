import React from 'react';
import './create_account.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

export function CreateAccount() {
  return (
    <main className = "body container-fluid">
        <form method="get" action="index.html">
        <div class = "input-group mb-3">
            <span class = "prompt">By what name are you called, new student?</span>
        </div>
        <div class = "input-group mb-3">
            <input type="text" class = "form-control" placeholder="Armingan the Artist" />
        </div>
        <div class = "input-group mb-3">
            <span class = "prompt">What is the magical school you attend?</span>
        </div>
        <div class = "input-group mb-3">
            <input class = "form-control" type = "text" placeholder = "The Lightning Academy" />
        </div>
        <div class = "input-group mb-3">
            <span></span>
        </div>
        <div class = "input-group mb-3">
            <input class = "form-control" type="password" placeholder="Password" />
        </div>
        <div class = "prompt">
            <p>Need some inspiration? Visit this 3rd party service call to generate cool names.</p>
        </div>
        <button type="submit" class = "btn btn-primary">
            <NavLink className = "nav-link" to ="/">
                Create Account
            </NavLink></button>
      </form>
    </main>
  );
}