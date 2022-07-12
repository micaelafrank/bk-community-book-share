import './App.css';
import React, { useState, useEffect } from 'react'
import LogIn from './LogIn'
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NewMember from './NewMember';
import BookList from './BookList';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
        <NavBar user={user} setUser={setUser} />
          <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <NewMember />
          </Route>
          <Route path="/books">
            <BookList books={books}/> 
          </Route>
          <Route path="/me">
            <Profile />
          </Route>
          <Route path="/user">
            {/* <UserList /> */}
          </Route>
          <Route path="/logout">
            {/* <SignOut /> */}
          </Route>
          <Route exact path="/">
            {/* <Home/> */}
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
    </div> 
  );
}
export default App;