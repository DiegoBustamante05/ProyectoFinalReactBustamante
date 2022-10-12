import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import ItemList from './ItemList';
import { CircularProgress } from '@mui/material';

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts]=useState([])
    const [loading, setLoading] = useState(false);
    const{categoriaId}= useParams()


useEffect(()=>{
    setLoading(true)
    const productos = categoriaId ? query(collection(db, "product"), where("category", "==", categoriaId)) : collection(db, "product")
    getDocs(productos)
    .then((res)=> {
        const list = res.docs.map((product)=>{
            return{
                id:product.id,
                ...product.data()
            }
        })
        setListProducts(list)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
}, [categoriaId])


    return(
        <>
            <div>{greeting}</div>
            <div>{loading ? <CircularProgress className='spinner' size='10vh' color="info"/> : <ItemList listProducts={listProducts} />}</div>
        </>
    )
}

export default ItemListContainer;