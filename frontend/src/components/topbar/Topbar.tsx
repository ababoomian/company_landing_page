import React from 'react'
import './Topbar.css'
export default function Topbar() {
  return (
    
      <>
        <div className="container">
          <div className="circle">
            <p>Picture</p>
          </div>

          <div className="containerUlLi">
            <ul className="ulContainer">
                <li>About Us</li>
                <li>Team</li>
                <li>Serviecs</li>
                <li>Case</li>
            </ul>
          </div>
          <div class="button_div">
            <button>Get Consultration</button>
          </div>
        </div>
      </>
    
  )
}
