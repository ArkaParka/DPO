import './Module.scss';
import cl from "classnames";
import {Form} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {createModule} from "../../../api/CoursesAPI";
import _ from 'lodash';
import TextEditor from "../../TextEditor/TextEditor";
import EditorState from "draft-js/lib/EditorState";

function Module(
    {
        courseId,
        // TODO: Исправить порядок в модулях и курсах,
        // TODO: его можно взять из самого объекта модуля
        order= 0,
        module = {
            name: 'Новый модуль',
            description: '',
            content: '<p>Содержимое нового модуля</p>'
        },
        isNewModule = false
    }) {

    const [name, setName] = useState(module.name);
    const [description, setDescription] = useState(module.description);
    const [content, setContent] = useState(module.content || '<p>Содержимое нового модуля</p>');

    async function handleModuleSaveChanges() {
        if (!name.trim() || !description.trim()) {
            alert('Поле не может быть пустым');
            return;
        }

        let newModule = Object.assign(module, {
            courseId: courseId,
            name: name,
            description: description,
            content: content,
            order: order
        });

        console.log(newModule);
        if (isNewModule) {
            let resp = await createModule(newModule);
            console.log('resp', resp);
        }
        cleanState();
    }

    function cleanState() {
        setName('Новый модуль');
        setDescription('');
        setContent('<p>Содержимое нового модуля</p>');
    }

    return (
        <section className={cl('module')}>
            <Form>
                <Form.Group className="mb-3" controlId="module-name">
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="module-description">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Дополнительное описание'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        cols="30"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="module-content">
                    <TextEditor
                        setValue={setContent}
                        value={content}
                        title='Содержимое модуля'
                    />
                </Form.Group>
                <Button
                    className={cl('module-save-btn', 'btn')}
                    onClick={handleModuleSaveChanges}
                    variant="contained"
                >
                    {
                        isNewModule ? 'Сохранить модуль' : 'Сохранить изменения'
                    }
                </Button>
            </Form>
        </section>
    );
}

export default Module;
