import './NewLesson.scss';
import cl from "classnames";
import {Card, Form} from "react-bootstrap";
import Button from "@mui/material/Button";

function NewLesson(
    {
        lessonName,
        setLessonName,
        addNewLesson
    }) {

    function handleLessonNameChange(e) {
        let newLessonName = e.target.value.slice(0, 64);
        setLessonName(newLessonName);
    }

    return (
        <Card className={cl('new-lesson-info')}>
            <Form>
                <Form.Group className="mb-3" controlId="lesson-name">
                    <Form.Control
                        placeholder='Введите название нового урока'
                        type="text"
                        value={lessonName}
                        onChange={handleLessonNameChange}
                    />
                </Form.Group>
                <Button
                    className={cl('create-lesson-btn', 'btn')}
                    onClick={addNewLesson}
                    disabled={!lessonName.length}
                    variant="contained"
                >
                    + Создать урок
                </Button>
            </Form>
        </Card>
    );
}

export default NewLesson;
