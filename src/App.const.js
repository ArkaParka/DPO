export const regModalData = {
    title: 'Регистрация',
    btnText: 'Зарегистрироваться',
    fields: [
        {
            label: {title: 'Имя', message: ''},
            input: {name: 'firstName', type: 'text', placeholder: ''},
            message: '',
        },
        {
            label: {title: 'Фамилия', message: ''},
            input: {name: 'lastName', type: 'text', placeholder: ''},
            message: '',
        },
        {
            label: {title: 'Логин', message: ''},
            input: {name: 'username', type: 'text', placeholder: ''},
            message: '',
        },
        {
            label: {title: 'E-mail', message: 'На этот адрес мы отправим письмо с подтверждением'},
            input: {name: 'email', type: 'email', placeholder: 'myMail@example.com'},
            message: 'Поле E-Mail адрес обязательно для заполнения.',
        },
        {
            label: {title: 'Пароль', message: 'Минимум 6 символов'},
            input: {name: 'password', type: 'password', placeholder: ''},
            message: 'Поле Пароль обязательно для заполнения.',
        },
        {
            label: {title: 'Повторите пароль', message: ''},
            input: {name: 'password_confirmation', type: 'password', placeholder: ''},
            message: 'Это поле обязательно для заполнения',
        },
    ]
};

export const authModalData = {
    title: 'Вход',
    btnText: 'Войти',
    fields: [
        {
            label: {title: 'Логин', message: ''},
            input: {name: 'username', type: 'text', placeholder: ''},
            message: 'Поле Логин обязательно для заполнения.',
        },
        {
            label: {title: 'Пароль', message: ''},
            input: {name: 'password', type: 'password', placeholder: ''},
            message: 'Поле Пароль обязательно для заполнения.',
        },
    ]
};

export const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg3REYyRUE3NzUxREI2MUM0M0NFNDkzRUExMEVCOTNBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzUxNzU3OTIsImV4cCI6MTYzNTE3OTM5MiwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS1zZXJ2ZXIubG9jYWwuZGV2IiwiY2xpZW50X2lkIjoiY2xpZW50IiwianRpIjoiODk1NEE0ODM1NTFFMDM4QTVFQkVDMTc3RTYzQTA2MDQiLCJpYXQiOjE2MzUxNzU3OTIsInNjb3BlIjpbImFueV9hcGkiXX0.oyDZqZ7nAFelMwDa_Wouf7LAxALoomvBV_BKxUOCCWVTC-313Ckir8eJe09pK2OcJG-YeRIp0SebrmINhfnV9_EACflgHQfncL4cD_eMB48jp9JIrICst4_1dL1A77thP5MSzYsoTpYPsECqC7cSbgZyNAA9FaqwGpQhr9qH2lZbPPJlWSrE05lKZpBaUVwf15LMUU6Pu0F0e_OT0Yw1dZiuS1SSL6DFcppr_ZsKi-x4dtIpt0mqXWgKZXPT6OBdBpNncl9VXK5Cvj2a7-bgTKvs5BYVwSclIHglCJy-1-FQTsjvoN9OoHhj5RT99UqCMuShUHcAWKbBCOA6bYf0EA';
export const defaultUser = {
    user: {
        firstName: "string" + Math.random(),
        lastName: "string",
        username: "string",
        password: "string",
        emailConfirmed: true
    }
};

export const colours = ['blue', 'green', 'red', 'yellow'];

export const courseName = 'Основы компьютерных и веб-технологий с Python от Диджитализируй';
export const courseName2 = 'Компьютерная Графика и Дизайн';
export const longCourseName = 'Сети и Кибербезопасность';
export const statHourValue = '16ч';
export const statCountValue = 4;
export const courseText = '\nГлубокая аналитика вашего портфеля\n- любое количество стратегий и портфелей\n- акции, etf, облигации, криптовалюта более 70 000 инструментов\n- идеально для долгосрочных инвесторов\n\n*Автоматическое продление бесплатного тарифа каждые 365 дней\nГлубокая аналитика вашего портфеля\n- любое количество стратегий и портфелей\n- акции, etf, облигации, криптовалюта более 70 000 инструментов\n- идеально для долгосрочных инвесторов\n\n*Автоматическое продление бесплатного тарифа каждые 365 дней';

export const course_1 = {
    id: 'id1',
    name: courseName2,
    stats: {
        hour: statHourValue,
        count: statCountValue,
    },
    text: courseText,
}

export const course_2 = {
    id: 'id2',
    name: longCourseName,
    stats: {
        hour: statHourValue,
        count: statCountValue,
    },
    text: courseText,
}

export const course_3 = {
    id: 'id3',
    name: courseName,
    stats: {
        hour: statHourValue,
        count: statCountValue,
    },
    text: courseText,
}

export const courses = [course_3, course_3, course_2, course_2, course_1, course_3, course_1];

export const coursesFilters = [
    {
        title: 'Специальность',
        options: ['Программная инженерия', 'Информатика и вычислительная техника', 'Экономика'],
    },
];

export const courseProgram = {
    name: courseName,
    description: 'Мы рады видеть вас на курсе «Программирование на Python». В этом вводном уроке мы расскажем вам о том, что вас ждёт, и дадим рекомендации по прохождению курса. Жмите кнопку «вправо», чтобы перейти к следующему шагу.',
    modules: [
        {
            name: 'Модуль 1',
            description: 'Описание модуля',
            startDate: new Date(),
            stopDate: new Date(),
            lessons: [
                {
                    name: 'Урок 1'
                },
                {
                    name: 'Урок 2'
                },
            ]
        }
    ],
}
