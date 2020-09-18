import React from 'react';
import { useParams } from 'react-router-dom';


function ProductDetails() {
    const { productName } = useParams();
    return (
        <div>
            <h3>Product Name &gt; { productName }</h3>
        </div>
    )
}

export default ProductDetails;