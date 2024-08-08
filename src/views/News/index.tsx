import { Grid } from "@mui/material";
import React from "react";
import styles from './styles.module.scss'
import NewsCard from "../../layouts/NewsCard";
import NewsCardFocus from "../../layouts/NewsCard";
import NewsCardItem from "../../layouts/NewsCard/newsItem";

const News = () => {
    return (
        <div>
            <h1>New</h1>
            <div className={styles.newsGird}>
                <div className={styles.newsFocusCtn}>
                    <NewsCardFocus/>
                </div>
                <div className={styles.newsListCtn}>
                    <NewsCardItem/>
                    <NewsCardItem/>
                    <NewsCardItem/>
                </div>
            </div>
        </div>
    )
}

export default News