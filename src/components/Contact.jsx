import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React,{useRef,useEffect,useState} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact=({scrollTarget,resetScrollTarget})=>{
    
    const emailAddress = 'jayeshbanda4567@gmail.com';

  const handleEmailButtonClick = () => {
    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
    window.open(mailtoLink, '_blank');
  };




    const elementRef=useRef(null);
    const[setScrollTarget]=useState(null);

    useEffect(()=>{
        if(scrollTarget==='contact-main'){
            elementRef.current.scrollIntoView({behaviour:'smooth'});
            Aos.init({once:false});
            resetScrollTarget();
        }

    },[scrollTarget,resetScrollTarget])
    Aos.init()
    
    return(<>
    <footer>
        <div ref={elementRef} className="contact-main">
            <div className="title1"><h1>Contact</h1></div>
           
            <div className="contact">
                <div className="links" data-aos = "fade-up">
                    <div><h2 className="socials-main">Socials</h2><br />
                    <div className="socials">
                        <a target="_blank" href="https://www.linkedin.com/in/jayesh-banda-631b85268/"><FaLinkedin/>&nbsp;&nbsp;LinkedIn</a>
                        <a target="_blank" href="https://github.com/JayeshBanda"><FaGithub/>&nbsp;&nbsp;Github</a>

                    </div>
                    </div>
                    <div className="hello"><h2 onClick={handleEmailButtonClick} onTouchStart={handleEmailButtonClick}>Say Hello ⇝</h2><br />
                </div>
                </div>
            </div>
        </div></footer>
    </>)
}
export default Contact