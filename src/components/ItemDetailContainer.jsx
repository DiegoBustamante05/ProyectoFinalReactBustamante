import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({});
    const[loading, setLoading] = useState(true)
    const{id}= useParams()

useEffect(() =>{
    const collectionProduct =  collection(db, "product")
    const referenceDoc = doc(collectionProduct, id)
    getDoc(referenceDoc)
    .then((res) => {
        setDetalle({
            id:res.id,
            ...res.data()
        })
    })
    .catch((error)=>console.log(error))
    .finally(()=> setLoading(false))
},[])


    return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
