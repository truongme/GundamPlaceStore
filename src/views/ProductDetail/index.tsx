import { Container, Grid } from "@mui/material";
import styles from './styles.module.scss'

interface IProductDetailProps {
    idProduct: number;
}

const ProductDetail: React.FC<IProductDetailProps> = (props) => {

    const idProduct = props.idProduct

    return (
        <Container maxWidth="xl" className={styles.productDetailCtn}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div>xs=8</div>
                </Grid>
                <Grid item xs={8}>
                    <div>xs=4</div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetail