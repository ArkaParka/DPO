import cl from "classnames";

function CardText(props) {
    const {courseText} = props;

    return (
        <div className={cl('card-text')}>
            <p>
                {courseText}
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
