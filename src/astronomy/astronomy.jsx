import React from 'react';
import "./astronomy.css"
import { NavLink } from 'react-router-dom'

export function Astronomy() {

    {/* Steps: 
        - Randomly assign a card to an id
        - To the basic card, have an onclicked that takes in the id, and then flips it*/}
    
    numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    {/*SHUFLLE NUMBERS*/}

    cards = ['<img src = "BigDipperConstellation.jpg" class = "card-img" alt = "Big Dipper" /><div class = "card-img-overlay"></div>',
        '<img src = "CassiopeiaConstellation.jpg" class = "card-img" alt = "Cassiopeia" /><div class = "card-img-overlay"></div>',
        '<img  src = "CygnusConstellation.jpg" class = "card-img" alt = "Cygnus" /><div class = "card-img-overlay"></div>',
        '<img src = "DracoConstellation.jpg" class = "card-img" alt = "Draco" /><div class = "card-img-overlay"></div>',
        '<img src = "HydraConstellation.jpg" class = "card-img" alt = "Hydra" /><div class = "card-img-overlay"></div>',
        '<img src = "MonocerosConstellation.jpg" class = "card-img" alt = "Monoceros" /><div class = "card-img-overlay"></div>',
        '<img  src ="OrionConstellation.jpg" class = "card-img" alt = "Orion" /><div class = "card-img-overlay"></div>',
        '<img src = "PegasusConstellation.jpg" class = "card-img" alt = "Pegasus" /><div class = "card-img-overlay"></div>',
        '<div class="card-body"><p  class="card-title">The Big Dipper</p></div>',
        '<div class="card-body"><p  class="card-title">Cassiopeia</p></div>',
        '<div class="card-body"><p  class="card-title">Cygnus</p></div>',
        '<div class="card-body"><p  class="card-title">Draco</p></div>',
        '<div class="card-body"><p  class="card-title">Hydra</p></div>',
        '<div class="card-body"><p  class="card-title">Monoceros</p></div>',
        '<div class="card-body"><p  class="card-title">Orion</p></div>',
        '<div class="card-body"><p  class="card-title">Pegasus</p></div>'];

    function reveal(i) {
        let element = document.getElementById(i);
        element.innHTML = cards[numbers[i-1]];       
    };


  return (
        <main className = "bodyastronomy">
        <div className = "instructions" >
            <h1>Welcome to Astronomy Class!</h1>
            <p>For your astronomy class, you will be practicing your identification of important constellations. 
              For this assessment, you will pick a card to reveal it. 
              The card will either contain the image of a consetellation, or the name of it. 
              You will then pick another card. If the constellations are a match, you will win points. 
              If not, your revealed cards will be flipped over again. Good luck!
            </p>
            <NavLink className = "NavLink mylinkastronomy" to = "/highscore_astronomy">
                View High Scores
            </NavLink>

        </div>



        {/* For the astronomy game, it will have 16 buttons, which you can click to flip. 8 of the buttons will have images, 
        and 8 of the buttons will have constellation names.
        
        Need to be figured out using further technologies:
        - Having the stuff show when it gets clicked
        - Randomization of the buttons, so it's not the same game every time
        - Buttons will flip back over when you hit 2
        - If you match them, the buttons go away, or are no longer clickable
        - Some sort of longterm couting to calculate a score */}


        <div class = "max_width_800 row m-3 h-100 row-cols-1 row-cols-md-4 g-16 d-flex justify-content-center align-items-center">
            <div class = "col"  >
                <div id = "1" class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = "2" class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = "3" class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '4' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>

            <div class = "col"  >
                <div id = '5' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '6' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '7' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '8' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>

            <div class = "col"  >
                <div id = '9' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '10' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '11' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '12' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>

            <div class = "col"  >
                <div id = '13' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '14' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '15' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div id = '16' class = "card card_in_astronomy_game btn btn-secondary">
                    <div class="card-body">
                        <p  class="card-title black-font">Flip</p>
                    </div>
                </div>
            </div>
        </div>  
    </main>
  );
}


{/* <div class = "max_width_800 row m-3 h-100 row-cols-1 row-cols-md-4 g-16 d-flex justify-content-center align-items-center">
            <div class = "col"  >
                <div class = "card card_in_astronomy_game ">
                    <img src = "BigDipperConstellation.jpg" class = "card-img" alt = "Big Dipper" />
                    <div class = "card-img-overlay">
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <img src = "CassiopeiaConstellation.jpg" class = "card-img" alt = "Cassiopeia" />
                    <div class = "card-img-overlay">                        
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <img  src = "CygnusConstellation.jpg" class = "card-img" alt = "Cygnus" />
                    <div class = "card-img-overlay">                        
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <img src = "DracoConstellation.jpg" class = "card-img" alt = "Draco" />
                    <div class = "card-img-overlay">                        
                    </div>
                </div>
            </div>
        
            <div class = "col">
                <div class = "card card_in_astronomy_game ">
                    <img src = "HydraConstellation.jpg" class = "card-img" alt = "Hydra" />
                    <div class = "card-img-overlay">
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <img src = "MonocerosConstellation.jpg" class = "card-img" alt = "Monoceros" />
                    <div class = "card-img-overlay">                        
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <img  src ="OrionConstellation.jpg" class = "card-img" alt = "Orion" />
                    <div class = "card-img-overlay">                        
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <img src = "PegasusConstellation.jpg" class = "card-img" alt = "Pegasus" />
                    <div class = "card-img-overlay">                        
                    </div>
                </div>
            </div>

            <div class = "col">
                <div class = "card card_in_astronomy_game ">
                    <div class="card-body">
                        <p  class="card-title">The Big Dipper</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <div class="card-body">
                        <p  class="card-title">Cassiopeia</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <div class="card-body">
                        <p  class="card-title">Cygnus</p>
                    </div>
                </div>
            </div>
            <div class = "col" >
                <div class = "card card_in_astronomy_game ">
                    <div class="card-body">
                        <p  class="card-title">Draco</p>
                    </div>
                </div>
            </div>
        
            <div class = "col">
                <div class = "card card_in_astronomy_game ">
                    <div class="card-body">
                        <p  class="card-title">Hydra</p>
                    </div>
                </div>
            </div>
            <div class = "col">
                <div class = "card card_in_astronomy_game ">
                    <div class="card-body">
                        <p  class="card-title">Monoceros</p>
                    </div>
                </div>
            </div>
            <div class = "col">
                <div class = "card card_in_astronomy_game ">
                    <div class="card-body">
                        <p  class="card-title">Orion the Hunter</p>
                    </div>
                </div>
            </div>
            <div class = "col">
                <div class = "card card_in_astronomy_game ">
                    <div class="card-body">
                        <p  class="card-title">Pegasus</p>
                    </div>
                </div>
            </div>
        </div> */}