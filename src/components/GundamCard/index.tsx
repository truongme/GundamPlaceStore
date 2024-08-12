import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import img from '../../assets/images/card.jpg'
import styles from './styles.module.scss'
import ButtonCustom from '../Button';

interface ICardProps{
    id: number,
    name: string,
    price: number,
    img: string,
}

const GundamCard: React.FC<ICardProps> = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400"
                    image={img}
                    alt="Gundam"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {'$' + props.price}
                    </Typography>
                    <ButtonCustom label='add to bag'/>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default GundamCard