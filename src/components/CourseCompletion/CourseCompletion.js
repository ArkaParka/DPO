import './CourseCompletion.scss';
import Sidebar from "../ProSidebar/Sidebar";
import cl from "classnames";
import React, {useEffect, useState} from "react";
import {getCourse, getCourseModules, getModuleTasks} from "../../api/CoursesAPI";
import {taskTypes} from "../CourseProgram/CourseProgram";
import Module from "./Module/Module";
import Task from "./Task/Task";
import Test from "./Test/Test";
import Button from "@mui/material/Button";
import {focusOnNextMenuItem} from "react-burger-menu/lib/helpers/dom";
import {getNextActiveElement} from "bootstrap/js/src/util";

export const completionStates = {
    module: 'module-completion',
    task: 'task-completion',
}

function CourseCompletion({}) {
    const [state, setState] = useState(completionStates.module);
    const [taskType, setTaskType] = useState(null);
    const [courseId, setCourseId] = useState('');

    const [module, setOpenModule] = useState(null);
    const [test, setTest] = useState(null);
    const [task, setTask] = useState(null);

    const [modules, setModules] = useState([]);
    const [tasks, setTasks] = useState({});
    const [tests, setTests] = useState({});

    useEffect(async () => {
        let localStorageCourseID = localStorage.getItem('courseId');
        console.log(localStorageCourseID);

        if (localStorageCourseID !== 'undefined') {
            setCourseId(localStorageCourseID);
        }

        if (!courseId) {
            setDefaultData();
            return;
        }

        let modulesResponse = await getCourseModules(courseId);
        setModules(modulesResponse);

        if (modulesResponse.length) {
            setOpenModule(JSON.stringify(modulesResponse[0]));
        }

        let allTasks = {};
        modulesResponse.forEach((async (module) => {
            let tasksResponse = await getModuleTasks(module.id);
            allTasks[module.id] = tasksResponse;
        }).then(() => {
            setTasks(allTasks);
        }))
    }, [taskType, courseId]);

    function goToTheNextPage() {
        const moduleID = JSON.parse(module).id;
        const nextTaskOrder = JSON.parse(task)?.order + 1 || 0;
        const nextTestOrder = JSON.parse(test)?.order + 1 || 0;
        const nextModuleOrder = JSON.parse(module)?.order + 1 || 0;

        const firstTask = tasks[moduleID][0];
        const lastTask = JSON.stringify(tasks[moduleID][tasks[moduleID].length-1]);
        const firstTest = tests[moduleID][0];
        const lastTest = JSON.stringify(tests[moduleID][tests[moduleID].length-1]);


        const nextTask = tasks[moduleID][nextTaskOrder];
        const nextTest = tests[moduleID][nextTestOrder];
        const nextModule = modules[nextModuleOrder];

        // console.log('task', task, firstTask, nextTask)
        const isModuleOpen = state === completionStates.module;
        const isTaskOpen = state === completionStates.task && taskTypes.task;
        const isTestOpen = state === completionStates.task && taskTypes.test;

        console.log('go to module', test, ' ', lastTest, isTestOpen)
        // console.log('task === lastTask', task === lastTask, task, lastTask)
        if (((isModuleOpen && task !== lastTask) || isTaskOpen) && nextTask) {
            setTask(JSON.stringify(nextTask));
            setState(completionStates.task);
            setTaskType(taskTypes.task);
        } else if (task === lastTask && isTaskOpen) {
            setTest(JSON.stringify(firstTest));
            setState(completionStates.task);
            setTaskType(taskTypes.test);
        } else if (isTestOpen && nextTest) {
            console.log('next test')
            setTest(JSON.stringify(nextTest));
            setState(completionStates.task);
            setTaskType(taskTypes.test);
        } else if (test === lastTest && isTestOpen) {
            console.log('go to module', test, lastTest, isTestOpen)
            setOpenModule(JSON.stringify(nextModule));
            setState(completionStates.module);
        } else if (((isModuleOpen && task === lastTask) || isTaskOpen) && !nextTask) {
            setTask(JSON.stringify(firstTask));
            setState(completionStates.task);
            setTaskType(taskTypes.task);
        }

        // if (nextTask) {
        //     setTask(JSON.stringify(nextTask));
        // }  else if (nextTest) {
        //     setTest(JSON.stringify(nextTest));
        // } else if (nextModule) {
        //     setModule(JSON.stringify(nextModule));
        // }
    }

    function setDefaultData() {
        setModules([
            {
                "courseId": "6220a96e28160b846e6f3108",
                "id": "1",
                "name": "Разработка веб-приложений на Node.js",
                "description": "Node.js – современная и востребованная на рынке труда платформа для разработки веб-приложений. Этот курс проведет вас от изучения основ Node.js до создания первого приложения и понимания принципов и паттернов современной разработки на Node.js. В итоге вы получите навыки написания читаемого, тестируемого и поддерживаемого кода (в соответствии с общепринятыми требованиями на рынке коммерческой разработки).\n" +
                    "\n" +
                    "В рамках пяти модулей курса вы познакомитесь с архитектурой Node.js-приложений и возможностями стандартных модулей платформы, изучите фреймворк Koa для создания веб-приложений и протокол OAuth для аутентификации пользователей, а также поработаете с документоориентированной СУБД MongoDB. Для закрепления полученных знаний и навыков планируется создание небольшого многопользовательского веб-приложения «Список дел». Кроме того, вы ознакомитесь с методикой автоматизированного тестирования и будете использовать тесты для проверки правильности работы кода.",
                "order": 0
            },
            {
                "courseId": "6220a96e28160b846e6f3108",
                "id": "1",
                "name": "Разработка веб-приложений на Node.js (Part 2)",
                "description":
                    `           Node.js – современная и востребованная на рынке труда платформа для разработки веб-приложений. Этот курс проведет вас от изучения основ Node.js до создания первого приложения и понимания принципов и паттернов современной разработки на Node.js. В итоге вы получите навыки написания читаемого, тестируемого и поддерживаемого кода (в соответствии с общепринятыми требованиями на рынке коммерческой разработки).
                
            В рамках пяти модулей курса вы познакомитесь с архитектурой Node.js-приложений и возможностями стандартных модулей платформы, изучите фреймворк Koa для создания веб-приложений и протокол OAuth для аутентификации пользователей, а также поработаете с документоориентированной СУБД MongoDB. Для закрепления полученных знаний и навыков планируется создание небольшого многопользовательского веб-приложения «Список дел». Кроме того, вы ознакомитесь с методикой автоматизированного тестирования и будете использовать тесты для проверки правильности работы кода.`,
                "order": 0
            },
            {
                "courseId": "6220a96e28160b846e6f3108",
                "id": "1",
                "name": "Повторяем основные конструкции языка Python",
                "description": null,
                "content": '<div id="ember2703" class="html-content rich-text-viewer ember-view" data-processed="">\x3C!----><span><h2 style="text-align: center;">Повторяем основные конструкции языка Python</h2>\n\n<p>Друзья, приветствуем вас на курсе-продолжении "Python для продвинутых". Мы с вами прошли много тем&nbsp;по основам программирования в рамках&nbsp;<a href="https://stepik.org/course/58852/syllabus" rel="noopener noreferrer nofollow">предыдущего курса</a>,&nbsp;и можно двигаться дальше. Как только повторим изученное. Все ли запомнилось?</p>\n\n<p>Предлагаем задачи на пройденные темы:</p>\n\n<ul>\n\t<li>ввод-вывод данных;</li>\n\t<li>типы данных;</li>\n\t<li>условный оператор;</li>\n\t<li>циклы;</li>\n\t<li>строки;</li>\n\t<li>списки;</li>\n\t<li>функции.</li>\n</ul>\n\n<p>Задачи будут и простые (для разогрева) и такие, где нужно очень хорошо подумать и выстроить алгоритм. Постарайтесь решить&nbsp;их все 🙂.</p>\n\n<p>Если какая-то задача вызовет у вас затруднения, не сдавайтесь сразу. Подумайте еще раз, используйте лучший инструмент для отладки –&nbsp;среду программирования или листок с ручкой, если надо понять работу алгоритма. Ну, а если уж совсем никак, посмотрите подсказку или&nbsp;вкладку "решение". И конечно, помните про нашу поддержку. Используйте комментарии и форум для прояснения своего вопроса. Удачи! Дорогу осилит идущий, а программирование освоит решающий!</p>\n\n<h2 style="text-align: right;"><strong>Made with&nbsp;💛 by&nbsp;BEEGEEK</strong></h2></span></div>',
                "order": 0
            }
        ]);
        setTasks({
            '1': [
                {
                    "moduleId": "1",
                    "expirationDate": "0001-01-01T00:00:00Z",
                    "id": "62275bd028160b846e6f3141",
                    "name": "Вопрос по Node.js",
                    "description": 'Можете ли вы объяснить разницу между readFile и createReadStream в Node.js?',
                    "order": 0
                },
                {
                    "moduleId":
                        "1",
                    "expirationDate":
                        "0001-01-01T00:00:00Z",
                    "id":
                        "62275bd028160b846e6f3141",
                    "name":
                        "Стек вызовов (Call Stack)",
                    "description":
                        'Что такое стек вызовов и является ли он частью движка V8?',
                    "order":
                        1
                }
            ]
        });
        setTests({
            '1': [
                {
                    "moduleId": "1",
                    "name": "React Quiz Component Demo",
                    "description": "string 1",
                    "order": 0
                },
                {
                    "moduleId":
                        "1",
                    "name":
                        "Simple Quiz",
                    "description":
                        "string 2",
                    "order":
                        1
                }
            ]
        });
        if (modules.length) {
            setOpenModule(JSON.stringify(modules[0]));
        }
    }

    return (
        <section className={cl('course-program', 'course-completion')}>
            <Sidebar data={
                {
                    setState,
                    setTaskType,
                    setModule: setOpenModule,
                    setTest,
                    setTask,
                    modules,
                    tasks,
                    tests
                }
            }/>
            <div className="course-program-content">
                {
                    state === completionStates.module &&
                    <Module module={JSON.parse(module) || undefined}/>
                }
                {
                    state === completionStates.task && taskType == taskTypes.task &&
                    <Task task={JSON.parse(task) || undefined}/>
                }
                {
                    state === completionStates.task && taskType == taskTypes.test &&
                    <Test test={JSON.parse(test) || undefined}/>
                }
                <div className="course-program-content_footer">
                    <Button
                        className={cl('next-btn', 'btn')}
                        onClick={goToTheNextPage}
                        variant="contained"
                    >
                        Дальше
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default CourseCompletion;