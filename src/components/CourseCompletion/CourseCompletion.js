import './CourseCompletion.scss';
import Sidebar from "../ProSidebar/Sidebar";
import cl from "classnames";
import {useEffect, useState} from "react";
import {getCourse, getCourseModules, getModuleTasks} from "../../api/CoursesAPI";
import {taskTypes} from "../CourseProgram/CourseProgram";
import Module from "./Module/Module";
import Task from "./Task/Task";

export const completionStates = {
    module: 'module-completion',
    task: 'task-completion',
}

function CourseCompletion({}) {
    const [state, setState] = useState(completionStates.module);
    const [taskType, setTaskType] = useState(null);
    const [courseId, setCourseId] = useState('');

    const [module, setModule] = useState(null);
    const [test, setTest] = useState([]);
    const [task, setTask] = useState(null);

    const [modules, setModules] = useState([]);
    const [tasks, setTasks] = useState({});
    const [tests, setTests] = useState({});

    useEffect(async () => {
        if (!courseId) {
            setDefaultData();
            return;
        }

        let modulesResponse = await getCourseModules(courseId);
        setModules(modulesResponse);

        let allTasks = {};
        modulesResponse.forEach((async (module) => {
            let tasksResponse = await getModuleTasks(module.id);
            allTasks[module.id] = tasksResponse;
        }).then(() => {
            setTasks(allTasks);
        }))
    }, [taskType, courseId]);

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
                        "task 2",
                    "description":
                        null,
                    "order":
                        1
                }
            ]
        });
        setTests({
            '1': [
                {
                    "moduleId": "1",
                    "name": "test 1",
                    "description": "string 1",
                    "order": 0
                },
                {
                    "moduleId":
                        "1",
                    "name":
                        "test 2",
                    "description":
                        "string 2",
                    "order":
                        1
                }
            ]
        });
    }

    return (
        <section className={cl('course-program')}>
            <Sidebar data={
                {
                    setState,
                    setTaskType,
                    setModule,
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
                    <Module module={JSON.parse(module) || undefined} />
                }
                {
                    state === completionStates.task && taskType == taskTypes.task &&
                    <Task task={JSON.parse(task) || undefined} />
                }
                {
                    state === completionStates.task && taskType == taskTypes.test &&
                    'Test'
                }
            </div>
        </section>
    );
}

export default CourseCompletion;