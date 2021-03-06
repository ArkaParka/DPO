import cl from "classnames";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './CourseProgram.scss';
import {AiOutlineArrowLeft, AiOutlineMenu, AiOutlinePlus} from "react-icons/ai";
import {useEffect, useState} from "react";
import {BsFillJournalBookmarkFill, BsPencilFill} from "react-icons/bs";
import Module from "./Module/Module";
import {
    getCourse,
    getCourseModules,
    getCourseAnnouncements,
    getModuleTasks
} from "../../api/CoursesAPI";
import Course from "./Course/Course";
import Task from "./Task/Task";
import {RadioButton, RadioGroup} from "react-radio-buttons";
import Test from "./Test/Test";
import Announcement from "./Announcement/Announcement";

export const createStates = {
    courseCreate: 'course-create',
    announcementCreate: 'announcement-create',
    moduleCreate: 'module-create',
    taskCreate: 'task-create',
    moduleRedact: 'module-redact',
    taskRedact: 'task-redact',
}

export const taskTypes = {
    task: 'task',
    test: 'test'
}

function CourseProgram({}) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [state, setState] = useState(createStates.courseCreate);
    const [modules, setModules] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [tests, setTests] = useState([]);
    const [test, setTest] = useState([]);
    const [task, setTask] = useState(null);
    const [module, setModule] = useState(null);
    const [course, setAnnouncement] = useState(null);
    const [announcement, setCourse] = useState(null);
    const [taskType, setTaskType] = useState(null);
    const [courseId, setCourseId] = useState(localStorage.getItem('courseIdRedact') || '');
    const [moduleId, setModuleId] = useState('');

    useEffect(async () => {
        if (courseId) {
            let courseResponse = await getCourse(courseId);
            setCourse(JSON.stringify(courseResponse));

            let modules = await getCourseModules(courseId);
            setModules(modules);
        }

        setStyleClass();
    }, [taskType, courseId]);

    function setStyleClass() {
        let items = document.querySelector('.radio-group')?.childNodes;

        if (items) {
            items.forEach(item => {
                item.childNodes[0].childNodes[1].classList.add('item');
            });
        }
    }

    async function handleModuleClick(module) {
        setState(createStates.moduleRedact);
        setModule(JSON.stringify(module));
        let tasksResponse = await getModuleTasks(module.id);
        console.log('tasksResponse', tasksResponse)
        setTasks(tasksResponse);

        let testsResponse = await getModuleTasks(module.id);
        console.log('testsResponse', testsResponse)
        setTests(testsResponse);

        let announcementsResponse = await getCourseAnnouncements(module.id);
        console.log('announcementsResponse', announcementsResponse)
        setAnnouncements(announcementsResponse);
        // setTasks([
        //     {
        //         "moduleId": "62220eb828160b846e6f313b",
        //         "expirationDate": "0001-01-01T00:00:00Z",
        //         "id": "62275bd028160b846e6f3141",
        //         "name": "task 1",
        //         "description": null,
        //         "order": 0
        //     },
        //     {
        //         "moduleId": "62220eb828160b846e6f313b",
        //         "expirationDate": "0001-01-01T00:00:00Z",
        //         "id": "62275bd028160b846e6f3141",
        //         "name": "task 2",
        //         "description": null,
        //         "order": 1
        //     }]);
        // setTests([
        //     {
        //         "moduleId": "62220eb828160b846e6f313b",
        //         "name": "test 1",
        //         "description": "string 1",
        //         "order": 0
        //     },
        //     {
        //         "moduleId": "62220eb828160b846e6f313b",
        //         "name": "test 2",
        //         "description": "string 2",
        //         "order": 1
        //     }
        // ]);
    }


    return (
        <section className={cl('course-program')}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        className={cl('open-menu', {visible: isCollapsed})}
                        icon={<AiOutlineMenu/>}
                        onClick={() => setIsCollapsed(false)}
                        title="?????????????? ????????"
                    />
                    <MenuItem
                        className={cl('close-menu', {visible: !isCollapsed})}
                        icon={<AiOutlineArrowLeft/>}
                        onClick={() => setIsCollapsed(true)}
                        title="?????????????? ????????"
                    />
                    <MenuItem
                        icon={course ? <BsPencilFill/> : <AiOutlinePlus/>}
                        onClick={() => setState(createStates.courseCreate)}
                        title={courseId ? '?????????????????????????? ????????' : '?????????????? ????????'}
                    >
                        {
                            courseId ? '?????????????????????????? ????????' : '?????????????? ????????'
                        }
                    </MenuItem>
                    <SubMenu title="????????????" icon={<BsFillJournalBookmarkFill/>}>
                        {
                            modules.length ? modules.map((module, i) => (
                                    <SubMenu
                                        key={i}
                                        title={module.name}
                                        onClick={() => {
                                            handleModuleClick(module).then(r => r);
                                        }}
                                    >
                                        {
                                            announcements.length ? announcements.map((announcement, i) => (
                                                <MenuItem
                                                    key={i}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setAnnouncement(JSON.stringify(announcement));
                                                        setState(createStates.announcementCreate);
                                                        console.log('announcement', announcement)
                                                    }}
                                                >
                                                    {announcement.name}
                                                </MenuItem>
                                            )) : null
                                        }
                                        {
                                            tasks.length ? tasks.map((task, i) => (
                                                <MenuItem
                                                    key={i}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setTask(JSON.stringify(task));
                                                        setTaskType(taskTypes.task);
                                                        setState(createStates.taskRedact);
                                                        console.log('task', task)
                                                    }}
                                                >
                                                    {task.name}
                                                </MenuItem>
                                            )) : null
                                        }
                                        {
                                            tests.length ? tests.map((test, i) => (
                                                <MenuItem
                                                    key={i}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setTest(JSON.stringify(test));
                                                        setTaskType(taskTypes.test);
                                                        setState(createStates.taskRedact);
                                                        console.log('task', test)
                                                    }}
                                                >
                                                    {test.name}
                                                </MenuItem>
                                            )) : null
                                        }
                                        {
                                            !courseId &&
                                            <MenuItem className={cl('no-tasks')}>?????? ??????????????</MenuItem>
                                        }
                                        {
                                            courseId &&
                                            <MenuItem
                                                icon={<AiOutlinePlus/>}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setState(createStates.taskCreate);
                                                    setTaskType(null);
                                                    setModuleId(module.id);
                                                }}
                                                title="?????????????? ??????????????"
                                            >
                                                ?????????????? ??????????????
                                            </MenuItem>
                                        }
                                    </SubMenu>
                                )) :
                                <MenuItem className={cl('no-modules')}>?????? ??????????????</MenuItem>
                        }
                    </SubMenu>
                    {
                        courseId &&
                        <MenuItem
                            icon={<AiOutlinePlus/>}
                            onClick={() => setState(createStates.moduleCreate)}
                            title="?????????????? ????????????"
                        >
                            ?????????????? ????????????
                        </MenuItem>
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
                    state === createStates.announcementCreate &&
                    <Announcement
                        isNewAnnouncement
                        order={announcements.length}
                        courseId={courseId}
                        setAnnouncements={setAnnouncements}
                        announcements={announcements}
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
                        module={JSON.parse(module) || undefined}
                        order={JSON.parse(module).order}
                        courseId={courseId}
                        setModules={setModules}
                        modules={modules}
                        setState={setState}
                    />
                }
                {
                    state === createStates.taskCreate && !taskType &&
                    <RadioGroup className="create-task radio-group" onChange={setTaskType} vertical="true">
                        <RadioButton rootColor={'#aeaeae'} value={taskTypes.task}>
                            ????????????
                        </RadioButton>
                        <RadioButton rootColor={'#aeaeae'} value={taskTypes.test}>
                            ????????
                        </RadioButton>
                    </RadioGroup>
                }
                {
                    state === createStates.taskCreate && taskType === taskTypes.task &&
                    <Task
                        isNewTask
                        moduleId={moduleId}
                        order={Object.keys(tasks).length}
                    />
                }
                {
                    state === createStates.taskRedact && taskType === taskTypes.task &&
                    <Task
                        task={JSON.parse(task) || undefined}
                        setState={setState}
                    />
                }

                {
                    state === createStates.taskCreate && taskType === taskTypes.test &&
                    <Test
                        isNewTest
                        moduleId={moduleId}
                        order={Object.keys(tests).length}
                    />
                }
                {
                    state === createStates.taskRedact && taskType === taskTypes.test &&
                    <Test
                        test={JSON.parse(test) || undefined}
                        setState={setState}
                    />
                }
            </div>
        </section>
    );
}

export default CourseProgram;
