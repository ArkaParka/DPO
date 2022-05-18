import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import cl from "classnames";
import {AiFillStar, AiOutlineArrowLeft, AiOutlineMenu} from "react-icons/ai";
import {taskTypes} from "../CourseProgram/CourseProgram";
import {useEffect, useState} from "react";
import {completionStates} from "../CourseCompletion/CourseCompletion";
import {getTestQuestions} from "../../api/CoursesAPI";
import {MdOutlineAnnouncement} from "react-icons/md";

function Sidebar({data}) {
    const {
        setState,
        setTaskType,
        setTest,
        setTask,
        modules = [],
        tasks = {},
        tests = {},
        setModule,
        announcements = []
    } = data;
    const [isCollapsed, setIsCollapsed] = useState(false);

    async function onTestClick(e, test) {
        e.stopPropagation();
        console.log('test!!!', test);
        let testQuestions = await getTestQuestions(test.id);
        console.log('testQuestions', testQuestions);
        let point = 100 / testQuestions.questions.length;

        const questions = testQuestions.questions.map(question => {
            const answerSelectionType = question.multipleAnswers ? "multiple" : "single";
            const answers = question.variants.map(item => item.answer);
            const correctAnswer = question.multipleAnswers ? [1, 2] : 1;

            return {
                question: question.question,
                questionType: "text",
                questionPic: "",
                answerSelectionType: answerSelectionType,
                answers: answers,
                correctAnswer: correctAnswer,
                messageForCorrectAnswer: "Это правильный ответ!",
                messageForIncorrectAnswer: "Этот ответ не верен.",
                explanation: "",
                point: point
            }
        })

        test.quizConfig = {
            quizTitle: test.name,
            quizSynopsis: test.description,
            nrOfQuestions: testQuestions.length,
            questions: questions
        };
        console.log('test2!!!', test);

        setTest(JSON.stringify(test));
        setTaskType(taskTypes.test);
        setState(completionStates.task);
    }

    useEffect(() => {
        console.log('announcements', announcements)
    })

    return (
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
                {
                    announcements?.length ? (
                        <MenuItem className='announcements'
                            icon={<MdOutlineAnnouncement/>}
                            title="Объявления"
                            onClick={() => {
                                setState(completionStates.announcements);
                            }}
                        >
                            Объявления
                        </MenuItem>
                    ) : null
                }
                {
                    modules?.length ? modules.map((module, i) => (
                            <SubMenu
                                key={i}
                                title={module.name}
                                onClick={() => {
                                    setState(completionStates.module);
                                    setModule(JSON.stringify(module));
                                }}
                                icon={<AiFillStar/>}
                            >
                                {
                                    tasks[module.id]?.length ? tasks[module.id].map((task, i) => (
                                        <MenuItem
                                            key={i}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setTask(JSON.stringify(task));
                                                setTaskType(taskTypes.task);
                                                setState(completionStates.task);
                                            }}
                                        >
                                            {task.name}
                                        </MenuItem>
                                    )) : null
                                }
                                {
                                    tests[module.id]?.length ? tests[module.id].map((test, i) => (
                                        <MenuItem
                                            key={i}
                                            onClick={(e) => onTestClick(e, test)}
                                        >
                                            {test.name}
                                        </MenuItem>
                                    )) : null
                                }
                                {
                                    (!tasks[module.id]?.length && !tests[module.id]?.length) &&
                                    <MenuItem className={cl('no-tasks')}>Нет заданий</MenuItem>
                                }
                            </SubMenu>
                        )) :
                        <MenuItem className={cl('no-modules')}>Нет модулей</MenuItem>
                }
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;