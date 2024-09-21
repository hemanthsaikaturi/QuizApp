import React, { useState } from 'react';
import LevelSelector from './components/LevelSelector';
import Quiz from './components/Quiz';
import SeedQuizData from './components/SeedQuizData'; // Adjust path as necessary
import questions from './data/questions'; // Assuming you store questions here

const App = () => {
  const [level, setLevel] = useState(null);
  const [seeding, setSeeding] = useState(false); // State to toggle seeding data

  return (
    <div className="App">
      <h1>Quiz Application</h1>
      {seeding && <SeedQuizData setSeeding={setSeeding} />}
      {!level && !seeding && <LevelSelector setLevel={setLevel} />}
      {level && <Quiz questions={questions[level]} currentLevel={level} />}
      {!level && !seeding && (
        <button onClick={() => setSeeding(true)}>Seed Quiz Data</button>
      )}
    </div>
  );
};

export default App;
