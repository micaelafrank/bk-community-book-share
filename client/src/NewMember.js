import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
// import { Button } from 'bootstrap';
import AlertDismissibleExample from './AlertDismissibleExample';
import { useNavigate } from "react-router-dom";


function NewMember({ renderNewUser}) {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [zip, setZip] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        const user = {
                username,
                zip,
                password,
                name: fullName
        }
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        fetch('/signup', {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
                })
        .then((r) => {
                // setIsLoading(false);
                        if (r.ok) {
                                r.json().then(data=> renderNewUser(data));
                                setFullName("")
                                setUsername("")
                                setPassword("")
                                setPasswordConfirmation("")
                                navigate("/books");
                        }
                else {
                        r.json().then((err) => setErrors(err.errors));
                }
        });
        }

    return (
        <>
                <div id="loginCard" style={{ width: "40rem", padding: "4rem", border: "1px solid black", borderRadius: "6px", margin: "auto" }}>
                        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
                        <p style={{ textAlign: "center",paddingTop:"10px"}}>BECOME A MEMBER IN YOUR NEIGHBORHOOD AND START SHARING AND CLAIMING BOOKS</p>
                        <br></br>
                        <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                        <Form.Label htmlFor="name">First and Last Name:</Form.Label>
                                        <Form.Control type="text" id="name" 
                                        value={fullName} 
                                        onChange={(e) => setFullName(e.target.value)}
                                        />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                        <Form.Label htmlFor="email">Email:</Form.Label>
                                        <Form.Control type="text" id="emailAddress" 
                                        value={emailAddress} 
                                        onChange={(e) => setEmailAddress(e.target.value)}
                                        />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                        <Form.Label htmlFor="zip">Zip Code <i>(Residents in 11215 and 11238 only)</i>:</Form.Label>
                                        <Form.Control type="text" id="zip"
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                        />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                        <Form.Label htmlFor="username">Username:</Form.Label>
                                        <Form.Control type="text" id="username" 
                                        name="username"
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)}
                                        />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                        <Form.Label htmlFor="password">Password:</Form.Label>
                                        <Form.Control type="password" name="password" id="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                        <Form.Label htmlFor="passwordConfirmation">Confirm Password:</Form.Label>
                                        <Form.Control type="password" name="passwordConfirmation" id="passwordConfirmation" 
                                        value={passwordConfirmation} 
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        />
                                </Form.Group>
                                <Form.Group>
                                        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                                </Form.Group>           
                        </Form>
                </div>
                <div>
                        <br></br>                
                        <br></br>
                </div>
        </>
    )}

export default NewMember;