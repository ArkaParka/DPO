import cl from "classnames";
import {Form} from "react-bootstrap";
import NumericInput from 'react-numeric-input';
import Button from '@mui/material/Button';
import './NewCourseCreatePage.scss';
import {IconButton} from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function NewCourseCreatePage({name, description, speciality, hours, contentImage, courseFieldsChange, saveCourse}) {
    return (
        <div className={cl('new-course-page')}>
            <h2>Создание нового курса</h2>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Название курса</Form.Label>
                    <Form.Control type="text" onChange={courseFieldsChange} value={name} placeholder="Название курса" />
                    <div className="note">Максимум 64 символа</div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={courseFieldsChange} value={description}/>
                    <div className="note">Максимум 264 символа</div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="speciality">
                    <Form.Label>Специальность</Form.Label>
                    <Form.Select
                        value={speciality}
                        onChange={courseFieldsChange}
                    >
                        <option>Выберите специальность</option>
                        <option value="графика">графика</option>
                        <option value="дизайн">дизайн</option>
                        <option value="сети">сети</option>
                        <option value="безопасность">безопасность</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="hours">
                    <Form.Label>На сколько часов рассчитан курс</Form.Label>
                    <br/>
                    <NumericInput min={0} max={100} value={hours} onChange={courseFieldsChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contentImage">
                    <Form.Label>Установите картинку курса</Form.Label>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                    <Form.Control type="file"
                                  value={contentImage}
                                  onChange={courseFieldsChange}
                    />
                </Form.Group>
            </Form>

            <Button
                className={cl('course-save-btn')}
                onClick={() => saveCourse()}
                variant="contained"
            >
                Создать курс
            </Button>
        </div>
    );
}

export default NewCourseCreatePage;
