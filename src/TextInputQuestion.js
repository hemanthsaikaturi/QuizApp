const TextInputQuestion = ({ question }) => {
    return (
      <div>
        <h3>{question.text}</h3>
        <input type="text" name="textInput" placeholder="Type your answer here" />
      </div>
    );
  };
  
  export default TextInputQuestion;
  