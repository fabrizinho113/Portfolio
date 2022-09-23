import { Typography } from '@mui/material';
import './styles/Objectives.scss'

const Objectives = () => {

        return(
            <div className="bg-objectives">
                <div className="main-objective">
                    <Typography variant="h1">Main Objectives</Typography>
                    <Typography variant="h3">Get a Job</Typography>
                </div>
                
                <div className="other-objectives">
                    <Typography variant="h2">Current tasks</Typography>
                    <ul>
                        <li>
                        <Typography variant="h5">Finish Backend classes (CoderHouse)</Typography>
                        </li>
                        <li>
                        <Typography variant="h5">Improve the code of this Portfolio while learning new libraries/frameworks/languages</Typography>
                        </li>
                        <li>
                        <Typography variant="h5">Learn more Frameworks such as React Native, Angular JS and libraries like Framer Motion</Typography>
                        </li>
                        <li>
                        <Typography variant="h5">Create and participate in more Projects</Typography>
                        </li>
                    </ul>
                </div>

                <div className="side-objectives">
                    <Typography variant="h2">Other Objectives</Typography>
                    <ul>
                        <li>
                        <Typography variant="h5">Learn Python, Java, C++</Typography>
                        </li>
                        <li>
                        <Typography variant="h5">Learn Unity or Unreal Engine and develop a demo</Typography>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

export default Objectives;