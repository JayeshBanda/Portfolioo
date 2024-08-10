
import gif1 from './gif1.gif'
import giphy from './giphy.gif'
import gif2 from './gif2.gif'
import React ,{useRef,useState,useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import blob1 from './blob1.svg'
import budgetbuster from './budgetbuster.png'
import flappybird from './flappybird.png'

const Projects=({scrollTarget,resetScrollTarget})=>{
    const elementRef = useRef(null);
    const [setScrollTarget]=useState(null);

    useEffect(()=>{
        if(scrollTarget === 'projectsmain'){
            elementRef.current.scrollIntoView({behaviour:"smooth",grid:"start"})
            Aos.init({once:false});
            resetScrollTarget();
        }
    },[scrollTarget,resetScrollTarget])

    Aos.init()




    return(<>
    <div  className="projectsmain">
    <div className='blob'>
                <img src={blob1} alt="#" />  
                        </div>
                        <div className='blob1'>
                <img src={blob1} alt="#" />  
                        </div>
    <div ref={elementRef} className="title"><h1>Projects</h1></div>
        <div className="projects">
        <div class="grid-item" data-aos="fade-right"><div className='project1' >
               
                 <img src={budgetbuster} alt="#" />
                 
                <div className='p1info'> <h1> BUDGET BUSTER </h1>It is a website designed for a charteresd accountant business, Giving the clients briefing about the business and its acheivements.
 <button className='btn41-43 btn-42' ><a target="_blank" rel="noreferrer" href="https://github.com/JayeshBanda">Know more </a></button></div>
            </div></div>


  <div class="grid-item" data-aos="fade-left"><div className='project1' >
                <img src={gif1} alt="#" />
                <div className='p1info'> <h1>J-store</h1>It is a simple E-commerce website developed using React JS and JSON server.
 <button className='btn41-43 btn-42'><a target="_blank" rel="noreferrer" href="https://github.com/JayeshBanda">Know more </a></button></div>
            </div></div>

  {/* <div class="grid-item" ><div className='project1'>
                <img src={Genshin} alt="#" />
                <div className='p1info'> <h1>Project title </h1>info about the project Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aspernatur! <buttton><a target="_blank" href="https://github.com/JayeshBanda">Know more </a> </button></div>
            </div></div> */}
  {/* <div class="grid-item" ><div className='project1'>
                <img src={Genshin} alt="#" />
                <div className='p1info'> <h1>Project title </h1>info about the project Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aspernatur! <button><a target="_blank" href="https://github.com/JayeshBanda">Know more </a> </button></div>
            </div></div> */}
  <div class="grid-item"data-aos="fade-right" ><div className='project1'>
                <img src={flappybird} alt="#" />
                <div className='p1info'> <h1  h1>Flappy Bird </h1>It is a simple game made with implementation of HTML,CSS and Javascript that is playable in any browser. <button className='btn41-43 btn-42'> <a target="_blank" rel="noreferrer" href="https://github.com/JayeshBanda">Know more </a></button></div>
            </div></div>
  <div class="grid-item" data-aos="fade-left" ><div className='project1'>
                <img src={gif2} alt="#" />
                <div className='p1info'> <h1>Project title </h1>info about the project Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aspernatur! <button className='btn41-43 btn-42'><a target="_blank" rel="noreferrer" href="https://github.com/JayeshBanda">Know more </a> </button></div>
            </div></div>
        </div>

    </div>
        
    
    </>
    )
}
export default Projects;