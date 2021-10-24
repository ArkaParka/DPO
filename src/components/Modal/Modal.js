import './Modal.scss';


function Modal(props) {
    const fields = props.data.fields;

    // const onLogin = async () => {
    //     // const { email, password } = this.props;
    //     // try {
    //     //     const response = await axios.post('/login', { email, password });
    //     //     console.log(response);
    //     // } catch (err) {
    //     //     console.log('ERROR');
    //     // }
    //     console.log('handleAuthClick');
    // };
    //
    // const onRegister = async () => {
    //     const token = 'Bearer ' + (props.data.token);
    //
    //     try {
    //         const response = await fetch('https://ocelot.local.dev/api/Users/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Authorization': token,
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 user: {
    //                     firstName: "FFF",
    //                     lastName: "GGG",
    //                     username: "hhhh",
    //                     password: "string",
    //                     emailConfirmed: true
    //                 }
    //             })
    //         });
    //         const data = await response.json();
    //         console.log('data', data);
    //     } catch (err) {
    //         console.log('ERROR');
    //     }
    // };

    return (
        <div className="modal">
            <div className="modal-overlay"></div>
            <div className="modal-container">
                <div className="modal modal-header">
                    <h2>Регистрация</h2>
                </div>
                <form className="modal-content" method="post" action="https://beatmarket.one/registration"
                      id="registerForm">
                    <input type="hidden" name="_token" value="ZZ7s5fXXbZOFqYOJFd3RFHfCfUhkj9f87bkty3kw" />
                    <input type="hidden" name="localTimeZone" value="3" id="localTimeZoneRegister" />

                        <div className="modal-content-group error">

                            <div className="modal-content-group-label">
                                <h4>E-mail</h4>
                                <span>На этот адрес мы отправим письмо с подтверждением</span>
                            </div>

                            <div className="modal-content-group-input">
                                <input name="email" type="email" placeholder="mymail@example.com" className="input_text" />
                            </div>

                            <div className="modal-content-group-message">
                                <span>Поле E-Mail адрес обязательно для заполнения.</span>
                            </div>

                        </div>

                        <div className="modal-content-group error">

                            <div className="modal-content-group-label">
                                <h4>Пароль</h4>
                                <span>Минимум 6 символов</span>
                            </div>

                            <div className="modal-content-group-input icon">
                                <input name="password" type="password" className="input_text" />
                            </div>

                            <div className="modal-content-group-message">
                                <span>Поле Пароль обязательно для заполнения.</span>
                            </div>
                        </div>
                        <div className="modal-content-group">
                            <div className="modal-content-group-label">
                                <h4>Повторите пароль</h4>
                            </div>
                            <div className="modal-content-group-input icon">
                                <input name="password_confirmation" type="password" className="input_text" />
                            </div>
                            <div className="modal-content-group-message">
                                <span>Это поле обязательно для заполнения</span>
                            </div>
                        </div>


                        <div className="modal-content-group">
                            <div className="modal-content-group-error"><p>Ошибка</p></div>
                        </div>

                        <div className="modal-content-btn">
                            <button className="btn btn_blue">Зарегистрироваться</button>
                        </div>

                        <div className="modal-content-link">
                            <span>Уже есть аккаунт? <strong
                                data-changemodal="modal_auth">Авторизироваться</strong></span>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
