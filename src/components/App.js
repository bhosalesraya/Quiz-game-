import { useState } from 'react';
import questions from '../Questions';
import Header from './Header';
import Quiz from './Quiz';
import QuizStart from './QuizStart';
import Result from './Result';

let score = 0;

function App() {

  let [start, setStart] = useState(0)
  let [currentQuiz, setCurrentQuiz] = useState(0)
  let [isSubmitted, setIsSubmitted] = useState(0)

  function increaseScore(){
    score++;
  }

  function changeQuiz(){
    if(currentQuiz===questions.length-1) 
      return setIsSubmitted(1);

    setCurrentQuiz(currentQuiz+1)
  }

  function reset(){
    score=0
    setIsSubmitted(0)
    setCurrentQuiz(0)
  }

  return (
    <>
      <Header/>
      <div className='main-container'>
        {isSubmitted?<Result score={score} total={questions.length} reset={reset}/>
         :(
          start?<Quiz quiz={questions[currentQuiz]} increaseScore={increaseScore} changeQuiz={changeQuiz}/> 
          : <QuizStart start = {setStart}/>
          )
        }
      </div>
    </>
  );
}

export default App;
