import React from 'react'

const Button = ({title, color, func}) => {
  // console.log(props);
  

  let design={backgroundColor:"red", border:"1px solid blue",}
  // let value = 3+3

  
  return (
  
    <button className={`btn ${color}`} onClick={func}>{title}</button>

  )
}

export default Button