import React from "react";
import cl from "classnames";
import {Card} from "react-bootstrap";

function ModulePreview({module}) {
    return(
        <div className={cl('module-preview')}>
            <Card border="secondary">
                <Card.Header>{module.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {module.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
}

export default ModulePreview;