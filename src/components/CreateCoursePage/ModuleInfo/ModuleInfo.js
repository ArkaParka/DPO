import './ModuleInfo.scss';
import cl from "classnames";
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ModuleInfo({moduleName, setModuleName, startDate, setStartDate, stopDate, setStopDate}) {
    function handlerModuleNameChange(e) {
        let newModuleName = e.target.value.trim().slice(0, 64);;

        setModuleName(newModuleName);
    }

    return (
        <section className={cl('module-info')}>
            <div className={cl("module-name")}>
                1. <input type="text" value={moduleName} onChange={handlerModuleNameChange} />
            </div>
            <div className={cl("module-description")}>
                <textarea placeholder='Дополнительное описание' name="" id="" cols="30" rows="1"></textarea>
            </div>
            <div className="date-start-module">
                Начало модуля
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="date-deadline-module">
                Конец модуля
                <DatePicker selected={stopDate} onChange={(date) => setStopDate(date)} />
            </div>
        </section>
    );
}

export default ModuleInfo;
