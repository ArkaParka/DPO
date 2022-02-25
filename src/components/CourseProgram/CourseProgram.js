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
import Course from "./Course/Course";

const createStates = {
    courseCreate: 'course-create',
    moduleCreate: 'module-create',
    lessonCreate: 'lesson-create',
    moduleRedact: 'module-redact',
    lessonRedact: 'lesson-redact',
}

function CourseProgram({courseId='6218b23a28160b846e6f30f5'}) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [state, setState] = useState(createStates.courseCreate);
    const [modules, setModules] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [module, setModule] = useState(null);
    const [course, setCourse] = useState(null);

    function handleModuleDelete(id) {
        console.log('delete module', id);
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
                        onClick={() => setIsCollapsed(false)}
                        title="Открыть меню"
                    />
                    <MenuItem
                        className={cl('close-menu', {visible: !isCollapsed})}
                        icon={<AiOutlineArrowLeft />}
                        onClick={() => setIsCollapsed(true)}
                        title="Закрыть меню"
                    />
                    <MenuItem
                        icon={<AiOutlinePlus />}
                        onClick={() =>  setState(createStates.courseCreate)}
                        title="Создать курс"
                    >
                        {
                            course ? 'Редактировать курс' : 'Создать курс'
                        }
                    </MenuItem>
                    <SubMenu title="Модули" icon={<BsFillJournalBookmarkFill />}>
                        {
                            modules.length ? modules.map((module, i) => (
                                <MenuItem
                                    key={i}
                                    className={cl('module')}
                                    onClick={() => {
                                        setState(createStates.moduleRedact);
                                        setModule(module);
                                    }}
                                    icon={<AiOutlinePlus onClick={() => handleModuleDelete(module.id)} />}
                                >
                                    {module.name}
                                </MenuItem>
                            )) :
                                <MenuItem className={cl('no-modules')}>Нет модулей</MenuItem>
                        }
                    </SubMenu>
                    <SubMenu title="Задания" icon={<BiTask />}>
                        {
                            lessons.length ? lessons.map((module, i) => (
                                    <MenuItem>Задание {i+1}</MenuItem>
                                )) :
                                <MenuItem className={cl('no-lessons')}>Нет заданий</MenuItem>
                        }
                    </SubMenu>
                    <MenuItem
                        icon={<AiOutlinePlus />}
                        onClick={() => setState(createStates.moduleCreate)}
                        aria-disabled={true}
                    >
                        Создать модуль
                    </MenuItem>
                    <MenuItem
                        icon={<AiOutlinePlus />}
                        onClick={() => setState(createStates.lessonCreate)}
                    >
                        Создать задание
                    </MenuItem>
                </Menu>
            </ProSidebar>
            <div className="course-program-content">
                {
                    state === createStates.courseCreate &&
                    <Course course={course || undefined} isNewCourse={!course} setCourse={setCourse} />
                }
                {
                    state === createStates.moduleCreate &&
                    <Module isNewModule order={modules.length} />
                }
                {
                    state === createStates.moduleRedact &&
                    <Module module={module || undefined} order={module.order} />
                }
                {
                    state === createStates.lessonCreate &&
                    'lesson create'
                }
            </div>
        </section>
    );
}

export default CourseProgram;
