import React from 'react';
import './VideoBackground.css'; // Create this CSS file for styling

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
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
        <source src='../../assets/images/cover.mp4' type="video/mp4" autoPlay/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;