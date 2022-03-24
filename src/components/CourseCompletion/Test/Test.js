import cl from "classnames";
import {useState} from "react";
import Quiz from 'react-quiz-component';
import { quiz } from '../../CourseProgram/Test/quiz';


function Test({test}) {
    const [answer, setAnswer] = useState('');

    function sendAnswer() {
        console.log('answer', answer);
    }

    return (
        <section className={cl('test')}>
            <Quiz quiz={quiz} shuffle={true}/>
        </section>
    );
}

export default Test;