import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../firebase/firebase'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Checkout = () => {
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const [mensaje, setMensaje]=useState(false)
    const [loader, setLoader] = useState(false)
    const {cart, cartTotal, clear}= useCart()
    const navigate = useNavigate()
    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
            setMensaje(true)
        }else{
            setMensaje(false)
            setLoader(true)
            const ventas = collection(db,"orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
        }
        
    }
    if(loader){
        return <p className="loading">Cargando, un momento por favor...</p>
    }
    return (
    <div>
        {!orderId 
        ?<div className="form">
            <h2>Checkout</h2>
            <h4>Por favor complete todos los campos</h4>
            <form onSubmit={finalizarCompra}>
                <div class="forMargin">
                    <label  className="form-label">Nombre </label>
                    <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
                </div>
                <div class="forMargin">
                    <label  className="form-label">Telefono</label>
                    <input className="form-control"  type="number" placeholder='2914489188' name="phone"  onChange={datosComprador} />
                </div>
                <div class="forMargin">
                    <label  className="form-label">E-mail</label>
                    <input className="form-control" type="email" placeholder='bahiacripto@gmail.com' name="email"  onChange={datosComprador}/>
                </div>
                <Button variant="contained" size="small" type='submit'>Finalizar Compra</Button>
                {mensaje && <p className='alerta'> Por favor complete todos los campos</p>}
        </form>
        </div>
        :
        <div>
        <h2>Muchas gracias por su compra!</h2>
        <h4>Orden: {orderId}</h4>
        <Button variant="contained" size="small" onClick={()=> navigate('/')}>Volver</Button>
        </div>}
    </div>
    )
}

export default Checkout