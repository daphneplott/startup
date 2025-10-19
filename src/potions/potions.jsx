import React from 'react';
import './potions.css';
import { NavLink } from 'react-router-dom';


export function Potions(props) {
  const userName = props.userName;
  const schoolName = props.schoolName;
  const [potion, setPotion] = React.useState('')
  const [ing1, setIng1] = React.useState('Gold Dust')
  const [ing2, setIng2] = React.useState('Jellyfish Venom')
  const [ing3, setIng3] = React.useState('Snake Skin')
  const [score, setScore] = React.useState(1000)

  React.useEffect(() => {

    const Potion1 = { name: "Elixir of Metamorphosis", attr1: "Gold color", ing1:"Gold Dust", attr2: "transformative power", ing3: "Snake Skin", attr3: "extra strength", ing2: "Lotus"}
    const Potion2 = { name: "Unshifting Serum", attr1: "Green color",ing1:"Mint Leaves", attr2: "transformative power", ing3: "Snake Skin", attr3: "restorative", ing2: "Black Sand" }
    const Potion3 = { name: "Venus's Whisper", attr1: "Red color", ing1:"Poppy Seed", attr2: "power of love", ing3: "Mistletoe", attr3: "extra strength", ing2: "Lotus" }
    const Potion4 = { name: "Bitterheart Brew", attr1: "Red color",ing1:"Poppy Seed", attr2: "power of love", ing3: "Mistletoe", attr3: "inverted effect", ing2: "Jellyfish Venom" }
    const Potion5 = { name: "Cure of Cupid", attr1: "Gold color", ing1:"Gold Dust", attr2: "power of love", ing3: "Mistletoe", attr3: "restorative", ing2: "Black Sand" }
    const Potion6 = { name: "Felix's Favor", attr1: "Green color", ing1:"Mint Leaves", attr2: "power of luck", ing3: "Four Leaf Clover", attr3: "extra strength", ing2: "Lotus" }
    const Potion7 = { name: "Black Cat Potion", attr1: "Gold color", ing1:"Gold Dust", attr2: "power of luck", ing3: "Four Leaf Clover",attr3: "inverted effect", ing2: "Jellyfish Venom"  }
    const Potion8 = { name: "Chance Cleanser", attr1: "Red color",ing1:"Poppy Seed", attr2: "power of luck", ing3: "Four Leaf Clover",attr3: "restorative", ing2: "Black Sand" }

    const potions = [Potion1, Potion2, Potion3, Potion4, Potion5, Potion6, Potion7, Potion8]
    setPotion(potions[Math.floor(Math.random() * 8)]);
  }, []);

  const checkAnswer = () => {
    if (ing1 == potion.ing1 && ing2 == potion.ing2 && ing3 == potion.ing3) {
      console.log("Correct");
      alert("Correct! Your score is ", score, ".")
      let newScore = { name: userName, school: schoolName, score: score}
      savescore(score);
    } else {
      console.log("Incorrect")
      // console.log(ing1, "+", potion.ing1, ";", ing2, "+", potion.ing2, ";",ing3, "+", potion.ing3)
      setScore(score - 100)
    }
  }

  function savescore(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i,0,newScore);
        found = true;
        break;
      }
    }
    if (!found) {
      scores.push(newScore);
    }
    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores',JSON.stringify(scores));
  }

  return (
    <main className="bodypotions">
      <div className="instructions">
        <h1>Welcome to Potions Class!</h1>
        <p>For your potions class, you will be practicing mixing ingredients to create different potions.
          For this test, you will be identifying the three ingredients that go into the potion.
          You will be given a multiple choice list, and you will pick one ingredient from each list.
          The description of your potion will be given to you once the potion is mixed.
          If it is not correct, you can keep trying until you make the correct concoction. Good luck!
        </p>
        <NavLink className="nav-link mylinkpotions" to="/highscore_potions">
          View High Scores
        </NavLink>
      </div>

      <div className="instructions">
        <p >Assignment: {potion.name} <br />Attributes: {potion.attr1}, {potion.attr2}, {potion.attr3}</p>
      </div>

      <form onSubmit = {(event) => event.preventDefault()}>
        <div class="input-group mb-3">
          <span class="input-group-text">Ingredient 1: </span>

          <select id="select" name="varSelect" class="btn btn-secondary"
            onChange={(e) => setIng1(e.target.value)}>
            <option>Gold Dust</option>
            <option>Poppy Seed</option>
            <option>Mint Leaves</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Ingredient 2: </span>

          <select id="select" name="varSelect" class="btn btn-secondary"
            onChange={(e) => setIng2(e.target.value)}>
            <option>Jellyfish Venom</option>
            <option>Black Sand</option>
            <option>Lotus</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Ingredient 3: </span>

          <select id="select" name="varSelect" class="btn btn-secondary"
            onChange={(e) => setIng3(e.target.value)}>
            <option>Snake Skin</option>
            <option>Mistletoe</option>
            <option>Four Leaf Clover</option>
          </select>
        </div>

        <button onClick = {checkAnswer} class="btn brew">
          Brew Potion
        </button>
      </form>

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
