import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';

// if user is signed in: 
// add this to nav bar:
// <Navbar.Collapse className="justify-content-end">
//     <Navbar.Text>
//         Signed in as: <a href="#login">Mark Otto</a>
//     </Navbar.Text>
// </Navbar.Collapse>

function NavBar({ user, setUser }) {
    const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser({});
                navigate('/login')
            }
        });


    } return (
        <div style={{ display: "flex", backgroundColor: "orange", color: "white", marginBottom: "2rem" }}>
            <div style={{ padding: "30px", width: "50%", flexDirection: "row" }}>
                <a href="/login" style={{color:"white", textDecoration:"none"}}>
                    <h1 id="title" style={{ fontSize: "4rem" }}>Plotluck</h1>
                    <h3 id="title1" style={{ fontSize: "1.5rem" }}>Community-Centered Book Exchange</h3>
                </a>
            </div>
            <Nav style={{ width: "65%", paddingTop: "30px", paddingRight: "10px" }} className="justify-content-end" activeKey="/login">
                {user.username ? (
                            <Nav.Item style={{paddingRight:"10px"}} className="justify-content-end">
                                <p>Signed in as: {user.username}</p>
                            </Nav.Item>) : null}
                            <Nav.Item>
                                {user.username? <button style={{ color: "black" }} className="navItem" onClick={() => navigate("/books")} >Books</button> : null}
                            </Nav.Item>
                            <Nav.Item>
                                <button style={{ color: "black" }} className="navItem" onClick={()=> navigate("/me")} >Profile</button>
                            </Nav.Item>
                            <Nav.Item>
                                <button style={{ color: "black" }} className="navItem" onClick={() => navigate("/signup")} >Signup</button>
                            </Nav.Item>
                            {user.username ? <div><button onClick={handleLogoutClick}>LOG OUT</button></div> : null}
                        </Nav>
                        <p style={{ paddingBottom: "2rem" }}></p>
                    </div>
                )}

                export default NavBar;




