import React from "react";
import styles from './styles.module.scss'
import { Container } from "@mui/material";
import { List_Cart } from "../../data";

const Cart = () => {

    const cart = List_Cart
    
    return(
        <Container maxWidth="xl">
            {cart ? (
                <div className={styles.itemCtn}>
                    <div>truog</div>
                    <div>ngo</div>
                </div>
            ):(
                <div>Không có gì ở đây cả</div>
            )}
        </Container>
    )
}

export default Cart