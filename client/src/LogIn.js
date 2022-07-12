function LogIn(){
    const [username, setUserName] = userState(" ");
    const [password, setPassword] = userState(" ");

    function handleSubmit(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST", 
            headers: {"Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        })
        .then((r) => r.json())
        .then(onLogin);
    }
    
    return(
        <>
            <h2>Log In</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username:</label>
                    <input value={username} onChange={(e) => setUserName(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                <NavLink exact to="/signup">New to Plotluck? Become a member!</NavLink>
            </form>
        </>
    )
}

export default LogIn;