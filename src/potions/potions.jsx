import React from 'react';
import './potions.css';
import { NavLink } from 'react-router-dom';

export function Potions() {
  return (
    <main className="body">
      <div className="instructions">
        <h1>Welcome to Potions Class!</h1>
        <p>For your potions class, you will be practicing mixing ingredients to create different potions. 
          For this test, you will be identifying the three ingredients that go into the potion. 
          You will be given a multiple choice list, and you will pick one ingredient from each list. 
          The description of your potion will be given to you once the potion is mixed. 
          If it is not correct, you can keep trying until you make the correct concoction. Good luck!
        </p>
        <NavLink className = "nav-link mylink" to = "/highscore_potions">
          View High Scores
        </NavLink>
      </div>
      <form>
        <div class = "input-group mb-3">
        <span class="input-group-text">Ingredient 1: </span>

          <select id="select" name="varSelect" class="btn btn-secondary" aria-placeholder="">
            <option>Gold Dust</option>
            <option>Poppy Seed</option>
            <option>Mint Leaves</option>
          </select>
        </div>

        <div class = "input-group mb-3">
          <span class="input-group-text">Ingredient 2: </span>

          <select id="select" name="varSelect" class="btn btn-secondary">
            <option>Jellyfish Venom</option> 
            <option>Black Sand</option> 
            <option>Lotus</option> 
          </select>
        </div>

        <div class = "input-group mb-3">
          <span class="input-group-text">Ingredient 3: </span>

          <select id="select" name="varSelect" class="btn btn-secondary">
            <option>Snake Skin</option> 
            <option>Mistletoe</option> 
            <option>Four Leaf Clover</option> 
          </select>
        </div>

        <button type="submit" class="btn brew">
          Brew Potion
        </button>
      </form>

      {/*Still needs to be done with other technologies:
        
        - Randomly generate a prompt for which potion needs to be made
        - Validate the input to see if the potion is correct or not
        - Let the player try again
        - Keep track of the number of tries to produce a score 
        */}
      {/* --Potions:
        - A potion of transformation (Snake skin, lotus, gold dust)
        - A potion to reverse a transformation (Snake skin, black sand, mint leaves)
        - A potion of love (mistletoe, lotus, poppy seed)
        - A potion of hatred (mistletoe, jellyfish venom, poppy seed)
        - A potion to reverse a love potion (mistleote, black sand, gold dust)
        - A potion for good luck (clover, lotus, mint leaves)
        - A potion for bad luck (clover, jellyfish venom, gold dust)
        - A potion to reset one's luck (clover, black sand, poppy seed)
        -- */}
    </main>
  );
}