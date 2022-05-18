import React from "react";
import cl from "classnames";
import {Card} from "react-bootstrap";

function AlertPreview({name, description}) {
    return(
        <div className={cl('alert-preview')}>
            <Card border="secondary">
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
}

export default AlertPreview;