import cl from "classnames";
import {Form} from "react-bootstrap";
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import TextEditor from "../../TextEditor/TextEditor";
import TaskAnswerEditor from "../../TaskAnswerEditor/TaskAnswerEditor";
import {createTask, deleteTask, updateTask} from "../../../api/CoursesAPI";
import './Task.scss';
import {createStates} from "../CourseProgram";

const defaultDescription = "Вы можете изменить условие задания в этом поле и указать настройки ниже.";
export const answerTypes = {
    text: 'Text',
    file: 'File',
    files: 'Files'
}

function Task(
    {
        isNewTask = false,
        moduleId,
        order = 0,
        task = {
            id: "62275bd028160b846e6f3141",
            moduleId: "6218b1a528160b846e6f30e9",
            name: "Новое задание",
            shortDescription: defaultDescription,
            answerType: answerTypes.text,
            order: 0
        },
        setState
    }) {
    const [name, setName] = useState(task.name || "Новое задание");
    const [description, setDescription] = useState(task.description || defaultDescription);
    const [answerType, setAnswerType] = useState(task.answerType);

    useEffect(() => {
        setName(task.name);
        setDescription(task.description || defaultDescription);
    }, [task.name, task.description])

    async function handleTaskDelete() {
        await deleteTask(task.id);
        setState(createStates.courseCreate);
    }

    async function handleTaskSaveChanges() {
        if (!name.trim() || !description.trim()) {
            alert('Поле не может быть пустым');
            return;
        }

        let newTask = Object.assign(task, {
            name: name,
            shortDescription: description,
            answerType: answerType
        });

        console.log('newTask', newTask);
        if (isNewTask) {
            newTask.moduleId = moduleId;
            newTask.order = order;
            let resp = await createTask(newTask);
            console.log('resp', resp);
            cleanState();
        } else {
            let resp = await updateTask(newTask);
        }
    }

    function cleanState() {
        setName("Новое задание");
        setDescription(defaultDescription);
    }

    return (
        <div className={cl('task')}>
            <Form>
                <Form.Group className="mb-3" controlId="task-name">
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="task-description">
                    <TextEditor
                        setValue={setDescription}
                        value={description}
                        title='Текстовая задача | Условие'
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="task-description">
                    <TaskAnswerEditor
                        title='Текстовая задача | Настройки'
                        value={answerType}
                        setValue={setAnswerType}
                    />
                </Form.Group>
            </Form>
            <Button
                className={cl('task-save-btn', 'btn')}
                onClick={handleTaskSaveChanges}
                variant="contained"
            >
                {
                    isNewTask ? 'Создать задание' : 'Сохранить изменения'
                }
            </Button>
            {
                !isNewTask &&
                <Button
                    className={cl('task-delete-btn', 'btn')}
                    onClick={handleTaskDelete}
                    variant="contained"
                >
                    Удалить задание
                </Button>
            }
        </div>
    );
}

export default Task;
