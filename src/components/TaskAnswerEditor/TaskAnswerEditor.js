import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './TaskAnswerEditor.scss';
import {answerTypes} from "../CourseProgram/Task/Task";

const TaskAnswerEditor = ({value, setValue, title}) => {
    const [answer, setAnswer] = useState('');

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
                <div className="answer">
                    <div className="edit-title">Верный ответ:</div>
                    <Form.Control
                        type="text"
                        onChange={(e) => setAnswer(e.target.value)}
                        value={answer}
                        placeholder="Ответ на задание"
                    />
                     {/*<Form.Control*/}
                     {/*    type="file"*/}
                     {/*    value={answer}*/}
                     {/*    multiple={answerType === answerTypes.multyfile}*/}
                     {/*    onChange={(e) => setAnswer(e.target.value)}*/}
                     {/*/>*/}
                </div>
                <div className="options">
                    <fieldset className="options-block">
                        <legend
                            title="Как учащиеся могу прислать ответ: прямо в поле ввода в задании или прикрепить файл c текстом ответа">
                            Тип ответа:
                        </legend>
                        <RadioGroup className="radio-group" onChange={setValue} vertical="true">
                            <RadioButton rootColor={'#aeaeae'} value={answerTypes.text} checked={value === answerTypes.text}>
                                Текст
                            </RadioButton>
                            <RadioButton rootColor={'#aeaeae'} value={answerTypes.file} checked={value === answerTypes.file}>
                                Файл
                            </RadioButton>
                            <RadioButton rootColor={'#aeaeae'} value={answerTypes.files} checked={value === answerTypes.files}>
                                Несколько файлов
                            </RadioButton>
                        </RadioGroup>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
export default TaskAnswerEditor;