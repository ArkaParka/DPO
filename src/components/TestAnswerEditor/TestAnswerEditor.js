import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './TestAnswerEditor.scss';
import {Alert} from "reactstrap";

const answerTypes = {
    one: 'one',
    multi: 'multi'
}

const TestAnswerEditor = ({value, setValue, title}) => {
    // TODO: доделать варианты ответов и multi
    const [answer, setAnswer] = useState('');
    const [answerType, setAnswerType] = useState(answerTypes.one);

    useEffect(() => {
        let items = document.querySelector('.radio-group')?.childNodes;

        if (items) {
            items.forEach(item => {
                item.childNodes[0].childNodes[1].classList.add('item');
            });
        }

    }, []);

    return (
        <div className="task-answer-editor">
            <header className="text-editor-header form-control">
                {title}
            </header>
            <div className="answer-form form-control">
                <div className="test-answer">
                    <div className="edit-title">Количество правильных ответов:</div>
                    <RadioGroup className="radio-group" onChange={setAnswerType} vertical="true">
                        <RadioButton rootColor={'#aeaeae'} value={answerTypes.one} checked={answerType === answerTypes.one}>
                            Один
                        </RadioButton>
                        <RadioButton rootColor={'#aeaeae'} value={answerTypes.multi} checked={answerType === answerTypes.multi}>
                            Несколько
                        </RadioButton>
                    </RadioGroup>
                </div>
                <div className="options">
                    <fieldset className="test-options-block">
                        <legend>
                            Добавьте варианты ответа и отметьте правильные.
                        </legend>
                        <RadioGroup className="radio-group" onChange={setAnswerType}>
                            <Alert variant="primary">
                                <Form.Control
                                    type="text"
                                />
                            </Alert>
                            <RadioButton rootColor={'#aeaeae'} value="file">
                                Файл
                            </RadioButton>
                        </RadioGroup>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
export default TestAnswerEditor;