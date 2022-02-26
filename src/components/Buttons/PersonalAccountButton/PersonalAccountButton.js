import './PersonalAccountButton.scss';
import cl from "classnames";
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";

function PersonalAccountButton() {
    return (
        <Link to='/account'>
            <Button
                className={cl('personal-account-btn', 'btn')}
                variant="contained"
            >
                Личный кабинет
            </Button>
        </Link>
    );
}

export default PersonalAccountButton;
