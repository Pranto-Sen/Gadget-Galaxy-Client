import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData();
    return (
        <div>
           {product.name}
        </div>
    );
};

export default UpdateProduct;