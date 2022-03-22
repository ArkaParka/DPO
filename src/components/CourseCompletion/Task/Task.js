import './Task.scss';
import cl from "classnames";
import {Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import React, {useState} from "react";

function Task({task}) {
    const [answer, setAnswer] = useState('');

    function sendAnswer() {
        console.log('answer', answer);
    }

    return (
        <section className={cl('task')}>
            <div className="name">
                {task.name}
            </div>
            <div className="description">
                {task.description}
            </div>
            <div className="answer">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder='Напишите ваш ответ здесь...'
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </div>
            <Button
                className={cl('send-answer-btn', 'btn')}
                onClick={sendAnswer}
                variant="contained"
            >
                Отправить
            </Button>
        </section>
    );
}

export default Task;