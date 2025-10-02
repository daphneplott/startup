import React from 'react';

export function Home() {
  return (
      <main>
        <section class="welcome">
          <h1>Welcome to Magic School!</h1>
          <h3>We've recieved your application, and you've been cordially invited to attend a school of magic and sorcery.</h3>
        </section>
        <hr />
        <div class="row">
          <div class="col-sm-6">
            <div class="h-100 card mb-3" style="width: 18rem; background-color: rgb(173, 101, 255);">
              <img src="StarrySky.jpg" class="h-50 card-img-top" alt="Starry Sky" />
              <div class="card-body">
                <h5 class="card-title" style="color:white;">Astronomy</h5>
                <p class="card-text" style="color:white;">In this class, you will be matching constellations to their magical names.</p>
                <a href="astronomy.html" class="btn btn-light">Play</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="h-100 card" style="width: 18rem; background-color: aquamarine;">
              <img src="CauldrenGreenSmoke.jpg" class="h-50 card-img-top" alt="A cauldron with Greek Smoke" />
              <div class="card-body">
                <h5 class="card-title">Potions</h5>
                <p class="card-text">In this class, you will mixing different potions to find the right combinations of ingredients.</p>
                <a href="potions.html" class="btn btn-dark">Play</a>
              </div>
            </div>
          </div>
        </div>
        

      </main>
  );
}
