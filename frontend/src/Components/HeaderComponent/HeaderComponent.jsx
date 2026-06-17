import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import {Link} from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <>
       <nav className='navbar container pt-3 pb-3 rounded align-items-start'>
            <Link to="/" className='navbar-brand text-light'>Portal 30</Link>

            <div>
                <ButtonComponent url='/login' text='login' class='btn btn-outline-info' />
                &nbsp;
                <ButtonComponent url='/register' text='register' class='btn btn-info' />
            </div>
       </nav>
    </>
  )
}

export default HeaderComponent