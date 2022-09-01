import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function MediaCard({product}) {
    return (
    <Card sx={{ maxWidth: 345, m: 5, border: 1}}>
        <CardMedia
        component="img"
        height="140"
        image={product.img} 
        alt={product.name}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            $ {product.price}
        </Typography>
        </CardContent>
        <CardActions>
        <Stack direction="row" spacing={2}>
            <Button variant="contained">Comprar</Button>
        </Stack>
        </CardActions>
    </Card>
    );
}