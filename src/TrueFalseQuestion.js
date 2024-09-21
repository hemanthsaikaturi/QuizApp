const TrueFalseQuestion = ({ question }) => {
    return (
      <div>
        <h3>{question.text}</h3>
        <input type="radio" id="true" name="trueFalse" value="true" />
        <label htmlFor="true">True</label>
        <input type="radio" id="false" name="trueFalse" value="false" />
        <label htmlFor="false">False</label>
      </div>
    );
  };
  
  export default TrueFalseQuestion;
  