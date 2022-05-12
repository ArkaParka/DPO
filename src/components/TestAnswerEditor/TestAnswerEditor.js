import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {RadioGroup, RadioButton} from 'react-radio-buttons';
import './TestAnswerEditor.scss';
import {Alert} from "reactstrap";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import cl from "classnames";
import Button from "@mui/material/Button";

export const answerTypes = {
    one: 'one',
    multi: 'multi'
}

const TestAnswerEditor = ({title, questionData, questionsArray, updateTest, isTestExist}) => {
    // TODO: доделать варианты ответов и multi
    const [question, setQuestion] = useState(questionData?.question || '');
    const [isMultipleAnswers, setIsMultipleAnswers] = useState(questionData.multipleAnswers);
    const [answerVariants, setAnswerVariants] = useState(questionData.variants);

    useEffect(() => {
        console.log(questionData)
        let items = document.querySelector('.radio-group')?.childNodes;

        if (items) {
            items.forEach(item => {
                item.childNodes[0].childNodes[1].classList.add('item');
            });
        }

    }, []);

    function handleSaveOneTestQuestion() {
        const newQuestion = Object.assign(questionData, {
            question: question,
            variants: answerVariants,
            multipleAnswers: isMultipleAnswers
        });
        console.log(newQuestion);

        const newQuestionsArray = questionsArray.slice();
        newQuestionsArray[questionData.id] = newQuestion;
        updateTest(newQuestionsArray);
        console.log(newQuestionsArray);
    }

    return (
        <div className="task-answer-editor">
            <header className="text-editor-header form-control">
                {title}
            </header>
            <div className="answer-form form-control">
                <div className="test-question">
                    <div className="edit-title">Вопрос:</div>
                    <Form.Control
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                        type="text"
                        placeholder="Введите вопрос"
                    />
                </div>
                <div className="test-answer-count">
                    <div className="edit-title">Количество правильных ответов:</div>
                    <RadioGroup className="radio-group" onChange={(isMulty) => setIsMultipleAnswers(Boolean(isMulty))} vertical="true">
                        <RadioButton
                            rootColor={'#aeaeae'}
                            value=''
                            checked={!isMultipleAnswers}
                        >
                            Один
                        </RadioButton>
                        <RadioButton
                            rootColor={'#aeaeae'}
                            value='true'
                            checked={isMultipleAnswers}
                        >
                            Несколько
                        </RadioButton>
                    </RadioGroup>
                </div>
                <div className="options">
                    <fieldset className="test-options-block">
                        <legend>
                            Добавьте варианты ответа и отметьте правильные.
                        </legend>
                        <CheckboxGroup
                            answers={answerVariants}
                            setAnswers={setAnswerVariants}
                        />
                    </fieldset>
                </div>
            </div>
            <Button
                className={cl('test-save-btn', 'btn')}
                variant="contained"
                onClick={handleSaveOneTestQuestion}
                disabled={!isTestExist}
            >
                Сохранить настройки теста
            </Button>
        </div>
    )
}
export default TestAnswerEditor;