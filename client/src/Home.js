import React from 'react'

function Home({ user }) {
   return(
    <>
        {user.username? <h1>Welcome, {user.username}</h1> : <h1>Please login or sign up</h1>}   
    </>
   )
}

export default Home;