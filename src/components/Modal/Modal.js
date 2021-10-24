function Modal(props) {
    const fields = props.data.fields;

    const onLogin = async () => {
        // const { email, password } = this.props;
        // try {
        //     const response = await axios.post('/login', { email, password });
        //     console.log(response);
        // } catch (err) {
        //     console.log('ERROR');
        // }
        console.log('handleAuthClick');
    };

    const onRegister = async () => {
        const token = 'Bearer ' + (props.data.token);

        try {
            const response = await fetch('https://ocelot.local.dev/api/Users/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        firstName: "FFF",
                        lastName: "GGG",
                        username: "hhhh",
                        password: "string",
                        emailConfirmed: true
                    }
                })
            });
            const data = await response.json();
            console.log('data', data);
        } catch (err) {
            console.log('ERROR');
        }
    };

    return (
        <div className="modal">
            {fields}
        </div>
    );
}

export default Modal;
