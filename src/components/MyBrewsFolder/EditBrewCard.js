import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditBrewCard = ({ editFormData, setEditFormData }) => {
  const [updated, setUpdated] = useState(false);

  // path via Link and useParams, sending entry_id of link clicked on as params
  const params = useParams();

  //get specific entry to populate update form
  useEffect(() => {
    fetch(`https://frozen-everglades-90720.herokuapp.com/api/entries/entry-id/${params.id}`)
      .then((res) => res.json())
      .then((entry) => {
         setEditFormData(entry)
      });
  }, [params.id, setEditFormData]);

  //update editFormData w/ new user input to form
  const handleOnChange = (e) => {
    const { name, value } = e.target; 
    setEditFormData(editFormData => {
      return {
        ...editFormData,
        [name]: value 
      };
    })
  }

  //send updated form data to db
 const handleUpdateSubmit = (e) => {
    e.preventDefault();
    
    fetch(`https://frozen-everglades-90720.herokuapp.com/api/entries/entry-id/${params.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editFormData),
      })
      .then(res => res.json())
      .then(updatedEntry => {
        setEditFormData(updatedEntry)
        setUpdated(updated => !updated)
      })
 }

 const editMsgClassName = updated ? '' : 'hidden';
 
  return (
    <div className="edit-container">
        <div className='edit-form-container'>
            <h2>Edit Your Brew</h2>
            <form className="brew-form" autoComplete='off' onSubmit={handleUpdateSubmit}>

                <label>Brew Name:</label>
                <input type='text'id="name" name="name" value={editFormData.name} onChange={handleOnChange} required/>

                <label>Image URL:</label>
                <input type='text'id="image" name="image_url" value={editFormData.image_url} onChange={handleOnChange} required/>

                <label>Brewery Name:</label>
                <input type='text'id="location" name="location" value={editFormData.location} onChange={handleOnChange} required/>

                <label>Description:</label>
                <input type='text' id="description" name="description" value={editFormData.description} onChange={handleOnChange} required/>

                <button className='submit-btn' type="submit">UPDATE 🍻</button>
                
            </form>

          </div>

            <div id="edit-complete-msg" className={editMsgClassName}>
                <h3>Edit complete!</h3>
                <Link to="/myBrews">
                  <button className='return-to-myBrews'>View My Brews
                  </button>
                </Link>

              </div>

        </div>
  )
}

export default EditBrewCard