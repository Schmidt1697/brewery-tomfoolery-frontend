import NavBar from "./components/NavBar";

//   This layout should wrap every page that a logged in user can see. 
//   It provides common components, like a navbar

 function LoggedInLayout (props) {
    return (
      <div className='content-container'>
        <NavBar username={props.username} id={props.id} handleLogOut={props.handleLogOut}/>
          {props.children}
      </div>
    ); 
   }

   export default LoggedInLayout