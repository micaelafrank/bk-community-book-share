import './App.css';
import React, { useState, useEffect } from 'react'
import LogIn from './LogIn'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewMember from './NewMember';
import BookList from './BookList';
// import Home from './Home';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState({});
  const [books, setBooks] = useState([]);
  // const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then(data => {setBooks(data)})
  }, [])
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, [])

  function renderNewUser(newUser){
    setUser(newUser);
    // setAllUsers([...allUsers, newUser]);
  }

  function updateClaims(claimedBook){
    const updatedBookList = books.map((book) => book.id === claimedBook.id ? claimedBook : book);
    setBooks(updatedBookList);
}
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
        <Route path="/me" element={<Profile user={user} />} />
        <Route path="/signup" element={<NewMember user={user} setUser={setUser} renderNewUser={renderNewUser} />}  />
        <Route path="/books" element={<BookList updateClaims={updateClaims} books={books} setBooks={setBooks} />} />
      </Routes>
    </div>
  )
}
export default App;