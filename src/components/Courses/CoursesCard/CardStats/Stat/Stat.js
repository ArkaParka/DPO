import './Stat.scss';
import cl from "classnames";

function Stat(props) {
    const {icon, value} = props;

    return (
        <div className={cl('stat')}>
            <div className={cl('icon')}>{icon}</div>
            <div className={cl('value')}>{value}</div>
        </div>
    );
}

export default Stat;
