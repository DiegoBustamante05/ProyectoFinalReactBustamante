import Button from '@mui/material/Button';
import React from 'react';


const ItemCount = ({ initial, stock, onAdd, count, setCount }) => {


const add = () => {
    if (count < stock) {
        setCount(count +1)
    }
}

const subtract = () => {
    if (count > 0){
        setCount(count -1)
    }
}




return (
    <div className='counterStyle'>
        <div>
        <Button variant="contained" size="small" onClick={subtract}>
        -
        </Button>
        <Button variant="outlined">
        {count}
        </Button>
        <Button variant="contained" size="small" onClick={add}>
        +
        </Button>
        </div>
        <div>
            <Button variant="contained" color="info" size="small"onClick={onAdd}>
            Add to cart
            </Button>
        </div>
    </div>
    );
}

export default ItemCount;
