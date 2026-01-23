import React from 'react'

const Button = () => {

  let design={backgroundColor:"red", border:"1px solid blue",}
  // let value = 3+3

  const shoutHello=()=>{
    alert(`hello `)
  }
  return (
  
    <button style={design} onClick={()=>shoutHello()}>{"you"}</button>

  )
}

export default Button