import './Stat/Stat.scss';
import cl from "classnames";
import Stat from "./Stat/Stat";
import { IoMdTime } from "react-icons/io";
import './CardStats.scss';
import {HiOutlineUsers} from "react-icons/hi";

function CardStats({courseStats}) {
    const timeIcon = <IoMdTime />;
    const peopleIcon = <HiOutlineUsers />;

    return (
        <div className={cl('card-stats')}>
            <Stat icon={timeIcon} value={courseStats.hour} />
            <Stat icon={peopleIcon} value={courseStats.count + ' участников'} />
        </div>
    );
}

export default CardStats;
