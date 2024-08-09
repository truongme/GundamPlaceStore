import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/images/logo.jpg';
import styles from './styles.module.scss'

const Logo = () => {
    return(
        <Link to={"/"}>
            <div className={styles.ImgLogoCtn}>
                <img className='imgLogo' src={ImgLogo}/>
            </div>
        </Link>
        
    )
}

export default Logo