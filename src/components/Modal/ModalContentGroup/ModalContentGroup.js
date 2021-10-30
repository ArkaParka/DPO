import './ModalContentGroup.scss';

function ModalContentGroup(props) {
    const {label, input, message, isError, value} = props;

    return (
        <div className="modal-content-group error">
            {
                isError ? <div className="modal-content-group-error"><p>Ошибка</p></div> :
                (
                    <>
                        <div className="modal-content-group-label">
                            <h4>{label.title}</h4>
                            <span>{label.message}</span>
                        </div>

                        <div className="modal-content-group-input">
                            <input
                                value={value}
                                onChange={props.onInputChange}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                className="input_text"
                            />
                        </div>

                        <div className="modal-content-group-message">
                            <span>{message}</span>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default ModalContentGroup;
