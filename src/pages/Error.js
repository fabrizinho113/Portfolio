import { Link } from 'react-router-dom';
import './styles/Error.scss';

const Error = () => {
    return(
        <div className="error">
            <h1>Error - Page not found</h1>
            <h2>Click <Link to="/home"><span>Here</span></Link>  to be redirect</h2>
        </div>
        
    )
}

export default Error;