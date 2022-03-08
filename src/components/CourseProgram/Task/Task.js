import cl from "classnames";
import {Form} from "react-bootstrap";
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import TextEditor from "../../TextEditor/TextEditor";
import TaskAnswerEditor from "../../TaskAnswerEditor/TaskAnswerEditor";

const defaultDescription = "Вы можете изменить условие задания в этом поле и указать настройки ниже.";

function Task(
    {
        isNewTask = false,
        task = {
            moduleId: "6218b1a528160b846e6f30e9",
            name: "Новое задание",
            description: defaultDescription,
            order: 0
        }
    }) {
    const [name, setName] = useState(task.name || '');
    const [description, setDescription] = useState(task.description || defaultDescription);

    useEffect(() => {
        setName(task.name);
        setDescription(task.description || defaultDescription);
    }, [task.name, task.description])

    async function handleTaskCreate() {
        if (!name.trim() || !description.trim()) {
            alert('Поле не может быть пустым');
            return;
        }

        let newTask = {
            name: name,
            description: description
        }

        console.log(newTask);
        if (isNewTask) {
            // let resp = await createCourse(newCourse);
            // console.log('resp', resp);
        }
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
                    <TaskAnswerEditor title='Текстовая задача | Настройки' />
                </Form.Group>
            </Form>
            <Button
                className={cl('task-save-btn', 'btn')}
                onClick={handleTaskCreate}
                variant="contained"
            >
                {
                    isNewTask ? 'Создать задание' : 'Сохранить изменения'
                }
            </Button>
        </div>
    );
}

export default Task;
