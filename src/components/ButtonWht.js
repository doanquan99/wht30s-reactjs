import React from 'react'
import './ButtonWht.css'
function ButtonWht({children,background}) {
    return (
        <button className="button" style={{backgroundColor:background ? background : 'unset'}}> 
            {children}
        </button>
    )
}

export default ButtonWht
