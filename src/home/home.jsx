import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
    return (
        <main className="body">
            <section class="welcome">
                <h1>Welcome to Magic School!</h1>
                <h3>We've recieved your application, and you've been cordially invited to attend a school of magic and sorcery.</h3>
            </section>
            <hr />
            <div class="row mb-5">
                <div class="col-sm-6">
                    <div class="h-100 card mb-3 astronomy-card" >
                        <img src="StarrySky.jpg" class="h-50 card-img-top" alt="Starry Sky" />
                        <div class="card-body">
                            <h5 class="card-title white-text">Astronomy</h5>
                            <p class="card-text white-text">In this class, you will be matching constellations to their magical names.</p>
                            <NavLink className = "btn btn-light" to = "/astronomy" >
                                Play
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="h-100 card potions-card">
                        <img src="CauldrenGreenSmoke.jpg" class="h-50 card-img-top" alt="A cauldron with Greek Smoke" />
                        <div class="card-body">
                            <h5 class="card-title">Potions</h5>
                            <p class="card-text">In this class, you will mixing different potions to find the right combinations of ingredients.</p>
                            <NavLink className = "btn btn-dark" to = "/potions" >
                                          Play
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}
