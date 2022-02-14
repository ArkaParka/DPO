import './ModuleInfo.scss';
import cl from "classnames";
import {Form} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

function ModuleInfo(
    {
        moduleName,
        setModuleName,
        moduleDescription,
        setModuleDescription,
    }) {

    function handleModuleNameChange(e) {
        let newModuleName = e.target.value.slice(0, 64);
        setModuleName(newModuleName);
    }

    function handleModuleDescriptionChange(e) {
        let newDescription = e.target.value.slice(0, 256);
        setModuleDescription(newDescription);
    }

    return (
        <section className={cl('module-info')}>
            <Form>
                <Form.Group className="mb-3" controlId="module-name">
                    <Form.Control
                        type="text"
                        onChange={handleModuleNameChange}
                        value={moduleName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="module-description">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Дополнительное описание'
                        value={moduleDescription}
                        onChange={handleModuleDescriptionChange}
                        cols="30"
                    />
                </Form.Group>
            </Form>
        </section>
    );
}

export default ModuleInfo;
