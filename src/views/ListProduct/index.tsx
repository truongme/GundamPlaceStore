import React from "react";
import GundamCard from "../../layouts/GundamCard";
import Grid from '@mui/material/Grid';
import { Pagination } from "@mui/material";
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom";

const ListProduct: React.FC = () => {

    let data: number[] = [];
    for (let index = 0; index < 10; index++) {
        data.push(index);
    }

    const navigate = useNavigate();

    const handleSelectItem = (id: number) => {
        navigate(`/gundam/${id}`)
    }

    return (
        <div>
            <h1>GUNDAM</h1>
            <Grid container spacing={2}>
                {data.map((id: number) => (
                    <Grid item xs={12} sm={6} md={3} key={id} onClick={() => handleSelectItem(id)}>
                        <GundamCard id={id} name="truong" price={id} img="" />
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
