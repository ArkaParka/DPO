// import * as Oidc from '../node_modules/oidc-client';
const config = {
    authority: "https://identity-server.local.dev",
    client_id: "react-client",
    redirect_uri: "https://web.local.dev/callback.html",
    response_type: "code",
    scope:"any_api",
    post_logout_redirect_uri: "https://web.local.dev/index.html"
};

// const mgr = new Oidc.UserManager(config);

// mgr.getUser().then(function (user) {
//     if (user) {
//         console.log("User logged in", user.profile);
//     }
//     else {
//         console.log("User not logged in");
//     }
// });

export const onLogin = async () => {
    // await mgr.signinRedirect();
    // console.log('mgr', mgr);
};


export const onRegister = async (userData) => {
    const access_token = 'Bearer ';

    try {
        const response = await fetch('https://ocelot.local.dev/api/Users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: userData
            })
        });
        const data = await response.json();
        console.log('data', data);
    } catch (err) {
        throw new Error('Регистрация пользователя не произошла.', err)
    }
};
