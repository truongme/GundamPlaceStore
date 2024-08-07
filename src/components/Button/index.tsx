import { Button } from "@mui/material"
import styles from './styles.module.scss'
import React from "react";

interface IButtonCustomProps{
    label: string;
}

const ButtonCustom = (props: IButtonCustomProps) => {
    return (
        <Button type="submit" variant="contained" className={styles.primaryBtn}>
            {props.label}
        </Button>
    )
}

export default ButtonCustom