import React from 'react'
import "./Button.css"

const Button = ({children,colorScheme,variant, onClick}) => {
  return (
    <button
    data-testid="customButton"
    className={`btn ${colorScheme ||"red" }${variant || "ghost"}`}
    onClick={onClick}
    >
        {children}
        </button>
  )
}

export default Button