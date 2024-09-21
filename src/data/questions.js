const questions = {
    Beginner: [
      { type: 'multipleChoice', text: 'Who invented the telephone?', options: ['Alexander Graham Bell', 'Nikola Tesla', 'Thomas Edison'] },
      // more questions...
    ],
    Intermediate: [
      { type: 'trueFalse', text: 'The Wright brothers invented the first airplane.', answer: true },
      // more questions...
    ],
    Advanced: [
      { type: 'image', text: 'Identify this inventor.', image: '/path/to/image.jpg', options: ['Nikola Tesla', 'Thomas Edison'] },
      // more questions...
    ],
    Expert: [
      { type: 'textInput', text: 'Who invented the steam engine?', answer: 'James Watt' },
      // more questions...
    ]
  };
  
  export default questions;
  