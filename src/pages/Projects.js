import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles/Projects.scss';

const Projects = () => {
    return(
        <div className="bg-projects">
          <Typography variant="h1">My Projects</Typography>
          <Typography variant="h4">Each Time I create another project, I'll add it here</Typography>   
            <div className="card-projects">   
                <div className="card">
                <Card sx={{ maxWidth: 360, p:0.5, m: 1 }}>
      <CardMedia
        component="img"
        height="180"
        image="./assets/img/p5-strikers.png"
        alt="p5-strikers"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'League Spartan'}}>
          Persona 5 Strikers
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'League Spartan'}}>
          My first HTML/CSS project implementing SASS and Bootstrap. It is responsive.
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://fabrizinho113.github.io/Persona-5-Strikers---Hotkowicz-Cassani/"><Button size="small">Check Deploy</Button></a>
        <a href="https://github.com/fabrizinho113/Persona-5-Strikers---Hotkowicz-Cassani"><Button size="small">Repository</Button></a>
      </CardActions>
    </Card>
    </div>

                <div className="card">
                <Card sx={{ maxWidth: 360, p:0.5, m: 1}}>
      <CardMedia
        component="img"
        height="180"
        image="./assets/img/theram-online.png"
        alt="theram-online"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'League Spartan'}}>
          Theram Online V1
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'League Spartan'}}>
          My first JS and coding project using SweetAlert2 and local fetch. It is not responsive.
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://fabrizinho113.github.io/Theram-Online-V1/index.html"><Button size="small">Check Deploy</Button></a>
        <a href="https://github.com/fabrizinho113/Theram-Online-V1"><Button size="small">Repository</Button></a>
      </CardActions>
    </Card>
                </div>

                <div className="card">
                <Card sx={{ maxWidth: 360, p:0.5, m: 1}}>
      <CardMedia
        component="img"
        height="180"
        image="./assets/img/manga-store.png"
        alt="manga-store"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'League Spartan'}}>
          Manga Store
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'League Spartan'}}>
          My first React JS project implementing Firebase. It is not responsive.
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://manga-store-6k3m4x5qv-fabrizinho113.vercel.app/"><Button size="small">Check Deploy</Button></a>
        <a href="https://github.com/fabrizinho113/mangaStore"><Button size="small">Repository</Button></a>
      </CardActions>
    </Card>
    </div>


     </div>
         
  </div>
    )
}

export default Projects;