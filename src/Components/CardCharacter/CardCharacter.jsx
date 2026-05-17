import React from 'react'
import './CardCharacter.css'

const CardCharacter = ({ image, name, species, location, status, gender }) => {
  return (
    <div className="card-character">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
        <div className={`status-badge ${status?.toLowerCase()}`}>
          {status}
        </div>
      </div>
      
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        
        <div className="card-info">
          <div className="info-item">
            <span className="info-label">Especie:</span>
            <span className="info-value">{species}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Ubicación:</span>
            <span className="info-value">{location}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Género:</span>
            <span className="info-value">{gender}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCharacter