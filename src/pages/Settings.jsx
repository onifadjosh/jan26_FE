import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decNum, decNumBydigit, incNum, incNumBydigit } from '../redux/appSlice'

const Settings = () => {
const dispatch = useDispatch()

  const count = useSelector((state)=>state.count)
  const friends = useSelector((state)=>state.friends)


  const [num, setnum] = useState(0)
  return (
    <div>

        <h1>Settings for the layout</h1>

        <input type="number"  onChange={(e)=>setnum(e.target.value)}/>
        <h1>{count}</h1>

        <button onClick={()=>dispatch(incNum())}>increase Num</button>

        <button  onClick={()=>dispatch(decNum())}>decrease Num</button>

        <button onClick={()=>dispatch(incNumBydigit(Number(num)))}>Increase by {num}</button>

        <button onClick={()=>dispatch(decNumBydigit(Number(num)))}>Decrease by {num}</button>
        <hr />



        {friends.map((friend, index)=>(
          <h1 key={index}>
            {index +1}. {friend}
          </h1>
        ))}
    </div>
  )
}

export default Settings