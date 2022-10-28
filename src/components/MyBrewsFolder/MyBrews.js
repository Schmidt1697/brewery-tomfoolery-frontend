import React,{useEffect,useState} from 'react';
import Search from '../Search';
import BrewsList from'./BrewsList'

const MyBrews = ({search,setSearch,id,editFormData}) => {

    const [myBrewsCards,setMyBrewsCards]=useState([])
    
    useEffect(()=>{
        fetch(`https://frozen-everglades-90720.herokuapp.com/api/entries/user/${id}`)
        .then((res) =>res.json())
        .then(data => {
            setSearch("")
            setMyBrewsCards(data)
        })
      },[id, editFormData])

    //Search bar logic for myBrews.  
    const filterMyBrewsCards = myBrewsCards.filter((myBrewsCard) => {
    if (myBrewsCard.name.toLowerCase().includes(search.toLowerCase())){
        return true
    } else if (myBrewsCard.location.toLowerCase().includes(search.toLowerCase())){
        return true
    } else return false
    })
    

    //Logic for deleting a brew:
    function handleDeleteBrew(deleteId){
        const updatedBrewArray=myBrewsCards.filter((oneMyBrewCard) => oneMyBrewCard.id !== deleteId);
        setMyBrewsCards(updatedBrewArray)
    }

    
    return (
        <div className='brews-container'>
            <div className="my-brews-container">
                <Search search={search} setSearch={setSearch}/>
                <h1>My Brews</h1>
                <BrewsList 
                    currentId={id} 
                    filterMyBrewsCards={filterMyBrewsCards} 
                    handleDeleteBrew={handleDeleteBrew} 
                />
            </div>
        </div>

    )
}

export default MyBrews