export default function Result({score, total, reset}){
    return(
        <>
        <center><img src="https://media.tenor.com/_x4aHcZjeGEAAAAC/thank-you-text.gif" width="500" height="200" alt="Done"></img></center>
            <div className="result-container">
                <span>
                    Thank you for attending the quiz!
                </span>
                <span>
                    You got
                </span>
                <span className="score">
                    {score}/{total}
                </span>
                <button className="retry" onClick={reset}>Retry</button>
            </div>
        </>
        
    );
    
}