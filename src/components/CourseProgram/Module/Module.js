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
        courseId= '6216248d8b686a35f1467abf',
        order= 0,
        module = {
            name: 'Новый модуль',
            description: '',
            content: '<p>hi</p>'
        },
        isNewModule = false
    }) {

    const [name, setName] = useState(module.name);
    const [description, setDescription] = useState(module.description);
    const [content, setContent] = useState(module.content);

    async function handleModuleSaveChanges() {
        if (!name || !description) {
            alert('Поле не может быть пустым');
            return;
        }

        let newModule = {
            courseId: courseId,
            name: name,
            description: description,
            content: content,
            order: order
        }

        console.log(JSON.stringify(newModule));
        if (isNewModule) {
            let resp = await createModule(courseId, newModule);
            console.log('resp', resp);
        }
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
                <Form.Group className="mb-3" controlId="module-description">
                    <TextEditor
                        setContent={setContent}
                        content={content}
                    />
                </Form.Group>
                <Button
                    className={cl('save-module-changes', 'btn')}
                    onClick={handleModuleSaveChanges}
                    variant="contained"
                >
                    Сохранить модуль
                </Button>
            </Form>
        </section>
    );
}

export default Module;
