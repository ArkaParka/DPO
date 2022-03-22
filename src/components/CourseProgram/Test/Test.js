import cl from "classnames";
import {Form} from "react-bootstrap";
import Button from '@mui/material/Button';
import {useState} from "react";
import TextEditor from "../../TextEditor/TextEditor";
import TaskAnswerEditor from "../../TaskAnswerEditor/TaskAnswerEditor";
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import TestAnswerEditor from "../../TestAnswerEditor/TestAnswerEditor";
import {createTask, createTest, deleteTask, deleteTest, updateTask, updateTest} from "../../../api/CoursesAPI";
import {createStates} from "../CourseProgram";

const defaultDescription = "Вы можете изменить условие теста в этом поле и указать настройки ниже.";

function Test(
    {
        isNewTest = true,
        moduleId,
        test = {
            id: "62275bd028160b846e6f3141",
            moduleId: "6218b1a528160b846e6f30e9",
            name: "Новый тест",
            description: defaultDescription,
            order: 0
        },
        setState
    }) {
    const [name, setName] = useState(test.name);
    const [description, setDescription] = useState(test.description);

    async function handleTestDelete() {
        await deleteTest(test.id);
        setState(createStates.courseCreate);
    }

    async function handleTestSaveChanges() {
        if (!name.trim() || !description.trim()) {
            alert('Поле не может быть пустым');
            return;
        }

        let newTest = Object.assign(test, {
            name: name,
            description: description
        });

        console.log(newTest);
        if (isNewTest) {
            newTest.moduleId = moduleId;
            let resp = await createTest(newTest);
            cleanState();
        } else {
            let resp = await updateTest(newTest);
        }
    }

    function cleanState() {
        setName("Новый тест");
        setDescription(defaultDescription);
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
                onClick={handleTestSaveChanges}
                variant="contained"
            >
                {
                    isNewTest ? 'Создать тест' : 'Сохранить изменения'
                }
            </Button>
            {
                !isNewTest &&
                <Button
                    className={cl('test-delete-btn', 'btn')}
                    onClick={handleTestDelete}
                    variant="contained"
                >
                    Удалить задание
                </Button>
            }
        </div>
    );
}

export default Test;
