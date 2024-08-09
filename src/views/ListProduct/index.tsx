import React from "react";
import GundamCard from "../../layouts/GundamCard";
import Grid from '@mui/material/Grid';
import { Pagination } from "@mui/material";
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom";
import { List_Gundam } from "../../data";

const ListProduct: React.FC = () => {

    const data = List_Gundam

    const navigate = useNavigate();

    const handleSelectItem = (id: number) => {
        navigate(`/gundam/${id}`)
    }

    return (
        <div>
            <h1>GUNDAM</h1>
            <Grid container spacing={2}>
                {data.map(item => (
                    <Grid item xs={12} sm={6} md={3} key={item.id} onClick={() => handleSelectItem(item.id)}>
                        <GundamCard key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
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
