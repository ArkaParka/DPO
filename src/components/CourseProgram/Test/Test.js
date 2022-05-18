import cl from "classnames";
import {Carousel, Form} from "react-bootstrap";
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import TextEditor from "../../TextEditor/TextEditor";
import TaskAnswerEditor from "../../TaskAnswerEditor/TaskAnswerEditor";
import Quiz from 'react-quiz-component';
import {quizData} from './quizData';
import TestAnswerEditor, {answerTypes} from "../../TestAnswerEditor/TestAnswerEditor";
import {
    createTask,
    createTest,
    deleteTask,
    deleteTest, getTestQuestions,
    setTestQuestions,
    updateTask,
    updateTest
} from "../../../api/CoursesAPI";
import {createStates} from "../CourseProgram";
import './Test.scss';
import {AiOutlinePlus} from "react-icons/ai";
import {Alert} from "reactstrap";

const defaultDescription = "Вы можете изменить условие теста в этом поле и указать настройки ниже.";
const defaultQuestionAnswers = [
    {
        id: 0,
        answer: "1",
        isCorrect: false
    },
    {
        id: 1,
        answer: "2",
        isCorrect: false
    },
    {
        id: 2,
        answer: "0",
        isCorrect: true
    }
];
const defaultQuestionText = "Сколько ног у ламантин?";

function Test(
    {
        isNewTest = true,
        moduleId,
        order = 0,
        test = {
            id: "62275bd028160b846e6f3141",
            moduleId: "6218b1a528160b846e6f30e9",
            name: "Новый тест",
            description: defaultDescription,
            questions: [
                {
                    id: 0,
                    question: defaultQuestionText,
                    variants: defaultQuestionAnswers,
                    multipleAnswers: false
                }
            ],
            order: 0
        },
        setState
    }) {
    const [name, setName] = useState(test.name);
    const [description, setDescription] = useState(test.description);
    const [questions, setQuestions] = useState([]);
    const [isTestExist, setIsTestExist] = useState(false);

    async function handleTestDelete() {
        await deleteTest(test.id);
        setState(createStates.courseCreate);
    }

    async function handleTestSaveChanges() {
        if (!name.trim() || !description.trim()) {
            alert('Поле не может быть пустым');
            return;
        }

        let newTest = Object.assign(test, {
            name: name,
            description: description,
        });

        console.log('newTest', newTest);
        if (isNewTest) {
            newTest.moduleId = moduleId;
            newTest.order = order;
            let resp = await createTest(newTest);
            console.log(resp);
            setIsTestExist(resp.status == 200)

            let questionOptions = {
                id: '',
                question: '',
                // variants: testAnswers,
                // multipleAnswers: answerType === answerTypes.multi
            }

            let newTestWithOptions = Object.assign(newTest, questionOptions);
            console.log(resp);
            cleanState();
        } else {
            let resp = await updateTest(newTest);
        }
    }

    function addNewQuestionInTest() {
        const newQuestion = {
            id: questions.length,
            question: defaultQuestionText,
            variants: defaultQuestionAnswers,
            multipleAnswers: false
        };
        console.log(newQuestion)

        let newQuestions = questions.slice();
        newQuestions.push(newQuestion);
        setQuestions(newQuestions);
        console.log(newQuestions)
    }

    function cleanState() {
        setName("Новый тест");
        setDescription(defaultDescription);
    }

    async function onTestUpdate(newQuestionsArray) {
        setQuestions(newQuestionsArray);

        const newTestConfig = {
            testId: test.id,
            questions: questions
        };

        let resp = await setTestQuestions(newTestConfig);
        console.log(resp);
    }

    useEffect(async () => {
        let respQuestions = await getTestQuestions(test.id);
        console.log(respQuestions);
        if (Array.isArray(respQuestions)) {
            setQuestions(respQuestions);
        } else {
            setQuestions([]);
        }
    }, [])

    return (
        <div className={cl('test')}>
            <Form className="test-form">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <Form.Group className="mb-3" controlId="test-name">
                            <Form.Control
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="test-description">
                            <TextEditor
                                setValue={setDescription}
                                value={description}
                                title='Тестовая задача | Условие'
                            />
                        </Form.Group>
                        <Button
                            className={cl('test-save-btn', 'btn')}
                            onClick={handleTestSaveChanges}
                            variant="contained"
                        >
                            {
                                isNewTest ? 'Создать тест' : 'Сохранить изменения'
                            }
                        </Button>
                    </Carousel.Item>
                    {
                        questions?.length &&
                        questions?.map(question => {
                            return (
                                <Carousel.Item key={question.id}>
                                    <Form.Group className="mb-3" controlId="test-description">
                                        <TestAnswerEditor
                                            questionData={question}
                                            questionsArray={questions}
                                            updateTest={onTestUpdate}
                                            isTestExist={isTestExist}
                                            title='Тестовая задача | Настройки'
                                        />
                                    </Form.Group>
                                </Carousel.Item>
                            )
                        })
                    }
                    <Carousel.Item>
                        <Form.Group className='test-new-question'>
                            <Button
                                className={cl('test-new-question-btn', 'btn')}
                                variant="contained"
                                onClick={addNewQuestionInTest}
                            >
                                <AiOutlinePlus/>  Добавить новый вопрос в тест
                            </Button>
                        </Form.Group>
                    </Carousel.Item>
                </Carousel>
            </Form>
            {
                !isNewTest &&
                <Button
                    className={cl('test-delete-btn', 'btn')}
                    onClick={handleTestDelete}
                    variant="contained"
                >
                    Удалить задание
                </Button>
            }
        </div>
    );
}

export default Test;
