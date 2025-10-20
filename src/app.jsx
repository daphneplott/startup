import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Potions } from './potions/potions';
import { Home } from './home/home';
import { HighscorePotions } from './highscore_potions/highscore_potions';
import { HighscoreAstronomy } from './highscore_astronomy/highscore_astronomy';
import { CreateAccount } from './create_account/create_account';
import { Astronomy } from './astronomy/astronomy';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
    const [schoolName, setSchoolName] = React.useState('Hogwarts')
    
    return (
        <BrowserRouter>
            <div className="body">
                <header className="container-fluid">
                    <nav className="navbar fixed-top">
                        <menu className="navbar-nav nav justify-content-end">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">
                                    Home
                                </NavLink>
                            </li>
                            { authState === AuthState.Unauthenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="login">
                                    Login
                                </NavLink>
                            </li>
                            ) }
                            { authState === AuthState.Authenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="" 
                                onClick={() => {
                                    setAuthState(AuthState.Unauthenticated);
                                    setUserName('');
                                    localStorage.setItem("userName",'')
                                }} >
                                    Logout
                                </NavLink>
                            </li>
                            ) } 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="astronomy">
                                    Astronomy
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="potions">
                                    Potions
                                </NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/potions' element={<Potions userName = {userName} schoolName = {schoolName} authState = {authState}/>} />
                    <Route path='/highscore_potions' element={<HighscorePotions />} />
                    <Route path='/astronomy' element={<Astronomy userName = {userName} schoolName = {schoolName} authState = {authState} />} />
                    <Route path='/highscore_astronomy' element={<HighscoreAstronomy />} />
                    <Route path='/login' element={<Login onAuthChange={(userName, authState, schoolName) => {
                                                        setAuthState(authState);
                                                        setUserName(userName);
                                                        setSchoolName(schoolName);
                                                        console.log(authState);
                    }} />} />
                    <Route path='/create_account' element={<CreateAccount onAuthChange={(userName, authState,schoolName) => {
                                                        setAuthState(authState);
                                                        setUserName(userName); 
                                                        setSchoolName(schoolName);
                                                        console.log(authState)}}
                                                        />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="bg-dark text-white-50">
                    <div className="container-fluid">
                        <span className="text-reset">Daphne Plott</span>
                        <a className="text-reset" href="https://github.com/daphneplott/startup">
                            GitHub
                        </a>
                    </div>

                </footer>
            </div>

        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}