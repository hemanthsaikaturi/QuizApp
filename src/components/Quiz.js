import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';  // Import the Firestore instance

const Quiz = ({ currentLevel }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);

      // Reference the document for the current quiz level
      const docRef = doc(db, "quizzes", currentLevel);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setQuestions(docSnap.data().questions);
      } else {
        console.log("No such document!");
      }

      setLoading(false);
    };

    fetchQuestions();
  }, [currentLevel]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.text}</h3>
          {/* Render question options, logic goes here */}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
