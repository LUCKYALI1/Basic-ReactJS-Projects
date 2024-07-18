import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div >
      <p className='bg-black p-4 m-4 text-white text-center '> User : {userid}</p> 
    </div>
  )
}

export default User
