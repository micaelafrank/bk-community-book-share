import React from 'react';

function Book({ title, id, author, booksAdmin, description, updateClaims, sold_by, dropBoxAddress, genre, can_claim, total_acquired_books, user}) {
    
    function handleClaim(){
        const booksUpdate = {
            total_acquired_books: total_acquired_books + 1, 
            can_claim: !can_claim,       
        };
        console.log(can_claim)
        // console.log(!can_claim)
        fetch(`/books/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(booksUpdate)
        })
            .then(res => res.json())
            .then((data) => updateClaims(data));
    }
    
    return(
        <div>
            <div className={(can_claim) ? "col" : (booksAdmin ? "claimedBookClassAdmin col" : "claimedBookClass col")}>                
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">By: {author}</p>
                        <p className="card-text" style={{lineHeight:"1"}}>Genre: {genre}</p>
                        <p className="card-text" style={{ lineHeight: "1" }}>Posted by: {sold_by}</p>
                        <p className="card-text" style={{ lineHeight: "1" }}>Dropbox location is: {dropBoxAddress}</p>
                        <p className="card-text">{description}</p>
                        <button onClick={handleClaim}>{can_claim ? "Claim This Book" : "This book is not available to claim"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Book;