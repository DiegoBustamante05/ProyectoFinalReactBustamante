import React , {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../mocks/mockData'
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts]=useState([])
    const [loading, setLoading] = useState(true);
    const{categoriaId}= useParams()

    

    useEffect(()=> {
        data
        .then(res=> {
            if(categoriaId){
                setListProducts(res.filter((item)=>item.category === categoriaId))
            }
            else{
                setListProducts(res)
            }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading())
    },[categoriaId])



    return(
        <>
            <div>{greeting}</div>
            <div>{loading ? <p>Loading</p> : <ItemList listProducts={listProducts} />}</div>
        </>
    )
}

export default ItemListContainer;