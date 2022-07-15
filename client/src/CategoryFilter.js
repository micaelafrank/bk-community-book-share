import React, { useEffect, useState } from "react";

function CategoryFilter({ books, chosenGenre, selectedGenre }) {
    const [genres,setGenres]= useState([])
    const categoriesList = genres.map((item) => {
        const className = item.genre === chosenGenre ? "selected-genre" : null;
        return(
            <button
                key={item.id}
                className={className}
                onClick={() => selectedGenre(item.genre)}>
                {item.genre}
            </button>
        )})
    useEffect(()=>{
        fetch('/genres')
        .then(res=> res.json())
            .then(data => setGenres(data))
    },[])
    return (
        <div className="categories">
            <h5>Filter by Genre:</h5>
            {categoriesList}
        </div>
    );
}

export default CategoryFilter;