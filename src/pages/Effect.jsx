import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Effect = () => {
    const [name, setname] = useState("pampam")
    const [number, setnumber] = useState(0)
    const [allProducts, setallProducts] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(()=>{
        console.log("This useEffect ran");

        // return(()=>{
        //     alert("changes may not be saved")
        //component cleanup
        // })

        const makeRequest=async()=>{
            try {
                let response = await axios.get("https://fakestoreapi.com/products")
                console.log(response.data);

                setallProducts(response.data)
                setloading(false)
                
            } catch (error) {
                console.log(error);
                setloading(false)

                
            }
        }

        makeRequest()
    }, [])

    //without dependency array-> it runs onload, when any state changes, it runs again
    //with empty dependency array -> onload it runs, when any state changes it does not run
    //with dependency array that has state-> onload it runs when the state inside the dep array chnages it runs again

    
  return (
    <div>



        <button className='btn btn-dark' onClick={()=>setname("Josh")}>{name}</button>

        <br />
        <br />

        <button className='btn btn-dark' onClick={()=>setnumber(number+1)}>{number}</button>



        {
            loading?<div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>: <div className='d-flex gap-3 flex-wrap'>
            {
                allProducts.map((product, index)=>(
                    <div className="card" style={{width: "18rem"}} key={index}>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{product.category}</h6>
        <p className="card-text">{product.description}</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
                ))
            }
            </div>
        }
    </div>
  )
}

export default Effect