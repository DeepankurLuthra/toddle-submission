import React from 'react'
import "./Button.css"


const Button = ({icon,color, widthInPercent, fontWeight, disabled, children, onClick}) =>{
  return (
    <button className='button-container' style={{width : `${widthInPercent}%`,
      fontWeight: fontWeight, backgroundColor: disabled ? "#808080" :  color}}
      disabled={disabled} onClick={ onClick && ((event)=>onClick(event))}>
      {!!icon && icon} 
    {children}
    </button>
  )
}

export default Button