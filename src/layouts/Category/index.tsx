import { Container } from '@mui/material';
import styles from './styles.module.scss'
import { List_Category } from '../../data';

const Category = () => {
    const arr = List_Category
    return (
        <div className={styles.categotyCtn}>
            <Container maxWidth="xl">
                <div className={styles.categotyContent}>
                    {arr.map((index) => (
                        <div className={styles.categoryItem} key={index.id}>{index.name}</div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Category