// import React, { useState } from 'react'
// import Button from './components/Button'
// import NavBar from './components/NavBar'

// const App = () => {
//   // const [initial, func]=useState(0)
//   const [first, setfirst] = useState(0)
//   const [name, setname] = useState()

//   const incNum=()=>{
//     setfirst(first+1)
//     console.log(first)
//   }
//   return (
//     <div>
//       <NavBar/>
//       <h1 className='hello' >Hi, this is my first react application</h1>

//       <button onClick={incNum}>{first}</button>

//       <button onClick={()=>setname("Josh")}>{name}</button>

//     </div>
//   )
// }

// export default App

// //hooks-> they are helpers in react that perform different functions
// //compontent monitoring, component life cycle, state management etc
// //react hooks mostly start with the word "Use"
// //usestate->state management
// //syntax

// import React, { useState } from "react";
// import Button from "./components/Button";
// import AddUser from "./components/AddUser";
// import DisplayUser from "./components/DisplayUser";

// const App = () => {
 
//   const [allUsers, setallUsers] = useState([]);
  

//   // [
//   //   {},{},{},{}
//   // ]

//   // const trackFirst=(event)=>{
//   //   console.log(event.target.value)
//   //   setfirstName(event.target.value)
//   // }

//   const submitUser = (user) => {
//     // let user = {
//     //   firstName,
//     //   lastName,
//     //   email,
//     //   image,
//     // };

//     console.log(user);

//     let food = ["eba", "semo", "amala"];
//     let newFood = [...food, "rice", "spag"];

//     setallUsers([...allUsers, user]); //a copy of the former values and the incoming one.
//   };

//   const deleteUser=(index)=>{
//     console.log(index);
    
//     const newAllUsers= [...allUsers]

//     newAllUsers.splice(index, 1)

//     setallUsers(newAllUsers)
//   }


//   const editUser=(index, user)=>{
//     // let newData =
//     // {
//     //   firstName,
//     //   lastName,
//     //   email,
//     //   image
//     // }
//     const newAllUsers=[...allUsers]
//     newAllUsers.splice(index,1, user)
//     setallUsers(newAllUsers)
//   }

//   // const shoutHello=()=>{
//   //   alert(`hello `)
//   // }
//   return (
//     <>




//     {/* <Button title="GO" color="btn-success"  func={shoutHello}/>
//     <Button title="STOP" color="btn-danger"/>
//     <Button title="WAIT" color="btn-warning"/>
//     <Button title="DARK" color="btn-dark"/> */}
//      <AddUser addTheUser={submitUser}/>

//       <hr />

      

//      <DisplayUser allUsers={allUsers} editUser={editUser} deleteUser={deleteUser}/>
//     </>
//   );
// };

// export default App;


import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Layout from './pages/Layout'
import Settings from './pages/Settings'
import Effect from './pages/Effect'


const App = () => {
  return (
    <>
    <NavBar/>
        <Routes>
            <Route index element={<Home></Home>}/>
            <Route path='/contact' element={<Contact/>}/>

            <Route path='/about' element={<About/>}/>
            <Route path='/effect' element={<Effect/>}/>

            {/* programattic redirection */}
            <Route path='/me' element={<Navigate to={'/about'}/>}/> 
            <Route path='/sp-contact' element={<Navigate to={'/contact'}/>}/>

            {/* dynamic routing */}
            <Route path='/profile/:username' element={<Profile/>} />


            <Route path='/layout' element={<Layout/>}>
              {/* children routes for the layout */}
              <Route path='settings' element={<Settings/>}/>
            </Route>

            
            
            
            {/*wildcard routing */}
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App
