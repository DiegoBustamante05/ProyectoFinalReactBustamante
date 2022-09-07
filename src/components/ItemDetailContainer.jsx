import React, { useEffect, useState } from "react";
import { data } from '../mocks/mockData';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({});

useEffect(() => {
    data
        .then((res) => setDetalle(res.find((prod) => prod.id === "1")))
        .catch((error) => {
        console.log(error);
    });
}, []);

    return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
