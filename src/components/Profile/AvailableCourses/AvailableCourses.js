import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import courseImg from "../../../imgs/brain.jpg";
import Button from "@mui/material/Button";
import cl from "classnames";
import NoCourses from "../../Stubs/NoCourses";
import React, {useState} from "react";
import {courses} from "../../../App.const";

function AvailableCourses({isTeacher}) {
    // TODO: получать их через апишку
    const [availableCourses, setAvailableCourses] = useState(courses);

    return (
        <div className="available-courses">
            {
                availableCourses.length ? availableCourses
                        .map((course, i) => {
                                let name = course.name || 'Card Title';
                                let description = course.description || `Some quick example text to build on the card title and make up the bulk of
                                            the card's content.`;
                                let courseId = course.id;

                                return (
                                    <Link
                                        id='image'
                                        to={isTeacher ? '/create-course-program' : '/course-completion'}
                                    >
                                        <Card
                                            key={i}
                                            onClick={() => {
                                                console.log('hi')
                                                localStorage.setItem('courseId', courseId)
                                            }}
                                        >
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
                                                {
                                                    !isTeacher &&
                                                    <Button
                                                        className={cl('course-sign-out-btn', 'btn')}
                                                        variant="contained"
                                                    >
                                                        Покинуть курс
                                                    </Button>
                                                }
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                )
                            }
                        ) :
                    <NoCourses withBtn/>
            }
        </div>
    );
}

export default AvailableCourses;