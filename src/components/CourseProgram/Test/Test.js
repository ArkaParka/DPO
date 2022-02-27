import cl from "classnames";
import {Form} from "react-bootstrap";
import Button from '@mui/material/Button';
import {useState} from "react";
import TextEditor from "../../TextEditor/TextEditor";
import TaskAnswerEditor from "../../TaskAnswerEditor/TaskAnswerEditor";
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import TestAnswerEditor from "../../TestAnswerEditor/TestAnswerEditor";

function Test(
    {
        isNewTest = true,
        test = {
            moduleId: "6218b1a528160b846e6f30e9",
            name: "Новый тест",
            description: "Вы можете изменить условие теста в этом поле и указать настройки ниже.",
            order: 0
        }
    }) {
    const [name, setName] = useState(test.name);
    const [description, setDescription] = useState(test.description);

    async function handleTestCreate() {
        if (!name.trim() || !description.trim()) {
            alert('Поле не может быть пустым');
            return;
        }

        let newTest = {
            name: name,
            description: description
        }

        console.log(newTest);
        if (isNewTest) {
            // let resp = await createCourse(newCourse);
            // console.log('resp', resp);
        }
    }

    return (
        <div className={cl('test')}>
            <Form>
                <Form.Group className="mb-3" controlId="test-name">
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="test-description">
                    <TextEditor
                        setValue={setDescription}
                        value={description}
                        title='Тестовая задача | Условие'
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="test-description">
                    <TestAnswerEditor title='Тестовая задача | Настройки' />
                </Form.Group>
            </Form>
            <Button
                className={cl('test-save-btn', 'btn')}
                onClick={handleTestCreate}
                variant="contained"
            >
                Создать тест
            </Button>
        </div>
    );
}

export default Test;