import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React,{useRef,useEffect,useState} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact=({scrollTarget,resetScrollTarget})=>{

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
                <div className="links">
                    <div><h2 className="socials-main">Socials</h2><br />
                    <div className="socials">
                        <a target="_blank" href="https://www.linkedin.com/in/jayesh-banda-631b85268/"><FaLinkedin/>&nbsp;&nbsp;LinkedIn</a>
                        <a target="_blank" href="https://github.com/JayeshBanda"><FaGithub/>&nbsp;&nbsp;Github</a>

                    </div>
                    </div>
                    <div className="hello"><a target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&to=jayeshbanda4567@gmail.com&su=&body=&tf=cm"><h2>Say Hello ⇝</h2></a><br />
                </div>
                </div>
            </div>
        </div></footer>
    </>)
}
export default Contact