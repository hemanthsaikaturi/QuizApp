import React from 'react';

const LevelSelector = ({ setLevel }) => {
  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div>
      <h2>Select a Level:</h2>
      {levels.map((level, index) => (
        <button key={index} onClick={() => setLevel(level)}>
          {level}
        </button>
      ))}
    </div>
  );
};

export default LevelSelector;
