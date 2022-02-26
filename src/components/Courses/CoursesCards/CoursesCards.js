import React from 'react';
import cl from "classnames";
import {courses as coursesList} from "../../../App.const";
import {SortByFilters} from "../../../App.utils";
import {Card} from "react-bootstrap";
import Button from '@mui/material/Button';
import courseImg from '../../../imgs/brain.jpg';
import './CoursesCards.scss';

function CoursesCards({filters}) {
    let courses = SortByFilters(coursesList, filters);

    return (
        <div className={cl('courses-cards')}>
            {
                courses
                    .map((course, i) => {
                            let name = course.name || 'Card Title';
                            let description = course.description || `Some quick example text to build on the card title and make up the bulk of
                                            the card's content.`;

                            return (
                                <Card key={i} >
                                    <div className="card-image">
                                        <Card.Img variant="top" src={courseImg}/>
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
                    )
            }
        </div>
    );
}

export default CoursesCards;
