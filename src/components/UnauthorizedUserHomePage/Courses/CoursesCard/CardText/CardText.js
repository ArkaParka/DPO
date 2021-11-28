import cl from "classnames";
import React, {useState} from "react";
function CardText(props) {
    const {coursText} = props;

    return (
        <div className={cl('card-text')}>
            <p>
                {coursText}
                {/*Глубокая аналитика вашего портфеля<br/>*/}
                {/*- любое количество стратегий и портфелей<br/>*/}
                {/*- акции, etf, облигации, криптовалюта более 70 000 инструментов<br/>*/}
                {/*- идеально для долгосрочных инвесторов<br/>*/}
                {/*<br/>*/}
                {/**Автоматическое продление бесплатного тарифа каждые 365 дней*/}
            </p>
        </div>
    );
}

export default CardText;
