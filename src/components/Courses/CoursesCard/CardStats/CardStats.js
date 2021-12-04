import './Stat/Stat.scss';
import cl from "classnames";
import Stat from "./Stat/Stat";
import {IoMdTime, IoPeopleOutline} from "react-icons/all";

function CardStats({courseStats}) {
    const timeIcon = <IoMdTime />;
    const peopleIcon = <IoPeopleOutline />;

    return (
        <div className={cl('card-stats')}>
            <Stat icon={timeIcon} value={courseStats.hour} />
            <Stat icon={peopleIcon} value={courseStats.count + ' участников'} />
        </div>
    );
}

export default CardStats;
