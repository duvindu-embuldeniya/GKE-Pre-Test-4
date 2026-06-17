import React from 'react'
import {Link} from 'react-router-dom'

const ButtonComponent = (props) => {
  return (
    <>
        
        <Link to={props.url} className={props.class}>{props.text}</Link>

    </>
  )
}

export default ButtonComponent