import React from "react";

function Profile({ user }){ 

    // const myBooks = user.books 
    // const personalBookList = myBooks.map((book) => {
    //     return(
    //         <li>
    //             {book.title}<br></br>
    //             {book.author} | 
    //             {book.genre}
    //         </li>
    //     )
    // })
    console.log(user)
    return(
        <div style={{marginLeft:"30px"}}>
            <h1>Welcome, {user.username}!</h1>
            <h5>You are signed up in {user.zip}. Your dropbox address is:<br></br>
            {user.dropbox ? user.dropbox.dropbox_location : null}
            </h5>
            {/* <p>So far, you've claimed these books:</p> 
            {personalBookList} */}
            <p>Need help? <a href="fakeemail@gmail.com">Reach out to our support team.</a></p>
        </div>    
    )
}

export default Profile