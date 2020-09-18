import React from 'react';
import { Outlet } from 'react-router-dom'



function Product() {
    return (
        <div>
            <h2>Product Page</h2>
            <hr />
            <Outlet />
        </div>
    )
}

export default Product;