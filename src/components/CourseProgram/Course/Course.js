import cl from "classnames";
import {Form} from "react-bootstrap";
import NumericInput from 'react-numeric-input';
import Button from '@mui/material/Button';
import {IconButton} from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {useState} from "react";
import './Course.scss';
import {CgAsterisk} from "react-icons/cg";

function Course(
    {
        professorID = '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        isNewCourse = true,
        course = {
            name: 'Название курса',
            description: '',
            speciality: '',
            hours: 0,
            contentImage: ''
        },
        setCourse
    }) {
    const [name, setName] = useState(course.name);
    const [description, setDescription] = useState(course.description);
    const [speciality, setSpeciality] = useState(course.speciality);
    const [hours, setHours] = useState(course.hours);
    const [contentImage, setContentImage] = useState(course.contentImage);

    async function handleCourseCreate() {
        if (!name.trim() || !description.trim()) {
            alert('Поле не может быть пустым');
            return;
        }

        let newCourse = {
            name: name,
            description: description,
            speciality: speciality,
            professor: professorID,
            hours: hours,
            contentImage: contentImage
        }

        console.log(newCourse);
        setCourse(newCourse);
        if (isNewCourse) {
            // let resp = await createCourse(newCourse);
            // console.log('resp', resp);
        }
    }

    return (
        <div className={cl('course')}>
            <Form>
                <Form.Group className="mb-3" controlId="course-name">
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Название курса"
                    />
                    <div className="note">
                        <CgAsterisk />
                        Максимум 64 символа
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="course-description">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Дополнительное описание'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}/>
                    <div className="note">
                        <CgAsterisk />
                        Максимум 264 символа
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="course-speciality">
                    <Form.Select
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}
                    >
                        <option>Выберите специальность</option>
                        <option value="графика">графика</option>
                        <option value="дизайн">дизайн</option>
                        <option value="сети">сети</option>
                        <option value="безопасность">безопасность</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="course-hours">
                    <Form.Label>На сколько часов рассчитан курс</Form.Label>
                    <br/>
                    <NumericInput
                        className={cl('form-control')}
                        min={0}
                        max={100}
                        value={hours}
                        onChange={(num) => setHours(num)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="course-contentImage">
                    <Form.Label>Установите картинку курса</Form.Label>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                    <Form.Control
                        type="file"
                        value={contentImage}
                        onChange={(e) => setContentImage(e.target.value)}
                    />
                </Form.Group>
            </Form>

            <Button
                className={cl('course-save-btn', 'btn')}
                onClick={handleCourseCreate}
                variant="contained"
            >
                Создать курс
            </Button>
        </div>
    );
}

export default Course;
