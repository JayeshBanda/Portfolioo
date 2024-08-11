import React, { useRef,useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Experiences =()=>{


return(<>
    <div className='expcenter'>
    <div className='myskills1' data-aos="fade-up">Experience</div>
        <div className='exp ' data-aos="fade-up">
            <div className='expcard'>
        <div className='exptitle'>Web Development intern</div>
        <div className='expinfo'>Syncs Interns</div>
        <div className='expdetails'>During my web development internship, I gained hands-on experience in building and maintaining web applications. I worked extensively with React js and Tailwind Css to create responsive and user-friendly interfaces. I collaborated with the development team to implement features and troubleshoot issues. I also contributed to backend development using Nodejs. This experience enhanced my skills in both front-end and back-end development, as well as in version control and project management.</div>
        </div>
        <div className='expcard'>
        <div className='exptitle'>Data Science & Machine learning intern</div>

        <div className='expinfo'>YBI Foundation
        </div>
        <div className='expdetails'>During my data science and machine learning internship, I developed and implemented predictive models using Python and popular libraries such as scikit-learn and TensorFlow. I conducted data preprocessing, exploratory data analysis, and feature engineering to prepare datasets for modeling. I collaborated with the team to interpret model results and refine algorithms based on performance metrics. This experience strengthened my skills in data visualization, statistical analysis, and machine learning techniques.</div>
        </div>
        </div>
        </div>

</>)
}
export default Experiences