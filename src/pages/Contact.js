import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai';
import { SiDiscord, SiSteam, SiGmail } from 'react-icons/si'; 
import './styles/Contact.scss'

const Contact = () => {
    return(
        <div className="bg-contact">
            <div className="text">
                <div className="contactMe">
                <h1>Contact Me</h1>
                <div>
                    <h3><SiGmail /> -
                    <a href="mailto:fabriziohotkowicz@gmail.com">Mail</a></h3>
                </div>

                <div>
                    <h3><AiOutlineLinkedin /> - <a href="https://www.linkedin.com/in/fabrizio-hotkowicz-56b96823a/">LinkedIn</a></h3> 
                </div>

                <div>
                    <h3><AiFillGithub /> - <a href="https://github.com/fabrizinho113">Github</a></h3> 
                </div>
                
                </div> 
                

                <div className="other-options">
                <h2>Other Options</h2>

                <div>
                <h3><SiDiscord /> - <a href="https://discord.com/users/429971985116954625">Discord</a></h3> 
                </div>
                <div>
                    <h3><SiSteam /> - <a href="https://steamcommunity.com/id/elfabroo/">Steam</a></h3> 
                </div>   
                </div>
                 



            </div>
            
        </div>
    )
}

export default Contact;