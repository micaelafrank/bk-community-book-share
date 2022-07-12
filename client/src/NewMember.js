
import Form from 'react-bootstrap/Form'
import FormatPages from './FormatPages';

function NewMember({ onLogin }) {
    const [fullName, setFullName] = userState(" ");
    const [emailAddress, setEmailAddress] = userState(" ");
    const [neighborhood, setDropbox] = userState(" ");
    const [username, setUserName] = userState(" ");
    const [password, setPassword] = userState(" ");
    const [passwordConfirmation, setPasswordConfirmation] = userState(" ");

    function handleSubmit(e){
        e.preventDefault();
        fetch("/signup", {
            method: "POST", 
            headers: {"Content-Type": "application/json",
        },
        body: JSON.stringify({
            full_name: fullName,
            email_address: emailAddress,
            neighborhood,
            username,
            password, 
            password_confirmation: passwordConfirmation,
        }),
        })
        .then((r) => r.json())
        .then(onLogin);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="username">First and Last Name:</Form.Label>
                <Form.Control type="text" id="full_name" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control type="text" id="email_address" 
                value={emailAddress} 
                onChange={(e) => setEmailAddress(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="neighborhood">Select your neighborhood and dropbox location:</Form.Label>
                <Form.Check 
                    type={type}
                    id={`park-slope`}
                    label={`Park Slope: 253 Flatbush Ave`}
                    value={neighborhood}
                    onChange={(e) => setDropbox(e.target.value)}
                />

                <Form.Check 
                    type={type}
                    id={`park-slope`}
                    label={`Crown Heights: 409 Lincoln Pl`}
                    value={neighborhood}
                    onChange={(e) => setDropbox(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="username">Username:</Form.Label>
                <Form.Control type="text" id="username" 
                value={username} 
                onChange={(e) => setUserName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password:</Form.Label>
                <Form.Control type="text" id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="password_confirmation">Confirm Password:</Form.Label>
                <Form.Control type="text" id="password_confirmation" 
                value={passwordConfirmation} 
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </Form.Group>
            <button type="submit">Submit</button>
        </Form>
    )
}

export default NewMember;