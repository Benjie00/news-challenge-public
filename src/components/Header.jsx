import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({logo}) => {
    return (
        <div className='header'>
            <Link to="/"> <img id='logo' alt='logo' src={logo} width='70' /> </Link>
            <h1 className='title'>Headlines</h1>
        </div>
    );
}

export default Header;