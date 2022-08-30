import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const ItemCount = ({ initial, stock, onAdd }) => {
const [counter, setCounter] = useState(initial);

const add = () => {
    if (counter < stock) {
        setCounter(counter +1)
    }
}

const subtract = () => {
    if (counter > 0){
        setCounter(counter -1)
    }
}




return (
    <div style={{
        gap: '40px',
        margin: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <div>
        <Button variant="contained" size="small" onClick={subtract}>
        -
        </Button>
        <Button variant="outlined">
        {counter}
        </Button>
        <Button variant="contained" size="small" onClick={add}>
        +
        </Button>
        </div>
        <div>
            <Button variant="contained" size="small"onClick={onAdd}>
            Add to cart
            </Button>
        </div>
    </div>
    );
}

export default ItemCount;
