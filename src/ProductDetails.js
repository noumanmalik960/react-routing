import React from 'react';
import { useParams } from 'react-router-dom';


function ProductDetails() {
    const { productId } = useParams();
    return (
        <div>
            <h3>Product Name &gt; { productId }</h3>
        </div>
    )
}

export default ProductDetails;