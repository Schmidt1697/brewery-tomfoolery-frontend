import './App.css';
// import NavBar from './components/NavBar';
import LoggedInLayout from './LoggedInLayout';
import Home from './components/Home';
import About from './components/About';
import MyBrews from './components/MyBrewsFolder/MyBrews';
import EditBrewCard from './components/MyBrewsFolder/EditBrewCard';
import Login from './components/Login';
import FavoriteBrews from './components/FavoritesFolder/FavoriteBrews';
import GlobalBrews from './components/GlobalBrewsFolder/GlobalBrews';
import {Route, Switch, useHistory} from 'react-router-dom';
import React,{useState} from 'react';

function App() {
  const history = useHistory();
  const [token, setToken] = useState(false);
  const [currentUser, setUser] = useState("");
  const [currentId, setCurrentId] = useState();
  const [search, setSearch]=useState("");
  const [editFormData, setEditFormData] = useState({})

  const handleLogOut = () => {
    setUser("");
    setToken(false);
  }

  // if(!token) {
  //   return <Login setToken={setToken} setUser={setUser} setCurrentId={setCurrentId}/>
  // }

  if(!token) {
    history.push("/login")
  }

  return (
    <div className="App">
      {/* <NavBar username={currentUser} id={currentId} handleLogOut={handleLogOut}/>
        <div className="content-container"> */}
          <Switch>
            <Route exact path="/">
              <LoggedInLayout username={currentUser} id={currentId} handleLogOut={handleLogOut}>
                <Home id={currentId}/>
              </LoggedInLayout>
            </Route>

            <Route exact path="/login">
            <Login setToken={setToken} setUser={setUser} setCurrentId={setCurrentId}/>
            </Route>

            <Route exact path="/about">
              <LoggedInLayout username={currentUser} id={currentId} handleLogOut={handleLogOut}>
                <About />
              </LoggedInLayout>
            </Route>

            <Route exact path="/myBrews">
              <LoggedInLayout username={currentUser} id={currentId} handleLogOut={handleLogOut}>
                <MyBrews 
                  search={search}
                  setSearch={setSearch}
                  id={currentId}
                  editFormData={editFormData}
                />  
              </LoggedInLayout>            
            </Route>

            <Route path="/favorites">
              <LoggedInLayout username={currentUser} id={currentId} handleLogOut={handleLogOut}>
                <FavoriteBrews 
                  id={currentId} 
                  search={search} 
                  setSearch={setSearch}
                />
              </LoggedInLayout>
            </Route>

            <Route exact path="/globalBrews">
              <LoggedInLayout username={currentUser} id={currentId} handleLogOut={handleLogOut}>
                <GlobalBrews 
                  currentId={currentId}
                  search={search}
                  setSearch={setSearch}
                />
               </LoggedInLayout>
            </Route>

            <Route  exact path="/myBrews/:id">
              <LoggedInLayout username={currentUser} id={currentId} handleLogOut={handleLogOut}>
                <EditBrewCard editFormData={editFormData} setEditFormData={setEditFormData}/>
              </LoggedInLayout>
            </Route>
          </Switch>
        {/* </div> */}
    </div>
  );
}

export default App;

// /**
//  * This layout should wrap every page that a logged in user can see. 
//  * It provides common components, like a navbar
//  */
//  function LoggedInLayout (props) {
//   return (
//     <div className='content-container'>
//       <NavBar username={props.currentUser} id={props.currentId} handleLogOut={props.handleLogOut}/>
//         {props.children}
//     </div>
//   ); 
//  }
