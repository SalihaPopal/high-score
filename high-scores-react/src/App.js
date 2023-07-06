
import React, { useState } from 'react';
import './App.css';
import data from './scores.json';

const HighScoreTable = () => {
  const [ascendingSort, setAscendingSort] = useState("ascending");

  const changeSortOrder = () => {
     setAscendingSort(!ascendingSort);
  }

  const sortedCountryNames = data.sort((a, b) => a.name.localeCompare(b.name));

  const allScores = data.flatMap(country => country.scores.sort((a, b) => b.s- a.s));

  return (
    <div className='table-content'>
      
      <h2>World-Wide</h2>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>High Score</th>
          </tr>
        </thead>
        <tbody>
          {allScores.map((score, index) => (
            <tr key={index}> 
            <td>{score.n}</td>
            <td>{score.s}</td>
            </tr>
          ))}
          <button onClick={changeSortOrder} className="btn">
        Change Sort Order: {ascendingSort ? "Ascending" : "Descending"}
      </button>
          {sortedCountryNames.map((country, index) => (
            <div className='country-card' key={index}>
              <tr className="country-row">
                <td colSpan="3">{`High Scores: ${country.name}`}</td>
              </tr>
              {country.scores
              .sort((a, b) => (ascendingSort ? a.s 
                 - b.s :  b.s - a.s )).map((score, scoreIndex) => (
                <tr key={scoreIndex}>
                  <td>{score.n}</td>
                  <td colSpan="3">{score.s}</td>
                </tr>
              ))}
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [descendingSort, setDescendingSort] = useState("descending");

  const changeSortDirection = () => {
    setDescendingSort(descendingSort === "ascending" ? "descending" : "ascending")
  }
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
      <HighScoreTable sortDirection={changeSortDirection} />
    </div>
  );
};

export default App;
