
import preload from "./preload.gif"


// const Preloader=()=>{

//     return(
//         <>
//         <div className="loader"><img src={JayB} alt="#" /></div>
//         </>
//     )
// }
// export default Preloader;
// LoadingSpinner.js
import React from 'react';
// import './Preloader.css';

const LoadingSpinner = () => {
  return (
    <div className="loader"><img src={preload} alt="#" /></div>
  );
};

export default LoadingSpinner;
