import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import resume from './resume.pdf'
import React, { useRef,useState } from 'react';
import Skillset from "./Skillset";





const Content = ({scrollTarget,resetScrollTarget})=>{
    const elementRef = useRef(null);
    const [ setScrollTarget] = useState(null);

    useEffect(() => {
        if (scrollTarget === 'content-main') {
          elementRef.current.scrollIntoView({ behavior: 'smooth' });
          Aos.init({once: false });
          resetScrollTarget();
        }
      }, [scrollTarget, resetScrollTarget]);
      Aos.init()


    return(<>
     <div ref={elementRef}  className="content-main " >
        <section>
        <section>
            
            <div  className="About" data-aos="fade-right">
                <h2>About...</h2>
                <span><b> Hello! I'm <b>Jayesh Banda</b> a passionate web developer with a keen eye for design and a love for clean, functional code. Specializing in crafting user-friendly and visually appealing websites, I bring creativity and technical expertise to every project. Let's collaborate to bring your digital vision to life!</b></span>
            </div><section>
            <div className="lower" data-aos="fade-up">
                {/* <div className="left"> <img src="https://www.fegno.com/wp-content/uploads/2022/03/web-development-company-in-kochi.gif" alt="#" /></div> */}
                <div className="right"> <span><b><button type="button"> <a className='btn41-43 btn-42'
        href={resume}
        download="resume"
        target="_blank"
        rel="noreferrer"
      ><b> Resume⇛</b></a></button><br />
</b></span></div>
            </div>  
        </section>
        
        
        </section>
        <section>
            <div className="upper" data-aos="fade-left">
                <div><span><b className="up"> Passion for Front-End </b><br /><br />
<b>
Front-end development is where I thrive. I have a strong understanding of HTML, CSS, and JavaScript, and I love the process of turning design concepts into functional, interactive websites. My goal is to create seamless user experiences that not only look great but also engage and captivate users, whether they're accessing a site from a desktop or a mobile device.</b></span></div>
            </div>  
            </section>
            <section>
            </section>


            <Skillset/>
        </section>
    </div>
    </>)
}
export default Content