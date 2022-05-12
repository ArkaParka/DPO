import {Form} from "react-bootstrap";
import {Alert} from "reactstrap";
import CheckBoxItem from "./CheckBoxItem";
import {useEffect} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import './CheckboxGroup.scss';

function CheckboxGroup({answers, setAnswers}) {
    const newAnswer = {
        id: answers.length,
        answer: "",
        isCorrect: false
    };

    useEffect(() => {
    })

    function handleAnswerChange(answerId, newAnswer) {
        let newAnswers = answers.slice();
        newAnswers[answerId] = newAnswer;
        setAnswers(newAnswers);
        console.log('newAnswers', newAnswers);
    }

    return (
        <div className="checkbox-group">
            {
                answers?.length && answers?.map(answer => (
                    <CheckBoxItem key={answer.id} item={answer} changeAnswer={handleAnswerChange}/>
                ))
            }
            <Alert variant="primary" className="new-answer" onClick={() => {
                let newAnswers = answers.slice();
                newAnswers.push(newAnswer);
                setAnswers(newAnswers);
            }}>
                <AiOutlinePlus/>
            </Alert>
        </div>
    );
}

export default CheckboxGroup;