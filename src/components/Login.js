import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({setToken, setUser, setCurrentId}) => {
    const history = useHistory();
    const [users, setUsers] = useState([])
    const [formData, setForm] = useState("")                                                                                                                                    

    useEffect(() => {
        fetch(`https://frozen-everglades-90720.herokuapp.com/api/users`)
        .then(res => res.json())
        .then(data => {
          setUsers(data)
        })
        .catch(console.error)
      }, [])
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const usersLowerCase = users.map(element => element.username.toLowerCase())
        if (usersLowerCase.includes(formData.toLowerCase())) {
            setCurrentId(users.find(element => element.username.toLowerCase() === formData.toLowerCase()).id)
            setUser(formData)
            history.push('/');
        } 
        else {
            fetch(`https://frozen-everglades-90720.herokuapp.com/api/users/${formData}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username: formData})
            })
            .then((res) => res.json())
            .then(data => {
                setCurrentId(data.id)
                setUser(formData)
                history.push('/');
            })
            .catch(err => console.error(err))
        }
        setToken(true);
    }

    const handleChange = (e) => {
        setForm(e.target.value)
    }

    return (
        <div className='login-page'>
            <h1>Login to View Brews</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" value={formData} onChange={handleChange}/>
                
                <div>
                    <button className='submit-btn' type="submit">Log In</button>
                </div>
            </form>
        </div>

    )
}

export default Login