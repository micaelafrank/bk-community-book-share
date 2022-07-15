import Book from "./Book";
import React, { useState, useEffect} from "react";
import CategoryFilter from "./CategoryFilter";

function BookList({ books, updateClaims, setBooks }){
    const [chosenGenre, setGenre] = useState("All");
    // const genreBooks = [...books].sort((book) => book.genre);

    useEffect(() => {
        fetch("/books")
            .then((r) => r.json())
            .then(data => { setBooks(data) })
    }, [])

    const visibleGenres = books.filter(
        (book) => chosenGenre === "All" || book.allGenres === chosenGenre
    ).map((book) => {
        return (
            <Book
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                genre={book.genre.genre}
                description={book.description}
                can_claim={book.can_claim}
                total_acquired_books={book.user.total_acquired_books}
                updateClaims={updateClaims}
                dropBoxAddress={book.dropBoxAddress}
                sold_by={book.sold_by}
                // booksAdmin={book.booksAdmin}
                book={book}
            />
        )
    })
    // console.log(books)

    return (
        <>
            <CategoryFilter chosenGenre={chosenGenre} selectedGenre={setGenre}/>
            <h2 style={{alignItems:"center", textAlign: "center", paddingBottom:"10px", fontFamily:"roboto"}}>Give a book a new shelf life:</h2>
            <div className="container">
                <div className="row row-cols-2 row-cols-md-2 g-4">{visibleGenres}</div>
            </div>
        </>
    )
}


export default BookList; 