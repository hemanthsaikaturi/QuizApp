const MultipleChoiceQuestion = ({ question }) => {
    return (
      <div>
        <h3>{question.text}</h3>
        {question.options.map((option, index) => (
          <div key={index}>
            <input type="radio" id={option} name="multipleChoice" value={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    );
  };
  
  export default MultipleChoiceQuestion;
  