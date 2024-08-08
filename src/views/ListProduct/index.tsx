import React from "react";
import GundamCard from "../../components/GundamCard";
import Grid from '@mui/material/Grid';
import { Pagination } from "@mui/material";
import styles from './styles.module.scss'

const ListProduct = () => {

    let data: number[] = [];
    for (let index = 0; index < 10; index++) {
        data.push(index);
    }

    return (
        <div>
            <h1>GUNDAM</h1>
            <Grid container spacing={2}>
                {data.map((index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <GundamCard id={index} name="truong" price={index} img="" />
                    </Grid>
                ))}
            </Grid>
            <div className={styles.paginationCtn}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
};

export default ListProduct;
