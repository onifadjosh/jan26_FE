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

import React, { useState } from "react";

const App = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const [allUsers, setallUsers] = useState([]);

  // [
  //   {},{},{},{}
  // ]

  // const trackFirst=(event)=>{
  //   console.log(event.target.value)
  //   setfirstName(event.target.value)
  // }

  const submitUser = () => {
    let user = {
      firstName,
      lastName,
      email,
      image,
    };

    console.log(user);

    let food = ["eba", "semo", "amala"];
    let newFood = [...food, "rice", "spag"];

    setallUsers([...allUsers, user]); //a copy of the former values and the incoming one.
  };

  return (
    <>
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => setfirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setlastName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setimage(e.target.value)}
      />

      <button onClick={submitUser}>Submit User</button>

      <hr />

      <div className="d-flex gap-3 flex-wrap">
      {allUsers.map((user, index) => (
        <div className="card" style={{width: "18rem"}}  key={index}>
          <img src={user.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.firstName+" "+user.lastName}</h5>
            <p className="card-text">
              {user.email}
            </p>
            <div>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default App;
