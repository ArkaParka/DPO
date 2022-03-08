import './Module.scss';
import cl from "classnames";
import {Form} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {createModule, deleteModule, updateModule} from "../../../api/CoursesAPI";
import TextEditor from "../../TextEditor/TextEditor";
import {createStates} from "../CourseProgram";

const defaultContentState = '<p>Содержимое нового модуля</p>';

function Module(
    {
        courseId,
        // TODO: Исправить порядок в модулях и курсах,
        // TODO: его можно взять из самого объекта модуля
        order= 0,
        module = {
            name: 'Новый модуль',
            description: '',
            content: defaultContentState
        },
        isNewModule = false,
        setModules,
        modules,
        setState
    }) {

    const [name, setName] = useState(module.name);
    const [description, setDescription] = useState(module.description);
    const [content, setContent] = useState(module.content || defaultContentState);

    async function handleModuleDelete() {
        await deleteModule(module.id);
        let newModules = modules.slice();
        newModules.splice(module.order, 1);
        setModules(newModules);
        setState(createStates.courseCreate);
    }

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
            setModules(modules.concat(newModule));
            cleanState();
        } else {
            let resp = await updateModule(newModule);
            let changeModules = modules.slice();
            changeModules[module.order] = newModule;
            setModules(changeModules);
            console.log('resp', resp);
        }
    }

    function cleanState() {
        setName('Новый модуль');
        setDescription('');
        setContent(defaultContentState);
    }

    useEffect(() => {
        setName(module.name);
        setDescription(module.description);
        setContent(module.content || defaultContentState);
    }, [module.name, module.description, module.content])

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
                {
                    !isNewModule &&
                    <Button
                        className={cl('module-delete-btn', 'btn')}
                        onClick={handleModuleDelete}
                        variant="contained"
                    >
                        Удалить модуль
                    </Button>
                }
            </Form>
        </section>
    );
}

export default Module;
