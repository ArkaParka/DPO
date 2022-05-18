import cl from "classnames";
import Quiz from 'react-quiz-component';

function Test({test}) {

    const sendQuizResult = (obj) => {
        console.log(obj.toString());
        // TODO: create Quiz then finish Quiz
        // YOUR LOGIC GOES HERE
    }

    return (
        <section className={cl('test')}>
            {
                test.quizConfig ?
                    <Quiz
                        quiz={test.quizConfig}
                        onComplete={sendQuizResult}
                        shuffle={true}
                    /> :
                    'Test is loading...'
            }
        </section>
    );
}

export default Test;