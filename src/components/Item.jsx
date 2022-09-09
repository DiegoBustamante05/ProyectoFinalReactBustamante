import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    
    const navigate = useNavigate()

    return (
    <Card className='cards' sx={{ maxWidth: 345 }}>
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
            <Typography variant="body2" color="text.info" margin="10px">
            Stock: {product.stock} unidades.
            </Typography>
            <Typography variant="h6" color="primary">
            ${product.price}
        </Typography>
        </CardContent>
        <CardActions className='buttonCard'>
            <Button variant="contained" color="info"  size="small" onClick={()=>navigate(`/detalle/${product.id}`)}>Saber más</Button>
        </CardActions>
        </Card>
    );
}

export default Item