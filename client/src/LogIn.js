import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function LogIn({ setUser, user }){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    
    function handleChange(e) {
        const { name, value } = e.target
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }))
        console.log(name, value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target)
        console.log(formData)
        fetch('/login', {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        }).then(res => {
            if (res.ok) {
                res.json().then((user) => setUser(user))
                console.log(user)
                navigate('/books');
            } 
            else {
                res.json().then(errors => {
                    console.error(errors)
                })
            }
    })}
    return(
        <>
            <p style={{textAlign: 'center', margin:"25px", paddingLeft:"100px", paddingRight:"100px"}}>Sign up and discover your next favorite book just a stroll away... Environmentally friendly and free of cost, Plot Luck allows members to digitally access a "library" created by the very community around you. Browse through a local selection, claim your next read, and pick it up at your neighborhood dropbox. Contribute to your community by passing along stories of your own and listing them through your profile</p>
            <div id="loginCard" style={{ width:"23rem", padding:"30px", border:"1px solid black", borderRadius: "6px", margin:"auto"}}>
                <h2 style={{textAlign:"center"}}>Log In</h2>
                <br></br>
            <form onSubmit={handleSubmit} style={{ paddingTop:".5rem"}}>
                    <div className="mb-3">
                        <label className="form-label">Username:</label>
                        <input name="username" value={formData.username} onChange={handleChange} type="text" className="form-control" id="signin-username" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input name="password" value={formData.password} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                        <button style={{ marginBottom:"20px", marginTop:"20px"}} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <nav>
                        <button style={{ color: "black" }} className="navItem" onClick={() => navigate("/signup")} >New to Plotluck? Become a member!</button>
                        {/* <NavLink exact to="/signup">New to Plotluck? Become a member!</NavLink> */}
                    </nav>
            </div>
        </>
    )
}

export default LogIn