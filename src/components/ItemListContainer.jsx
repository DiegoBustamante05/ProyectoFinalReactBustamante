import React , {useState, useEffect} from 'react';
import { data } from '../mocks/mockData'
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts]=useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        data
        .then(data=> setListProducts(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading())
    },[])



    return(
        <>
            <div>{greeting}</div>
            <div>{loading ? <p>Loading</p> : <ItemList listProducts={listProducts} />}</div>
        </>
    )
}

export default ItemListContainer;