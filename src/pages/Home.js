import { Typography } from '@mui/material';
import './styles/Home.scss';

const Home = () => {
    return(
        <div className="bg-home">
            <div className="text">
                <Typography variant='h1'>WELCOME TO MY PORTFOLIO!</Typography>
                <Typography variant='h2'>Fabrizio Hotkowicz Cassani</Typography>
                <br/>
                <Typography variant='h3'>Frontend Developer</Typography>
            </div>
            
        </div>
        
    )
}

export default Home;