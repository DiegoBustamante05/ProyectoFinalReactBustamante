import React from 'react';



const Item = ({product}) => {

    
        return (
            <>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={product.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text"> ${product.price}</p>
                        <button className="btn btn-primary">Ver Mas</button>
                    </div>
                </div>
            </>
        );
    }


export default Item
