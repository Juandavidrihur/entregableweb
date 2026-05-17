import React from 'react'
import { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import CardCharacter from '../../Components/CardCharacter/CardCharacter.jsx'

const Home = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching characters:', error))
  }, [])

  return (
    <div className='containerPagina characters'>
      {characters.length === 0 ? (
        <p>Cargando personajes...</p>
      ) : 
      <div className='containerCards'>
        {characters.map(character => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <CardCharacter character={character} image={character.image} species={character.species} location={character.location.name} status={character.status} name={character.name} gender={character.gender}/>
          </Link>
        ))}
      </div>
}
    </div>

  )
}

export default Home