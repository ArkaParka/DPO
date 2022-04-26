import React, {useEffect, useState} from 'react';
import cl from "classnames";
import {SortByFilters} from "../../../App.utils";
import {Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import courseImg from '../../../imgs/brain.jpg';
import './CoursesCards.scss';
import {getCourseCatalogAll} from "../../../api/CoursesAPI";
import NoCourses from "../../Stubs/NoCourses";

function CoursesCards({filters}) {
    const [courses, setCourses] = useState([]);

    useEffect(async () => {
        const coursesResponse = await getCourseCatalogAll();
        if (Array.isArray(coursesResponse)) {
            setCourses(coursesResponse);
        }
    }, []);

    return (
        <div className={cl('courses-cards')}>
            {
                courses.length && SortByFilters(courses, filters).length ?
                    SortByFilters(courses, filters)
                    .map((course, i) => {
                            let name = course.name || 'Card Title';
                            let description = course.description || `Some quick example text to build on the card title and make up the bulk of
                                            the card's content.`;

                            return (
                                <Card key={i}>
                                    <div className="card-image">
                                        <Link
                                            id='image'
                                            to='/courses/course'
                                        >
                                            <Card.Img variant="top" src={courseImg}/>
                                        </Link>
                                    </div>
                                    <Card.Body>
                                        <div className="card-content">
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                {description}
                                            </Card.Text>
                                        </div>
                                        <Button
                                            className={cl('course-sign-up-btn', 'btn')}
                                            variant="contained"
                                        >
                                            Записаться на курс
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    ) :
                    <NoCourses />
            }
        </div>
    );
}

export default CoursesCards;
