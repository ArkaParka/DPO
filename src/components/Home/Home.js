import React from "react";
import cl from "classnames";
import './Home.scss';

function Home() {
    return (
        <div className={cl('home-page')}>
            <section className={cl('section-outer')}>
                <div className={cl('home-page-title')}>
                    <div className={cl('title')}>
                        <h1>
                            Получите востребованные знания с помощью курсов Дополнительного профессионального
                            образования
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
