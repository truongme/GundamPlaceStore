import styles from './styles.module.scss'
import logo from '../../assets/images/logo.jpg'
import { Button } from '@mui/material';
import ButtonCustom from '../../components/Button';

const UserInformation = () => {
    return (
        <div>
            <h4>Hồ sơ của tôi</h4>
            <div className={styles.userCtn}>
                <div className={styles.userContent}>
                    <div className={styles.userSection}>
                        <label >Username</label>
                        <input type="text" />
                    </div>
                    <div className={styles.userSection}>
                        <label >Password</label>
                        <input type="password" />
                    </div>
                    <div className={styles.userSection}>
                        <label >Email</label>
                        <input type="email" />
                    </div>
                    <div className={styles.userSection}>
                        <label >Phone</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.userAvatar}>
                    <div className={styles.uerAvatarCtn}>
                        <img src={logo}></img>
                    </div>
                    <ButtonCustom label='Chọn ảnh'/>
                </div>
            </div>
        </div>
    )
}

export default UserInformation;