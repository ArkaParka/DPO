import cl from "classnames";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './CourseProgram.scss';
import {AiOutlineArrowLeft, AiOutlineMenu, AiOutlinePlus} from "react-icons/ai";
import {useEffect, useState} from "react";
import {BiTask} from "react-icons/bi";
import {BsFillJournalBookmarkFill, BsPencilFill} from "react-icons/bs";
import Module from "./Module/Module";
import {createCourse, getCourse, getCourseModules} from "../../api/CoursesAPI";
import Course from "./Course/Course";
import Task from "./Task/Task";
import {RadioButton, RadioGroup} from "react-radio-buttons";
import Test from "./Test/Test";

const createStates = {
    courseCreate: 'course-create',
    moduleCreate: 'module-create',
    taskCreate: 'task-create',
    moduleRedact: 'module-redact',
    taskRedact: 'task-redact',
}

const taskTypes = {
    task: 'task',
    test: 'test'
}

function CourseProgram({}) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [state, setState] = useState(createStates.courseCreate);
    const [modules, setModules] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [module, setModule] = useState(null);
    const [course, setCourse] = useState(null);
    const [taskType, setTaskType] = useState(null);
    const [courseId, setCourseId] = useState(localStorage.getItem('courseId') || '');

    function handleModuleDelete(id) {
        console.log('delete module', id);
    }

    useEffect(async () => {
        if (courseId) {
            let courseResponse = await getCourse(courseId);
            console.log(courseId)
            setCourse(JSON.stringify(courseResponse));

            let modules = await getCourseModules(courseId);
            console.log('modules', modules);
            setModules(modules);
        }

        setStyleClass();
    }, [taskType, courseId])

    function setStyleClass() {
        let items = document.querySelector('.radio-group')?.childNodes;

        if (items) {
            items.forEach(item => {
                item.childNodes[0].childNodes[1].classList.add('item');
            });
        }
    }

    return (
        <section className={cl('course-program')}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        className={cl('open-menu', {visible: isCollapsed})}
                        icon={<AiOutlineMenu/>}
                        onClick={() => setIsCollapsed(false)}
                        title="Открыть меню"
                    />
                    <MenuItem
                        className={cl('close-menu', {visible: !isCollapsed})}
                        icon={<AiOutlineArrowLeft/>}
                        onClick={() => setIsCollapsed(true)}
                        title="Закрыть меню"
                    />
                    <MenuItem
                        icon={course ? <BsPencilFill/> : <AiOutlinePlus/>}
                        onClick={() => setState(createStates.courseCreate)}
                        title={courseId ? 'Редактировать курс' : 'Создать курс'}
                    >
                        {
                            courseId ? 'Редактировать курс' : 'Создать курс'
                        }
                    </MenuItem>
                    <SubMenu title="Модули" icon={<BsFillJournalBookmarkFill/>}>
                        {
                            modules.length ? modules.map((module, i) => (
                                    <MenuItem
                                        key={i}
                                        className={cl('module')}
                                        onClick={() => {
                                            setState(createStates.moduleRedact);
                                            setModule(module);
                                        }}
                                        icon={<AiOutlinePlus onClick={() => handleModuleDelete(module.id)}/>}
                                    >
                                        {module.name}
                                    </MenuItem>
                                )) :
                                <MenuItem className={cl('no-modules')}>Нет модулей</MenuItem>
                        }
                    </SubMenu>
                    <SubMenu title="Задания" icon={<BiTask/>}>
                        {
                            tasks.length ? tasks.map((module, i) => (
                                    <MenuItem>Задание {i + 1}</MenuItem>
                                )) :
                                <MenuItem className={cl('no-tasks')}>Нет заданий</MenuItem>
                        }
                    </SubMenu>
                    {
                        courseId &&
                        <>
                            <MenuItem
                                icon={<AiOutlinePlus/>}
                                onClick={() => setState(createStates.moduleCreate)}
                                title="Создать модуль"
                            >
                                Создать модуль
                            </MenuItem>
                            <MenuItem
                                icon={<AiOutlinePlus/>}
                                onClick={() => {
                                    setState(createStates.taskCreate);
                                    setTaskType(null);
                                }}
                                title="Создать задание"
                            >
                                Создать задание
                            </MenuItem>
                        </>
                    }
                </Menu>
            </ProSidebar>
            <div className="course-program-content">
                {
                    state === createStates.courseCreate &&
                    <Course
                        courseId={courseId}
                        setCourseId={setCourseId}
                        isNewCourse={!courseId}
                        course={JSON.parse(course) || undefined}
                        setCourse={setCourse}
                    />
                }
                {
                    state === createStates.moduleCreate &&
                    <Module
                        isNewModule
                        order={modules.length}
                        courseId={courseId}
                        setModules={setModules}
                        modules={modules}
                    />
                }
                {
                    state === createStates.moduleRedact &&
                    <Module
                        module={module || undefined}
                        order={module.order}
                        courseId={courseId}
                    />
                }
                {
                    state === createStates.taskCreate && !taskType &&
                    <RadioGroup className="create-task radio-group" onChange={setTaskType} vertical="true">
                        <RadioButton rootColor={'#aeaeae'} value={taskTypes.task}>
                            Задача
                        </RadioButton>
                        <RadioButton rootColor={'#aeaeae'} value={taskTypes.test}>
                            Тест
                        </RadioButton>
                    </RadioGroup>
                }
                {
                    state === createStates.taskCreate && taskType === taskTypes.task &&
                    <Task />
                }
                {
                    state === createStates.taskCreate && taskType === taskTypes.test &&
                    <Test />
                }
            </div>
        </section>
    );
}

export default CourseProgram;
