import './CoursesCard.scss';
import cl from "classnames";
import CardStats from "./CardStats/CardStats";
import CardTitle from "./CardTitle/CardTitle";
import CardText from "./CardText/CardText";
import CardBtn from "./CardBtn/CardBtn";
import {Link} from "react-router-dom";
import React from "react";

function CoursesCard({colour, course}) {
    return (
        <Link
            id='course'
            className={cl('card', colour)}
            to={{
                pathname: 'courses/course',
                data: course,
            }}
        >
            <CardStats courseStats={course.stats}/>
            <CardTitle courseName={course.name}/>
            <CardText courseText={course.text}/>
            <CardBtn/>
        </Link>
    );
}

export default CoursesCard;
