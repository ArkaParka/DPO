import {useState} from "react";

export const randomInteger = (max) => {
    let rand = -0.5 + Math.random() * max;
    return Math.round(rand);
}

function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

export const onLogin = async (userData) => {
    const returnUrl = getQueryVariable('ReturnUrl');
    const username = userData.username;
    const password = userData.password;

    const response = await fetch('https://identity-server.local.dev/Account/Login',
        {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password,
                returnUrl
            })
        });

    const data = await response.json();

    if (data && data.isOk) {
         window.location = data.redirectUrl;
    }
};


export const onRegister = async (userData) => {
    // const access_token = 'Bearer ';
    //
    // try {
    //     const response = await fetch('https://ocelot.local.dev/api/Users/register', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Authorization': access_token,
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             user: userData
    //         })
    //     });
    //     const data = await response.json();
    //     console.log('data', data);
    // } catch (err) {
    //     throw new Error('Регистрация пользователя не произошла.', err)
    // }
    return true;
};

export const CheckFilters = (filters, newFilter) => {
    return filters
        .filter(filter => filter.name !== newFilter.name)
        .concat(newFilter);
};

export const SortFilters = (filters) => {
    let name, course;
    filters.forEach(f => {
        switch (f.name) {
            case 'Специальность': name = f.value; break;
            case 'Курс': course = f.value; break;
        }
    });
    return {name, course};
};
