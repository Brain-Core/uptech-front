import React from 'react'
import './product.component.css';
import ProductItem from './productitem/productitem.component';
import mais from '../../assets/mais.png'
import oeufs from '../../assets/oeuf.png'
import poule from '../../assets/poule.png'


function Product() {
    return (
        <div className="container" style={{marginTop:'150px',marginBottom:'50px'}}>
            <div>
           <p>Up-tech offers its producer customers a range of diversified essential products 
               including foods of all ages, sanitary products and certain basic equipment. 
               It also offers its customers quality, fresh and valuable chickens and eggs from the farm.</p> 
            </div>
            <div className="row">
                <ProductItem
                title='Mais de paris'
                img={mais}
                />
                 <ProductItem
                title='Possins hollandais'
                img={poule}
                />
                 <ProductItem
                title='Oeuf aiguisé'
                img={oeufs}
                />
                 <ProductItem
                title='Mais de paris'
                img={mais}
                />
                 <ProductItem
                title='Possins hollandais'
                img={poule}
                />
                 <ProductItem
                title='Oeuf aiguisé'
                img={oeufs}
                />
                <ProductItem
                title='Mais de paris'
                img={mais}
                />
                 <ProductItem
                title='Possins hollandais'
                img={poule}
                />
                 <ProductItem
                title='Oeuf aiguisé'
                img={oeufs}
                />
            </div>
        </div>
    )
}

export default Product
