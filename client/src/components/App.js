import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // }

  return (
    <div>
        <NavBar user={user} setUser={setUser} />
          <Switch>
          {user} ? <Route path="/login"> : <Route path="/signup"/>
            {user} ? <LogIn /> : <NewMember />
          </Route>
          <Route path="/books">
            <BookList books={books}/> 
          </Route>
          <Route path="/me">
            <Profile />
          </Route>
          <Route path="/user">
            <UserList />
          </Route>
          <Route path="/logout">
            <SignOut />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
    </div> 
  );
}
export default App;