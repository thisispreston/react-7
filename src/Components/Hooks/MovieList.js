import React, {useState} from 'react'

const MovieList = props => {
  const [movies, setMovies] = useState([])
  const [input, setInput] = useState('')

  return (
    <div>
      {movies.map(movie => 
        <h2>{movie}</h2>
      )}
      <input 
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={() => setMovies([...movies, input])}
        >
        Add movie to list
      </button>
    </div>
  )
}

export default MovieList
