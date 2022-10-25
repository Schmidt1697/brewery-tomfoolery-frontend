import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const GlobalBrewCard = ({entry_id, name, image, location, description, checkFavoritedId, currentId}) => {
    const [isFavorited, setIsFavorited] = useState(false);

    //check if a card on render is already favorited
    if (checkFavoritedId && isFavorited === false){
        setIsFavorited(true);
    }

    const handleFavorite = () => {

        if (!isFavorited) {
            fetch("http://localhost:9292/api/favorites", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({user_id: currentId, entry_id: entry_id
            }),
            })
            
            setIsFavorited((isFavorited) => !isFavorited);
        }
    }

    return (
        <div className='brew-card'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{location}</p>
            <button className='favorite-btn' onClick={handleFavorite}>{isFavorited ? "Favorited!" : "Add to Favorites"}</button>
        </div>

    )
}

export default GlobalBrewCard