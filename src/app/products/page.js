import AddProduct from '@/components/AddProduct';
import Product from '@/components/Product';
import { getProducts } from '@/database/product_db';

import React from 'react';

const ProductPage = () => {
    const products = getProducts()
    console.log(products);
    
    return (
        <div className='container mx-auto my-10 space-y-5'>
            <h2 className='text-5xl font-bold text-center '>All Products</h2>
            <AddProduct/>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => <Product key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ProductPage;