import React from 'react';
import "./highscore_astronomy.css"

// export function HighscoreAstronomy() {
//   return (

//     <main className = "body_astronomy container-fluid">
//         <box>
//             <h1>Astronomy High Scores</h1>
//             <ol  class = "highscores-box-astronomy">
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


export function HighscoreAstronomy() {
  const [scores, setScores] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores_astronomy');
    if (scoresText) {
      setScores(JSON.parse(scoresText));
    }
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
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id='scores'>{scoreRows}</tbody>
      </table>

    </main>
  );
}