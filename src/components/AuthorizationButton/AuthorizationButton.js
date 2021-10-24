import React, {useEffect, useState} from 'react';
import Modal from "../Modal/Modal";
import './AuthorizationButton.scss';


function AuthorizationButton(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState({});

    // const authToken = async () => {
    //     try {
    //         const response = await fetch('https://identity-server.local.dev/connect/token', {
    //             mode: 'no-cors',
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 grant_type: "client_credentials",
    //                 allowed_scopes: "api1",
    //                 client_id: "client",
    //                 client_secret: "secret",
    //             })
    //         });
    //
    //         // const data = await response.json();
    //         // console.log('data', data);
    //         console.log('response', response);
    //     } catch (err) {
    //         console.log('ERROR', err);
    //     }
    // }

    const access_token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg3REYyRUE3NzUxREI2MUM0M0NFNDkzRUExMEVCOTNBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzUwODcyNjYsImV4cCI6MTYzNTA5MDg2NiwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS1zZXJ2ZXIubG9jYWwuZGV2IiwiY2xpZW50X2lkIjoiY2xpZW50IiwianRpIjoiRTA2NjQ2REYyOUQ2N0I3OEEyQzZGQ0YyMkMyMEM1NjciLCJpYXQiOjE2MzUwODcyNjYsInNjb3BlIjpbImFueV9hcGkiXX0.kpdAIVAbNn7CsnaPhz3jivU4SJ1urh9zehAWNGGR0yRseZui0ORvBFOaykbQSsheakmsDN9s2NkI5ThRUdmgyI8cuPNl5kwI1DRsQcPAbG0SNPreXoITl0EZ0Yo8trAV-ZxsJkAbeqP3Md6ihxRRZ6cZe3Wc-at1D5Oi1Zg-9Wo5vefpC8Lv5Zhk3eV5bdunxWyMx1AHVjs6nuOD-xSwQDlXTp18L3gtMYGctZSdn6j3ceiFPHBelmHxZ-gOJqCQpoM-SFVIVN4_xKjIiyviCFIbrHo1tGdUFcK7ejPI98ZJY1OPCAeT8jgDrn8v7gYlVrBF5LFGwBn3-r4r4ib4sg';
    var token = prompt("Please enter your token", access_token);
    useEffect(() => {
        // authToken();
    }, []);

    const openModal = (e) => {
        let newData = {};
        if (e.target.id === 'modal_reg') {
            newData.fields = [
                {value: 'Имя', name: 'firstName'},
                {value: 'Фамилия', name: 'lastName'},
                {value: 'Логин', name: 'username'},
                {value: 'Пароль', name: 'password'},
                {value: 'Email', name: 'email'},
            ];
        } else {
            newData.fields = [
                {value: 'Логин', name: 'username'},
                {value: 'Пароль', name: 'password'},
            ];
        }
        newData.token = token;
        setData(newData);
        setIsModalOpen(true);
    };


    return (
    <button className="authorization-button">
        <div className="authorization-button-icon">
            <svg>
                {/*<use xlink:href="/landing/img/main.svg#icon-user"></use>*/}
            </svg>
        </div>
        <div className="authorization-btn-links">
            <a href="#" id="modal_auth" onClick={openModal}>Вход</a>
            <a href="#" id="modal_reg" onClick={openModal}>Регистрация</a>
            { isModalOpen && <Modal data={data} /> }
        </div>
    </button>
    );
}

export default AuthorizationButton;
