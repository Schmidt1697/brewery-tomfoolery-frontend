import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const BrewCard = ({handleDeleteBrew,user_id, entry_id, checkFavoritedId, name,image,location,description}) => {
    const [isFavorited, setIsFavorited] = useState(false);

    //check if a card on render is already favorited
    if (checkFavoritedId && isFavorited === false){
        setIsFavorited(true);
    }

    const handleFavorite = () => {

        if (!isFavorited) {
            fetch("https://frozen-everglades-90720.herokuapp.com/api/favorites", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({user_id: user_id, entry_id: entry_id
            }),
            })
            
            setIsFavorited((isFavorited) => !isFavorited);
        }
    }

    // Deleting a brew logic:
    function handleDeleteClick(id){
      fetch(`https://frozen-everglades-90720.herokuapp.com/api/entries/entry-id/${id}`,{
      method: "DELETE",
      })
      handleDeleteBrew(id);
    }
  
    const favoritedClassName = isFavorited ? 'favorite-btn favorited' : 'favorite-btn';

    return (
      
        <div className='brew-card'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{location}</p>
            <button className={favoritedClassName} onClick={handleFavorite}>{isFavorited ? "Favorited!" : "Add to Favorites"}</button>
          <Link to={`/myBrews/${entry_id}`}> 
            <button className='edit-btn'>✎</button>
          </Link>
            <button className='delete-btn' onClick={() => handleDeleteClick(entry_id)}>🗑</button>
        </div>
  

    )
}

export default BrewCard
