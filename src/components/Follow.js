import React from 'react';
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa';

 
function Follow() {
  return (   
    <div className="follow flex items-center py-5 px-8 xl:pl-20 mb-15 absolute">

      <div className="follow-text mr-5">
        <h3 className>Follow Microsoft</h3>
      </div>

    <div className="socialIcons flex">
      <FaFacebookSquare className="mr-2 text-4xl text-blue-900"/>
      <FaTwitterSquare className="mr-2 text-4xl text-blue-400" />
      <FaLinkedin className="mr-2 text-4xl text-blue-600"/>
    </div>

  </div>
  )
}

export default Follow;
