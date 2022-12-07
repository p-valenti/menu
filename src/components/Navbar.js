import React from 'react'

export const Navbar = ({onRouteChange}) => {
  return (
    <nav>
        <a href='#2'> Home</a>
        <div>
            <a onClick={() => onRouteChange("Menu") } href="#0">
                Menu
            </a>
            <a onClick={() => onRouteChange("Recipes") } href="#1">
                Recipes
            </a>
        </div>
    </nav>
  )
}
