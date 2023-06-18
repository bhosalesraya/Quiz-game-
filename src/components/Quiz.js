export default function Quiz({quiz, changeQuiz, increaseScore}){

    let selected = -1;
    let selectedEl;

    function onSelect(e){
        selected = +e.target.value
        selectedEl = e.target;
    }

    function onNext(){
        if(selected===-1){
            return alert('select valid option')
        }

        if(selected===quiz.ans){
            increaseScore()
        }

        changeQuiz()

        selectedEl.checked = false;
    }
    return (
        <>
            <div className="quiz-container">
                <div className="question">
                    {quiz.question}
                </div>
                <div className="options">
                    <div className="option">
                        <input onChange={onSelect} id="0" name="options" type="radio" value="0"></input>
                        <label htmlFor="0">{quiz.options[0]}</label>
                    </div>
                    <div className="option">
                        <input onChange={onSelect} id="1" name="options" type="radio" value="1"></input>
                        <label htmlFor="1">{quiz.options[1]}</label>
                    </div>
                    <div className="option">
                        <input onChange={onSelect} id="2" name="options" type="radio" value="2"></input>
                        <label htmlFor="2">{quiz.options[2]}</label>
                    </div>
                    <div className="option">
                        <input onChange={onSelect} id="3" name="options" type="radio" value="3"></input>
                        <label htmlFor="3">{quiz.options[3]}</ label>
                    </div>
                </div>
                <div onClick={onNext} className="next-button">
                    Next
                </div>
            </div>
        </>
    );
}