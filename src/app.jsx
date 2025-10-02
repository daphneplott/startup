import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from '.login/login';
import { Potions } from './potions/potions';
import { Home } from './home/home';
import { HighscorePotions } from './highscore_potions/highscore_potions';
import { HighscoreAstronomy } from './highscore_astronomy/highscore_astronomy';
import { CreateAccount } from './create_account/create_account';
import { Astronomy } from './astronomy/astronomy';


export default function App() {
    return (
        <BrowserRouter>
            <div className="body bg-dark text-light">
                <header className="container-fluid">

                </header>

                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/potions' element={<Potions />} />
                    <Route path='/highscore_potions' element={<HighscorePotions />} />
                    <Route path='/astronomy' element={<Astronomy />} />
                    <Route path = '/highscore_astronomy' element = {<HighscoreAstronomy />} />
                    <Route path = '/login' element = {<Login />} />
                    <Route path = '/create_account' element = {<CreateAccount />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="bg-dark text-white-50">
                    <div className="container-fluid">
                        <span className="text-reset">Author Name(s)</span>
                        <a className="text-reset" href="https://github.com/webprogramming260/simon-react">
                            Source
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