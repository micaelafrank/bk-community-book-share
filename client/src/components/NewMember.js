
import Form from 'react-bootstrap/Form'

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
            <label htmlFor="username">First and Last Name:</label>
            <input type="text" id="full_name" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="username">Email:</label>
            <input type="text" id="email_address" 
            value={emailAddress} 
            onChange={(e) => setEmailAddress(e.target.value)}
            />

            <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Select your neighborhood and dropbox location:</legend>
            <div class="col-sm-10">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                <label class="form-check-label" for="gridRadios1">
                Park Slope: 253 Flatbush Ave
                </label>
            </div>
            <div class="form-check">
                <input onChange={(e) => setDropbox(e.target.value)} class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                <label class="form-check-label" for="gridRadios2">
                Crown Heights: 409 Lincoln Pl
                </label>
            </div>
            </div>
            </fieldset>            
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" 
            value={username} 
            onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input type="text" id="password_confirmation" 
            value={passwordConfirmation} 
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button type="submit">Submit</button>
        </Form>
    )
}