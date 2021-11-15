import './CoursesCard.scss';
import cl from "classnames";
import CardStats from "./CardStats/CardStats";
import CardTitle from "./CardTitle/CardTitle";
import CardText from "./CardText/CardText";
import CardBtn from "./CardBtn/CardBtn";

function CoursesCard(props) {
    const {colour, cours} = props;

    return (
        <div className={cl('card', colour)}>
            <CardStats coursStats={cours.stats} />
            <CardTitle coursName={cours.name} />
            <CardText coursText={cours.text} />
            <CardBtn />
        </div>
    );
}

export default CoursesCard;
