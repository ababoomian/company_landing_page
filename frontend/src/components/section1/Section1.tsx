import React from 'react'
import "./Section1.css"
export default function Section1() {
  return (
    <>
        <div class="container">
           <div class="left_side">
            <h1>Customize the design<br /> on the website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim cras egestas ultrices sit ipsum tortor. </p>
            <button>Project consulting</button>
           </div>
           <div className="right_side">
            <img src="../../assets/images/bi_wordpress.png" class="nkar1" alt="" />
            <img src="../../assets/images/bxl_php.png" class="nkar2" alt="" />
            <img src="../../assets/images/bxl_unity.png" class="nkar3" alt="" />
            <img src="../../assets/images/fa-brands_node-js.png" class="nkar4" alt="" />
           </div>
        </div>   
    </>
  )
}
