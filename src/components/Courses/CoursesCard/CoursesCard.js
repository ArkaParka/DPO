import './CoursesCard.scss';
import cl from "classnames";
import CardStats from "./CardStats/CardStats";
import CardTitle from "./CardTitle/CardTitle";
import CardText from "./CardText/CardText";
import CardBtn from "./CardBtn/CardBtn";

function CoursesCard(props) {
    const {colour, course} = props;

    return (
        <div className={cl('card', colour)}>
            <CardStats courseStats={course.stats} />
            <CardTitle courseName={course.name} />
            <CardText courseText={course.text} />
            <CardBtn />
        </div>
    );
}

export default CoursesCard;
