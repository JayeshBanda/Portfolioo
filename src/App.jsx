import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Content from "./components/Content";
import Projects from "./components/Projects";
import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import './Preloader.css'
import Name from "./components/Name";
// import Skillset from "./components/Skillset";
import React, { useRef, useState, useEffect } from 'react';
// import JayB from "./JayB.gif"
// import { motion } from "framer-motion";




const App = ()=>{
  //scrollintoview
  const [scrollTarget, setScrollTarget] = useState(null);

  const scrollToElement = (target) => {
    setScrollTarget(target);
  };
  const resetScrollTarget = () => {
    setScrollTarget(null);
  };

//loader
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2100);
  }, []);

//cursor

//  const [mousePosition,setMousePosition]=useState({
//   x:0,
//   y:0
//  })

// useEffect(()=>{
//   const mouseMove=e=>{
//     setMousePosition({
//       x:e.pageX,
//       y:e.pageY
//     });

//   }

//   window.addEventListener("mousemove",mouseMove);
// return ()=>{
//   window.removeEventListener("mousemove", mouseMove)

// }

// },[])
// const variants={
//   default:{
//     x:mousePosition.x -16,
//     y:mousePosition.y-16
//   }
// }
useEffect(()=>{
  const cursor=document.querySelector("#cursor");
  const cursorOutline=document.querySelector("#cursor-outline");
  window.addEventListener("mousemove",function(e){
      const posX = e.clientX;
      const posY = e.clientY;
  
      cursor.style.left = `${posX}px`
      cursor.style.top = `${posY}px`
  
      // cursorOutline.style.left = `${posX}px`
      // cursorOutline.style.top = `${posY}px`
    
      cursorOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`
      },{duration:500,fill:"both"})
  
  })
})


    return (<>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <div className="App">
    <div id="cursor"></div>
    <div id="cursor-outline"></div>
    
   
      {isLoading ? (
        <Preloader />
      ) : (
        // Your main content goes here
        <div className="App">
    <Navbar scrollToElement={scrollToElement} />
    <Name />  
          <ScrollTop/>
    <Content scrollTarget={scrollTarget} resetScrollTarget={resetScrollTarget}/>
    {/* <Skillset scrollTarget={scrollTarget} resetScrollTarget={resetScrollTarget} /> */}
    <Projects scrollTarget={scrollTarget} resetScrollTarget={resetScrollTarget}/>
    <Contact scrollTarget={scrollTarget} resetScrollTarget={resetScrollTarget}/>
        
        
        </div>
      )}
    </div>

    
    </>)
}
export default App;
