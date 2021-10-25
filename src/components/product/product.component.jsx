import React, {useState, useEffect} from 'react'
import './product.component.css';
import ProductItem from './productitem/productitem.component';
import axios from 'axios';

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const response =  axios.get('https://uptech-admin.herokuapp.com/products');
        setProducts(response.data);
    }, [])

   

    return (
        <div className="container" style={{marginTop:'150px',marginBottom:'50px'}}>
            <div>
           <p>Up-tech offers its producer customers a range of diversified essential products 
               including foods of all ages, sanitary products and certain basic equipment. 
               It also offers its customers quality, fresh and valuable chickens and eggs from the farm.</p> 
            </div>
            <div className="row">
                {products?.map((product, i)=>(
                     <ProductItem
                     key={i}
                     title={product.namep}
                     img={product.photo}
                     />
                ))}
               
                
            </div>
        </div>
    )
}

export default Product
