import { useState } from 'react'
import styles from './styles.module.scss'
import Order from '../../layouts/Order'
import UserInformation from '../../layouts/UserInformation'
import AlertDialog from '../../components/Dialog'
import { Container } from '@mui/material'

const User = () => {

    const listItemUser = ["Thông tin cá nhân", "Đơn hàng", "Đăng xuất"]
    const [itemSelect, setItemSelect] = useState(0)

    const renderContent = (index: number) => {
        switch (index) {
            case 0:
                return <UserInformation />
            case 1:
                return <Order />
            case 2:
                return <div>Đăng xuất Content</div>
            default:
                return <div>Default Content</div>
        }
    }

    return (
        <Container maxWidth="xl">
            <div className={styles.userCtn}>
                <div className={styles.userMenu}>
                    {listItemUser.map((item: string, index: number) => (
                        <div key={item} className={styles.userItem} onClick={() => setItemSelect(index)}>{item}</div>
                    ))}
                </div>
                <div className={styles.userContent}>
                    <div className={styles.userComponent}>
                        {renderContent(itemSelect)}
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default User