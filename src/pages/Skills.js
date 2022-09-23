import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {SiHtml5, SiJavascript, SiReact, SiBootstrap, SiMaterialui, SiHandshake} from 'react-icons/si';
import {ImUsers} from 'react-icons/im'
import {IoLogoCss3} from 'react-icons/io';
import {FaRegHandshake} from 'react-icons/fa';
import {RiUserSearchLine} from 'react-icons/ri';
import './styles/Skills.scss';
import { Typography } from '@mui/material';

const Skills = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

    return(
        <div className="bg-skills">
            <div className="skills">   
                
                <div className="skill-programming">
                  <Typography variant="h1">Current Skills in Programming (Self rating)</Typography>
                  <SiHtml5 /> HTML<BorderLinearProgress variant="determinate" value={75} />
                  <p>Started: February 2022</p>
                  <IoLogoCss3 /> CSS<BorderLinearProgress variant="determinate" value={60} />
                  <p>Started: February 2022</p>
                  <SiJavascript />Javascript <BorderLinearProgress variant="determinate" value={60} />
                  <p>Started: May 2022</p>
                  <SiReact/>ReactJS<BorderLinearProgress variant="determinate" value={60} />
                  <p>Started: July 2022</p>
                  <SiBootstrap/>Bootstrap<BorderLinearProgress variant="determinate" value={80} />
                  <p>Started: April 2022</p>
                  <SiMaterialui/>MUI <BorderLinearProgress variant="determinate" value={40} />
                  <p>Started: September 2022</p>
                  
                </div> 

                <div className="skill-social">
                  <Typography variant="h1">Other Skill (Self rating)</Typography>
                  <ImUsers /> Socializing <BorderLinearProgress variant="determinate" value={80} />
                  <p>I don't have problems socializing in any aspect. Since early days in CoderHouse (elearning platform where I started programming) I've been helping classmates in their projects. The only problem that I might face while talking to a foreign is the language barrier (mostly the lack of vocabulary in certain topics)</p>
                  <FaRegHandshake /> Responsibility <BorderLinearProgress variant="determinate" value={90} />
                  <p>Since High School, I developed this mindset of "I'm not gonna do anything else until this is done". While learning HTML, CSS, JS or ReactJS I always stayed up to 14 hours a day trying to complete the tasks CoderHouse gave to me. If the deadline is in 7 days, I'll try to finish it in a day or two fulfilling all the conditions of the task.</p>
                  <RiUserSearchLine/>Willing to learn<BorderLinearProgress variant="determinate" value={100} />
                  <p>Since I started Programming, one of my goals is to create anything related to Videogames or topic related to Anime/Manga. Languages, frameworks and libraries are constantly changing and one of my responsabilities is to adapt to those changes.</p>
                  <SiHandshake />Spanish <BorderLinearProgress variant="determinate" value={100} />
                  <p>My native language</p>
                  <SiHandshake/>English<BorderLinearProgress variant="determinate" value={70} />
                  <p>B2 Level (got my FCE) but I talk with foreigners everyday to not forget how to communicate properly </p>
                </div> 

            </div>
            
        </div>
        
    )
}

export default Skills;