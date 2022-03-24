import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import cl from "classnames";
import {AiFillStar, AiOutlineArrowLeft, AiOutlineMenu} from "react-icons/ai";
import {taskTypes} from "../CourseProgram/CourseProgram";
import {useEffect, useState} from "react";
import {completionStates} from "../CourseCompletion/CourseCompletion";

function Sidebar({data}) {
    const {
        setState,
        setTaskType,
        setTest,
        setTask,
        modules,
        tasks,
        tests,
        setModule
    } = data;
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
    }, [modules])

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
                    modules.length ? modules.map((module, i) => (
                            <SubMenu
                                key={i}
                                title={module.name}
                                onClick={() => {
                                    setState(completionStates.module);
                                    setModule(JSON.stringify(module));
                                }}
                                icon={<AiFillStar />}
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
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setTest(JSON.stringify(test));
                                                setTaskType(taskTypes.test);
                                                setState(completionStates.task);
                                            }}
                                        >
                                            {test.name}
                                        </MenuItem>
                                    )) : null
                                }
                                {
                                    (!tasks[module.id].length && !tests[module.id].length) &&
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