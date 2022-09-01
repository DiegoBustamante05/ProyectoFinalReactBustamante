import React , {useState, useEffect} from 'react';
import { customFetch } from './customFetch';
import ItemList from './ItemList';
import products from './products';

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts]=useState([])

useEffect(()=> {
    customFetch(products)
    .then(data=> setListProducts(data))
},[])



    return(
        <>
            <div>{greeting}</div>
            <ItemList listProducts={listProducts}/>
        </>
    )
}

export default ItemListContainer;