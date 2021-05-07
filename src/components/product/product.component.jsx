import React from 'react'
import './product.component.css';
import ProductItem from './productitem/productitem.component';
import FeedMash from '../../assets/feed_mash.jpg'
import FeedPellet from '../../assets/feed_pellet.jpg'
import FeedCrumble from '../../assets/feed_crumble.jpg'
import Amin from '../../assets/amin.jpg'
import Cibus from '../../assets/cibus.jpg'
import Sulfa from '../../assets/sulfadim.jpg'
import Feeder from '../../assets/feeder.jpg'
import Drinker from '../../assets/deinker.jpg'
import Chicken from '../../assets/chicken.jpg'


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
                title='Mash Feed'
                img={FeedMash}
                />
                 <ProductItem
                title='Pellet Feed'
                img={FeedPellet}
                />
                 <ProductItem
                title='Crumble Feed'
                img={FeedCrumble}
                />
                 <ProductItem
                title="Amin'Total"
                img={Amin}
                />
                 <ProductItem
                title='Cibus Premix'
                img={Cibus}
                />
                 <ProductItem
                title='Sulfadimidin'
                img={Sulfa}
                />
                <ProductItem
                title='Feeder'
                img={Feeder}
                />
                 <ProductItem
                title='Drinker'
                img={Drinker}
                />
                 <ProductItem
                title='Chiken'
                img={Chicken}
                />
            </div>
        </div>
    )
}

export default Product
