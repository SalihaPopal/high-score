
import React, { useState } from 'react';
import './App.css';
import data from './scores.json';

const HighScoreTable = () => {
  const [ascendingSort, setAscendingSort] = useState("ascending");
  const changeSortOrder = () => {
     setAscendingSort(!ascendingSort);
  }

  const sortedCountryNames = data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="table-content">
      <button onClick={changeSortOrder}>
        Change Sort Order: {ascendingSort ? "Ascending" : "Descending"}
      </button>
      <table>
        <tbody>
          {sortedCountryNames.map((country, index) => (
            <React.Fragment key={index}>
              <tr className="country-row">
                <td colSpan="3">{`High Scores: ${country.name}`}</td>
              </tr>
              {country.scores
              .sort((a, b) => (ascendingSort ? a.s 
                 - b.s :  b.s - a.s )).map((score, scoreIndex) => (
                <tr key={scoreIndex}>
                  <td colSpan="1">{score.n}</td>
                  <td>{score.s}</td>
                </tr>
              ))}
            </React.Fragment>
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
