import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample({children}) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                {children}
            </Alert>
        );
        }
    else{
        return(
        <Button onClick={() => setShow(true)}>Show Alert</Button>
        )
    }
}

export default AlertDismissibleExample;