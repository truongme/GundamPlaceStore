import * as React from 'react';
import Container from '@mui/material/Container';
import styles from './styles.module.scss'
import Logo from '../../components/Logo';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

    const arrHeader = [
        {
            text:'Collection',
            path:'/collection'
        },
        {
            text:'Collection',
            path:'/collection'
        },
        {
            text:'News',
            path:'/news'
        }
    ];

    const navigate = useNavigate()
    const handleClick = (id:number) => {
        navigate(`/user/${id}`)
    }

    return (
        <div className={styles.headerCtn}>
            <Container maxWidth="xl" className={styles.headerContent}>
                <div className={styles.headerSection}>
                    <Logo/>
                    {arrHeader.map(item => (
                        <Link key={item.text} to={`${item.path}`} style={{color:'white'}}>
                            <div className={styles.headerItem}>{item.text}</div>
                        </Link>
                    ))}
                </div>
                <div className={styles.headerSection}>
                    <IconButton aria-label="user" className={styles.iconButton} onClick={() => handleClick(5)}>
                        <PersonIcon/>
                    </IconButton>
                </div>
            </Container>
        </div>
    )
}

export default Header