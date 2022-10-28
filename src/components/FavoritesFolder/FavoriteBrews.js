import React, { useState, useEffect } from 'react';
import Search from '../Search';
import FaveBrewsList from './FavBrewsList';

const FavoriteBrews = ({id,search,setSearch}) => {
    const [favorites, setFavorites] = useState([]);
 
    //get favorites for specific user
    useEffect(() => {
        fetch(`https://frozen-everglades-90720.herokuapp.com/api/favorited_entries/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setSearch("")
            setFavorites(data)
        })
      }, [id])

      //Search bar logic for favBrews
      const filterFavBrewsCards = favorites.filter((oneFav) => {
        if (oneFav.name.toLowerCase().includes(search.toLowerCase())){
          return true
        } else if(oneFav.location.toLowerCase().includes(search.toLowerCase())) {
          return true
        } else return false
      })
       
      //delete favorite from favorites list
      const handleDeleteFavorite = (id) => {
        const newFavorites = favorites.filter((favorite) => {
          return favorite.id !== id;
        })
        setFavorites(newFavorites);
      }

    return (
        <div className='brews-container'>
          <div className='fav-brews-container'>
              <Search search={search} setSearch={setSearch}/>
              <h1>My Favorites</h1>
              <FaveBrewsList favorites={filterFavBrewsCards} onDelete={handleDeleteFavorite}/>
          </div>
        </div>

    )
}

export default FavoriteBrews