import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

const MainComponent = () => {
  return (
    <>
        {/* <HeaderComponent /> */}
        
        <div className='container'>
            <div className='p-5 text-center bg-light-dark'>
                <h1 className='text-light'>Portal</h1>
                <p className='text-light lead'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, deleniti.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, vel.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, dolor?
                </p>
                <ButtonComponent text='Login' class='btn btn-outline-info' />
            </div>
        </div>

        {/* <FooterComponent /> */}

    </>
  )
}

export default MainComponent