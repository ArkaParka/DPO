import './Stat/Stat.scss';
import cl from "classnames";
import Stat from "./Stat/Stat";
import {IoMdTime, IoPeopleOutline} from "react-icons/all";

function CardStats(props) {
    const {coursStats} = props;
    const timeIcon = <IoMdTime />;
    const peopleIcon = <IoPeopleOutline />;

    return (
        <div className={cl('card-stats')}>
            <Stat icon={timeIcon} value={coursStats.hour} />
            <Stat icon={peopleIcon} value={coursStats.count + ' участников'} />
        </div>
    );
}

export default CardStats;
