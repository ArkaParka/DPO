import React from "react";
import noCourseImg from '../../imgs/no-course.png';
import './NoCourses.scss';
import cl from "classnames";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function NoCourses({withBtn = false}) {
    return (
        <div className='no-courses'>
            <img src={noCourseImg} alt="" className="no-courses_img"/>
            <div className="no-courses_text">
                Курсов нет
                {
                    withBtn &&
                    <Link to='/courses'>
                        <Button
                            className={cl('got-to-catalog-btn', 'btn')}
                            variant="contained"
                        >
                            Перейти в каталог
                        </Button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default NoCourses;