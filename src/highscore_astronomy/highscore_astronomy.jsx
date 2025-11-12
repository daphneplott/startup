import React from 'react';
import "./highscore_astronomy.css"


export function HighscoreAstronomy() {
  const [scores, setScores] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
    React.useEffect(() => {
        fetch('/api/astronomyscores')
          .then(console.log("in fetch then"))
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then(data => {
            console.log("data:");
            console.log(data)
            setScores(data); 
          })
          .catch(console.log("in fetch catch"))
      }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
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
  }

  return (
    <main className="body_astronomy container-fluid">
      <h1>Astronomy High Scores</h1>
      <table className='highscores-box-astronomy table'>
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