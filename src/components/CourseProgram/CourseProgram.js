import cl from "classnames";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './CourseProgram.scss';
import {AiOutlineArrowLeft, AiOutlineMenu, AiOutlinePlus} from "react-icons/ai";
import {useEffect, useState} from "react";
import {BiTask} from "react-icons/bi";
import {BsFillJournalBookmarkFill} from "react-icons/bs";
import Module from "./Module/Module";
import {getCourseModules} from "../../api/CoursesAPI";
import {TiDelete} from "react-icons/ti";

const createStates = {
    moduleCreate: 'module-create',
    lessonCreate: 'lesson-create',
    moduleRedact: 'module-redact',
    lessonRedact: 'lesson-redact',
}

function CourseProgram({courseId='6216248d8b686a35f1467abf'}) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [state, setState] = useState(createStates.moduleCreate);
    const [modules, setModules] = useState([]);
    const [module, setModule] = useState(null);

    function handleOpenMenu() {
        setIsCollapsed(false)
    }

    function handleCloseMenu() {
        setIsCollapsed(true)
    }

    function handleModuleCreate() {
        setState(createStates.moduleCreate)
    }

    function handleModuleDelete(id) {
        console.log('delete module', id);
    }

    function handleLessonCreate() {
        setState(createStates.lessonCreate)
    }

    useEffect(async () => {
        let modules = await getCourseModules(courseId);
        console.log('modules', modules);
        setModules(modules);
    }, [])

    return (
        <section className={cl('course-program')}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        className={cl('open-menu', {visible: isCollapsed})}
                        icon={<AiOutlineMenu />}
                        onClick={handleOpenMenu}
                    />
                    <MenuItem
                        className={cl('close-menu', {visible: !isCollapsed})}
                        icon={<AiOutlineArrowLeft />}
                        onClick={handleCloseMenu}
                    />
                    <SubMenu title="Модули" icon={<BsFillJournalBookmarkFill />}>
                        {
                            modules.map((module, i) => (
                                <MenuItem
                                    key={i}
                                    className={cl('module')}
                                    onClick={() => {
                                        setState(createStates.moduleRedact);
                                        setModule(module);
                                    }}
                                    icon={<AiOutlinePlus onClick={() => handleModuleDelete(module.id)} />}
                                >
                                    {/*Модуль {i + 1}*/}
                                    {module.name}
                                </MenuItem>
                            ))
                        }
                    </SubMenu>
                    <SubMenu title="Задания" icon={<BiTask />}>
                        <MenuItem>Задание 1</MenuItem>
                        <MenuItem>Задание 2</MenuItem>
                        <MenuItem>Задание 3</MenuItem>
                        <MenuItem>Задание 4</MenuItem>
                        <MenuItem>Задание 5</MenuItem>
                        <MenuItem>Задание 6</MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<AiOutlinePlus />}
                        onClick={handleModuleCreate}
                    >
                        Создать модуль
                    </MenuItem>
                    <MenuItem
                        icon={<AiOutlinePlus />}
                        onClick={handleLessonCreate}
                    >
                        Создать задание
                    </MenuItem>
                </Menu>
            </ProSidebar>
            <div className="course-program-content">
                {
                    state === createStates.moduleCreate &&
                    <Module order={modules.length} />
                }
                {
                    state === createStates.lessonCreate &&
                    'lesson create'
                }
                {
                    state === createStates.moduleRedact &&
                    <Module module={module} order={module.order} />
                }
            </div>
        </section>
    );
}

export default CourseProgram;
