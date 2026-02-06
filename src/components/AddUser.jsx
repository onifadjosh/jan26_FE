import React, { useState } from "react";

const AddUser = ({addTheUser}) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  return (
    <div>
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
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setimage(e.target.value)}
      />

      <button onClick={()=>addTheUser({firstName,lastName, email, image})}>Submit User</button>
    </div>
  );
};

export default AddUser;
