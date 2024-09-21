const ImageQuestion = ({ question }) => {
    return (
      <div>
        <img src={question.image} alt="Question related" style={{ width: '300px' }} />
        <h3>{question.text}</h3>
        {question.options.map((option, index) => (
          <div key={index}>
            <input type="radio" id={option} name="imageQuestion" value={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageQuestion;
  