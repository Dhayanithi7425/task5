import React from 'react'
import Egg from './Egg'
const Hen = ({name}) => {
  return (
    <div>
        <h1>Hen</h1>    
      <Egg name={name}/>
    </div>
  )
}

export default Hen
