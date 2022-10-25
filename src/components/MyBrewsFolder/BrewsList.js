import React from 'react';
import { Link } from 'react-router-dom';
import BrewCard from './BrewCard'

const BrewsList = ({currentId, filterMyBrewsCards}) => {
    return (
        <div className='brews-list'>
            {filterMyBrewsCards.map((oneBrewsCard) => (
                <BrewCard 
                    key={oneBrewsCard.id}
                    id={currentId}
                    name={oneBrewsCard.name}
                    image={oneBrewsCard.image_url}
                    location={oneBrewsCard.location}
                    description={oneBrewsCard.description}
                />
            ))}
        </div>

    )
}

export default BrewsList