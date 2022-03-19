import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"
const Products = (p) => {
    const [Products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[])
    return (
        <div className='row products'>
            {Products.map(product => <Product cartCount={p.cartCount} key={product.id} product={product}></Product>)}
        </div>
    );
};

export default Products;