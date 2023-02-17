import React from 'react'
import pipette from "./pipette.png"
import picture from "./image.png"
import "./toolsDisplay.css"

export default function ToolsDisplay() {
  return (
    <div>
        <a href="https://www.remove.bg/" target ="_blank" rel="noreferrer"><img src={picture} alt={"remove background icon"}></img></a>
        <a href="https://www.colorzilla.com/" target ="_blank" rel="noreferrer"> <img src={pipette} alt={"colour picker icon"}></img> </a>
    </div>
  )
}
