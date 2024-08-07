import ImgLogo from '../../assets/images/logo.jpg';
import styles from './styles.module.scss'

const Logo = () => {
    return(
        <div className={styles.ImgLogoCtn}>
            <img className='imgLogo' src={ImgLogo}/>
        </div>
    )
}

export default Logo