export default function QuizStart({start}){

    
    return(
        <>
            <div className="quiz-start-container">
                <div>
                    Check your knowledge by attending the quiz, give a try!
                </div>
                <button onClick={()=>start(1)}>Start</button>
            </div>
        </>
    );
}