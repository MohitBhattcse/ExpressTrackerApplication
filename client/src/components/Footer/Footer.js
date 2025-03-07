import React from 'react'
import '../../styles/Global.css';
import '../../styles/Footer.css';
import { FaGithubAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
        <a className='footer__socialicon' href="www.mohitbhatt.com" target="_blank" rel="noreferrer"><img className="footer__logo" src={require('../../assets/rnbGamesCubeLogoinv2.png')} alt="logo" /></a>        
        <p className='footer__copy'>Copyright &copy; 2025 <span>Mohit Bhatt</span></p>
        <div className='footer__iconcontainer'>
            <a className='footer__socialicon' href="https://github.com/MohitBhattcse" target="_blank" rel="noreferrer"><FaGithubAlt/></a>
            <a className='footer__socialicon' href="https://www.linkedin.com/in/mohit-bhattlpu/" target="_blank" rel="noreferrer"><GrLinkedinOption/></a>         
            <a className='footer__socialicon' href="mailto:miachalbhatt@gmail.com" target="_blank" rel="noreferrer"><AiFillMail/></a>             
        </div>            
  </footer>
  )
}

export default Footer
