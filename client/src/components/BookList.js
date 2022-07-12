import FormatPages from "./FormatPages";

function BookList({ books }){

    const bookList = books.map((book) => (
        <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        genre={book.genre.genre}
        description={book.description}
        belongs_to={book.user.id}
        can_claim={book.can_claim}
        />
    ))

    return (
        <>
            <FormatPages />
            <div>
                {bookList}
            </div>
        </>
    )
}

export default BookList; 