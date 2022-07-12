import React from 'react';

function Book({title, author, description, genre}) {

    return(
        <div>
            <h1>{title}</h1>
            <h3>{author} | {genre}</h3>
            {/* <h4>Dropbox Location: {user.dropbox.dropbox_location}</h4> */}
            <p>{description}</p>
            {/* <p>Owned by: {username}</p> */}
        </div>
    )
}

export default Book;