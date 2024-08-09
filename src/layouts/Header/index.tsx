import * as React from 'react';
import Container from '@mui/material/Container';
import styles from './styles.module.scss'
import Logo from '../../components/Logo';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from '../../components/SearchBar';

const Header = () => {

    const navigate = useNavigate()

    const handleClickUser = (id: number) => {
        navigate(`/user/${id}`)
    }

    const handleClickCart = (id: number) => {
        navigate(`/user/${id}`)
    }

    return (
        <div className={styles.headerCtn}>
            <Container maxWidth="xl" className={styles.headerContent}>
                <div className={styles.headerSection}>
                    <Logo />
                </div>
                <SearchBar />
                <div className={styles.headerSection}>
                    <IconButton aria-label="cart" className={styles.iconButton} onClick={() => handleClickUser(5)}>
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton aria-label="user" className={styles.iconButton} onClick={() => handleClickCart(5)}>
                        <PersonIcon />
                    </IconButton>
                </div>
            </Container>
        </div>
    )
}

export default Header