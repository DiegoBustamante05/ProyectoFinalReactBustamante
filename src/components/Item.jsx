import React from 'react';
import products from './products';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MediaCard from './MediaCard';

const Item = ({product}) => {

    
        return (
            <>
                <MediaCard  product={product}/>
            </>
        );
    }


export default Item