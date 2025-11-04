import React from 'react';
import './create_account.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { AuthState } from '../login/authState';

export function CreateAccount(props) {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [schoolName, setSchoolName] = React.useState('');
    const [suggestedName, setSuggestedName] = React.useState('');
    const [suggestedSchool, setSuggestedSchool] = React.useState('');

    React.useEffect(() => {
        fetch('https://potterapi-fedeperin.vercel.app/en/characters/random')
            .then((response) => response.json())
            .then((data) => {
                setSuggestedName(data.fullName)
            })
            .catch(
            setSuggestedName('Armingan the Artist'));
        setSuggestedSchool('The Lightning Academy');
    }, []);

    async function createUser() {
        const response = await fetch(`/api/auth/create`, {
            method: 'post',
            body: JSON.stringify({ username: userName, schoolName: schoolName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            localStorage.setItem(userName, schoolName);
            localStorage.setItem('schoolName', schoolName);
            props.onAuthChange(userName, AuthState.Authenticated, schoolName);
        } else {
            const body = await response.json();
            setDisplayError('Error: ${body.msg}')
        }
    }

    return (
        <main className="body container-fluid">
            <form method="get" action="index.html">
                <div class="input-group mb-3">
                    <span class="prompt">By what name are you called, new student?</span>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="Armingan the Artist" />
                </div>
                <div class="input-group mb-3">
                    <span class="prompt">What is the magical school you attend?</span>
                </div>
                <div class="input-group mb-3">
                    <input class="form-control" type="text" onChange={(e) => setSchoolName(e.target.value)} placeholder="The Lightning Academy" />
                </div>
                <div class="input-group mb-3">
                    <span></span>
                </div>
                <div class="input-group mb-3">
                    <input class="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div class="prompt">
                    <p>Need some inspiration? What about {suggestedName} from {suggestedSchool}</p>
                </div>
                <button type="submit" class="btn btn-primary"
                    onClick={() => createUser()}
                    disabled={!userName || !password || !schoolName}>
                    <NavLink className="nav-link" to="/">
                        Create Account
                    </NavLink></button>
            </form>
        </main>
    );
}