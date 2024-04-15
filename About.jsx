import React from 'react'
import './about.css'
import Logo from './images/bird-colorful-logo-gradient-vector_343694-1365-modified.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const About = () => {


    const num = {
        number: "+201551870889",
        address: "9 MANSOR STREET"
    }


    const hanlder = () => {
        window.location.href = './Home.jsx'
    }


    const clicker = () => {
        window.location.href = 'tel:01551870889'
    }

    const addCliker = () => {
     const windowUrl =  window.location.href = "https://www.google.com/maps/place/Batata/@31.1953916,29.8953361,16.25z/data=!4m10!1m2!2m1!1z2YLZh9mI2Ycg2KjYt9in2LfYpw!3m6!1s0x14f5c39445951619:0xf2265548cea02ad9!8m2!3d31.1918149!4d29.9083347!15sChPZgtmH2YjZhyDYqNi32KfYt9inWhUiE9mC2YfZiNmHINio2LfYp9i32KeSAQRjYWZlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5ETUZwdFowWjNFQUXgAQA!16s%2Fg%2F1v_qr9j4?entry=ttu"
      window.open(windowUrl,"_blank")
   
    }


    return (
        <>
            <div className='About'>
                <div className='content'>
                    <img onClick={hanlder} className='img2' src={Logo} alt="logo" width={150} height={150} />
                    <h2>Hello! I'm hessain, a passionate web developer with a keen eye for detail and a love for creating engaging digital experiences.
                        <br />
                        <br />
                        <hr />
                        <span className='spa'> With a background in mention any relevant education or previous experience, I bring a diverse skill set to the table, encompassing front-end and back-end development as well as proficiency in various programming languages and frameworks.
                            I thrive in collaborative environments where creativity and innovation are encouraged, and I'm always eager to tackle new challenges and expand my knowledge. Whether it's crafting responsive and user-friendly interfaces, optimizing website performance, or solving complex technical problems, I approach each project with dedication and enthusiasm.</span>
                    </h2>
                </div>
            </div>
            <div className="phone">
                <Link onClick={clicker} className='numlin' href='tel:1551870889'>
                    <div className="mynum" >
                        <FaPhoneAlt className='icon one' />
                        <h2>{num.number}</h2>
                    </div>
                </Link>
                <p style={{ fontSize: "40px", color: "white", cursor: "pointer" }}>Call Me</p>
                <Link onClick={addCliker} className='addlin'>
                    <div className="myaddr">
                        <FaRegAddressCard className='icon two' />
                        <h2>{num.address}</h2>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default About