import React from 'react';
import './highscore_potions.css';

// export function HighscorePotions() {
//   return (
//     <main className = "body_potions container-fluid">
//         <box>
//             <h1>Potions High Scores</h1>
//             <ol  class = "highscores-box-potions">
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//                 <li>Player Name, School Name, and Score, retrieved from Database</li>
//             </ol>
//         </box>
//     </main>
//   );
// }

export function HighscorePotions() {
  const [scores, setScores] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    fetch('/api/potionsscores')
      .then((response) => response.json())
      .then((scores)=>{
        setScores(scores);
      })
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