import logo from './logo.png'

const Navbar = ({ scrollToElement })=>{
 
    return(<>
    <div className='bg'>
    <div className="logo">
      <img src={logo} alt="#" /></div>
      </div>
<label>
<input type="checkbox" />
<span className="menu" > <span className="hamburger" ></span> </span>
<ul>
  <li onClick={()=>{window.scrollTo(0,0)}}> <b>Home</b> </li>
  <li onClick={() => scrollToElement('content-main')}> <b>About</b> </li>
  {/* <li onClick={() => scrollToElement('skills-main')}> <b>Skills</b> </li> */}
  <li onClick={() => scrollToElement('projectsmain')}> <b>Projects</b> </li>
  <li onClick={() => scrollToElement('contact-main')}> <b>Contact</b></li>
</ul>
</label>

    </>)
}
export default Navbar