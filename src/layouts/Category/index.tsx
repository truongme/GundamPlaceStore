import { Container } from '@mui/material';
import styles from './styles.module.scss'

const Category = () => {
    const arr = ["Universal Century", "Cosmic Era", "After Colony", "Anno Domini", "Post Disaster", "Alternate Universe", "Regild Century", "Future Century"]
    return (
        <div className={styles.categotyCtn}>
            <Container maxWidth="xl">
                <div className={styles.categotyContent}>
                    {arr.map((index) => (
                        <div className={styles.categoryItem}>{index}</div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Category