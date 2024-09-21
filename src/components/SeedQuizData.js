import React, { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // Correct import

const SeedQuizData = () => {
  useEffect(() => {
    const seedData = async () => {
      // Beginner Level
      const beginnerQuizData = {
        questions: [
          {
            text: "Who invented the telephone?",
            type: "multipleChoice",
            options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"],
            correctAnswer: "Alexander Graham Bell"
          },
          {
            text: "Who is known as the 'Father of Computers'?",
            type: "multipleChoice",
            options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
            correctAnswer: "Charles Babbage"
          }
        ]
      };

      // Intermediate Level (True/False)
      const intermediateQuizData = {
        questions: [
          {
            text: "True or False: Nikola Tesla invented the AC motor.",
            type: "trueFalse",
            correctAnswer: true
          },
          {
            text: "True or False: The Wright brothers invented the first airplane.",
            type: "trueFalse",
            correctAnswer: true
          }
        ]
      };

      // Advanced Level (Image-based)
      const advancedQuizData = {
        questions: [
          {
            text: "Identify this inventor from the image (e.g., Alexander Graham Bell).",
            type: "imageBased",
            imageUrl: "https://example.com/alexander-graham-bell.jpg",
            options: ["Alexander Graham Bell", "James Watt", "Nikola Tesla", "Guglielmo Marconi"],
            correctAnswer: "Alexander Graham Bell"
          },
          {
            text: "Which invention is shown in this image (e.g., the first airplane)?",
            type: "imageBased",
            imageUrl: "https://example.com/first-airplane.jpg",
            options: ["Airplane", "Telegraph", "Light Bulb", "Steam Engine"],
            correctAnswer: "Airplane"
          }
        ]
      };

      // Expert Level (Text Input)
      const expertQuizData = {
        questions: [
          {
            text: "Who invented the light bulb?",
            type: "textInput",
            correctAnswer: "Thomas Edison"
          },
          {
            text: "What technology did Guglielmo Marconi pioneer?",
            type: "textInput",
            correctAnswer: "Radio"
          }
        ]
      };

      // Master Level (Text Input, harder questions)
      const masterQuizData = {
        questions: [
          {
            text: "Who developed the polio vaccine?",
            type: "textInput",
            correctAnswer: "Jonas Salk"
          },
          {
            text: "What is the main principle behind the theory of relativity?",
            type: "textInput",
            correctAnswer: "E=mc²"
          }
        ]
      };

      // Write data to Firestore
      await setDoc(doc(db, "quizzes", "Beginner"), beginnerQuizData);
      await setDoc(doc(db, "quizzes", "Intermediate"), intermediateQuizData);
      await setDoc(doc(db, "quizzes", "Advanced"), advancedQuizData);
      await setDoc(doc(db, "quizzes", "Expert"), expertQuizData);
      await setDoc(doc(db, "quizzes", "Master"), masterQuizData);

      console.log("Quiz data seeded for all levels");
    };

    seedData();
  }, []);

  return <div>Seeding Quiz Data for All Levels...</div>;
};

export default SeedQuizData;
