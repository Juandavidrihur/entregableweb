import React, { use, useEffect } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import './CharacterDetails.css'

const CharacterDetails = () => {
    const [character, setCharacter] = React.useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => setCharacter(data))
        .catch(err => console.log('Error fetching character details:', err))
    }, [id])


  return (
    <div>
        {character ? (
            <div className='containerPagina characterdetails'>
                <img src={character.image} alt={character.name} />
                <div className='character-info'>
                    <h1>{character.name}</h1>
                    <p><strong>Estado:</strong> {character.status}</p>
                    <p><strong>Especie:</strong> {character.species}</p>
                    <p><strong>Género:</strong> {character.gender}</p>
                    {character.type && <p><strong>Tipo:</strong> {character.type}</p>}
                    <p><strong>Ubicación:</strong> {character.location.name}</p>
                    <button onClick={() => navigate(-1)}>← Volver</button>
                </div>
            </div>
        ) : (
            <p>Cargando...</p>
        )}
    </div>
  )
}

export default CharacterDetails