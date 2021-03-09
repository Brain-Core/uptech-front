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
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
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
