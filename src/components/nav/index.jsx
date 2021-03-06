import React, { useState, useEffect} from 'react'
import './nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
      <div className={`nav ${show && 'nav__black'}`}>
        <img
          className="nav__logo"
          // src="https://upload.wikimedia.org/wikipedia/commons/0/0f/" alt="Netflix logo"/>
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
          alt="Netflix logo"
        />
        <img
            className='nav__avatar'
            src='https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1'
            alt='Netflix log'
            />
      </div>
    );
}

export default Nav
