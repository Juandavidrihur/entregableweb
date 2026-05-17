import React from 'react'
import { useEffect, useState } from 'react'
import './CharacterFilter.css'
import CardCharacter from '../../Components/CardCharacter/CardCharacter.jsx'
import { Link } from 'react-router-dom'

const CharacterFilter = () => {
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [species, setSpecies] = useState([])
  const [selectedSpecies, setSelectedSpecies] = useState('')
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Obtener todos los personajes
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        let allCharacters = []
        let nextUrl = 'https://rickandmortyapi.com/api/character'
        
        // Obtener todas las páginas
        while (nextUrl) {
          const response = await fetch(nextUrl)
          const data = await response.json()
          allCharacters = [...allCharacters, ...data.results]
          nextUrl = data.info.next
        }
        
        setCharacters(allCharacters)
        setFilteredCharacters(allCharacters)
        
        // Extraer especies únicas
        const uniqueSpecies = [...new Set(allCharacters.map(char => char.species))]
        setSpecies(uniqueSpecies.sort())
      } catch (error) {
        console.error('Error fetching characters:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchCharacters()
  }, [])

  // Filtrar personajes cuando cambia la especie seleccionada
  useEffect(() => {
    if (selectedSpecies === '') {
      setFilteredCharacters(characters)
    } else {
      const filtered = characters.filter(character => character.species === selectedSpecies)
      setFilteredCharacters(filtered)
    }
    // Resetear a página 1 cuando cambia el filtro
    setCurrentPage(1)
  }, [selectedSpecies, characters])

  const handleSpeciesChange = (e) => {
    setSelectedSpecies(e.target.value)
  }

  // Calcular paginación
  const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCharacters = filteredCharacters.slice(startIndex, endIndex)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <div className='containerPagina characterfilter'>
      <div className='filter-container'>
        <h1>Filtrar Personajes por Especie</h1>
        
        <div className='filter-select'>
          <label htmlFor='speciesSelect'>Selecciona una especie:</label>
          <select 
            id='speciesSelect' 
            value={selectedSpecies} 
            onChange={handleSpeciesChange}
            className='species-dropdown'
          >
            <option value=''>Todas las especies</option>
            {species.map((specie, index) => (
              <option key={index} value={specie}>
                {specie}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className='loading'>Cargando personajes...</p>
        ) : (
          <div className='filter-results'>
            <p className='results-count'>
              Mostrando {filteredCharacters.length} personaje(s)
            </p>
            
            {filteredCharacters.length === 0 ? (
              <p className='no-results'>No se encontraron personajes con esa especie.</p>
            ) : (
              <>
                <div className='containerCards'>
                  {currentCharacters.map(character => (
                    <Link key={character.id} to={`/character/${character.id}`}>
                    <CardCharacter 
                      key={character.id} 
                      character={character} 
                      image={character.image} 
                      species={character.species} 
                      location={character.location.name} 
                      status={character.status} 
                      name={character.name}
                      gender={character.gender}
                    />
                    </Link>
                  ))}
                </div>

                {/* Paginación */}
                {totalPages > 1 && (
                  <div className='pagination-container'>
                    <button 
                      className='pagination-btn' 
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      ← Anterior
                    </button>

                    <div className='pagination-numbers'>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <button
                          key={pageNumber}
                          className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
                          onClick={() => handlePageClick(pageNumber)}
                        >
                          {pageNumber}
                        </button>
                      ))}
                    </div>

                    <button 
                      className='pagination-btn' 
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Siguiente →
                    </button>
                  </div>
                )}

                <div className='pagination-info'>
                  <p>Página {currentPage} de {totalPages}</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CharacterFilter