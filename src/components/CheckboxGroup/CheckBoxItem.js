import {Form} from "react-bootstrap";
import {Alert} from "reactstrap";
import {useEffect, useState} from "react";

function CheckBoxItem({item, changeAnswer}) {
    const [isCorrect, setIsCorrect] = useState(item.isCorrect);
    const [value, setValue] = useState(item.answer);

    return (
        <Alert variant="primary">
            <Form.Check
                checked={isCorrect}
                onChange={(e) => {
                    changeAnswer(item.id, Object.assign(item,
                        {
                            isCorrect: !isCorrect
                        }
                    ))
                    setIsCorrect(!isCorrect)
                }}
            />
            <Form.Control
                value={value}
                onChange={(e) => {
                    changeAnswer(item.id, Object.assign(item,
                        {
                            answer: e.target.value
                        }
                    ))
                    setValue(e.target.value)
                }}
                type="text"
                placeholder="Введите текст ответа"
            />
        </Alert>
    );
}

export default CheckBoxItem;