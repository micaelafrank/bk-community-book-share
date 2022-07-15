import React from "react";

function Profile({ user }){
    console.log(user)
    return(
        <div>
            <h1>Welcome, {user.username}!</h1>
            <h5>You are signed up in {user.zip}. Your dropbox address is:<br></br>{user.dropbox ? user.dropbox.dropbox_location : null}</h5>
            <p>So far, you've claimed a total of: {user.total_acquired_books}</p>
            <p>Need help? <a href="fakeemail@gmail.com">Reach out to our support team.</a></p>
        </div>    
    )
}

export default Profile