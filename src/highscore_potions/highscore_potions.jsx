import React from 'react';
import './highscore_potions.css';


export function HighscorePotions() {
  const [scores, setScores] = React.useState([]);
  const scoreRows = [];

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    fetch('/api/potionsscores')
      .then((response) => console.log(response))
      .then((response) => response.json())
      .then((scoress)=>{
        setScores(scoress);
        console.log("having just fetched api scores")
        console.log(scoress)
        console.log(scores)
      })
  }, []);

  // Demonstrates rendering an array with React
  
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i +1}</td>
          <td>{score.name}</td>
          <td>{score.school}</td>
          <td>{score.score}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
    console.log("these be the rows")
    console.log(scoreRows)
  }

  return (
    <main className="body_potions container-fluid">
      <h1>Potions High Scores</h1>
      <table className='highscores-box-potions table'>
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>School</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody id='scores'>{scoreRows}</tbody>
      </table>

    </main>
  );
}