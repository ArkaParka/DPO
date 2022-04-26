import {useState} from "react";
import {courses as coursesList} from "./App.const";

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

    console.log('response', response);
    const data = await response;
        // .json();

    if (data && data.ok) {
        console.log('OK');
         window.location = 'https://web.local.dev/';
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

export const AddNewFilter = (filters, newFilter) => {
    console.log(newFilter)
    return filters
        .filter(filter => filter.name !== newFilter.name)
        .concat(newFilter);
};

export const SortByFilters = (courses, filters) => {
    let name;
    let speciality = 'all';

    filters.forEach(f => {
        switch (f.name) {
            case 'Имя': name = f.value; break;
            case 'Специальность': speciality = f.value; break;
        }
    });

    return courses
        .filter(course => FilterByName(name, course.name))
        .filter(course => FilterBySpeciality(speciality, course.speciality));
};

const FilterByName = (name, courseName) => {
    return ((name && courseName) ?
        (courseName === name || courseName.toLowerCase().includes(name.toLowerCase())) : true) && true;
}

const FilterBySpeciality = (speciality, courseSpeciality) => {
    if (speciality === 'all') return true;
    if (!courseSpeciality) return false;

    return ((speciality && courseSpeciality) ?
        (courseSpeciality === speciality || courseSpeciality.toLowerCase().includes(speciality.toLowerCase())) : true) && true;
}

export const setSelectedOption = (options, callback) => {
    if (options.data) {
        localStorage.setItem('courseName', options.data.name);
        localStorage.setItem('courseText', options.data.text);
        localStorage.setItem('courseStatsHour', options.data.stats.hour);
        localStorage.setItem('courseStatsCount', options.data.stats.count);

        callback({
            name: options.data.name,
            stats: {
                hour: options.data.stats.hour,
                count: options.data.stats.count,
            },
            text: options.data.text,
        });
    }
    else if ( localStorage.getItem('courseName')) {
        callback({
            name: localStorage.getItem('courseName'),
            stats: {
                hour: localStorage.getItem('courseStatsHour'),
                count: localStorage.getItem('courseStatsCount'),
            },
            text: localStorage.getItem('courseText'),
        });
    }

}
