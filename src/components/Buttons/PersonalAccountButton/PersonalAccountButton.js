import './PersonalAccountButton.scss';
import cl from "classnames";
import {Link} from 'react-router-dom';

function PersonalAccountButton() {
    return (
        <Link to='/account'>
            <button className={cl('personal-account-btn', 'btn', 'blue')}>
                Личный кабинет
            </button>
        </Link>
    );
}

export default PersonalAccountButton;
