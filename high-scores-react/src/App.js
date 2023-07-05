//          level 1 and 2
import React from 'react';
import './App.css';
import data from './scores.json';

const HighScoreTable = () => {
  const sortedCountryNames = data.sort((a, b) => a.name.localeCompare(b.name));
  
  return (
    <div className="table-content">
      <table>
        <tbody>
          {sortedCountryNames.map((country, index) => (
            <React.Fragment key={index}>
              <tr className="country-row">
                <td colSpan="3">{`High Scores: ${country.name}`}</td>
              </tr>
              {country.scores.map((score, scoreIndex) => (
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
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
      <HighScoreTable />
    </div>
  );
};

export default App;
