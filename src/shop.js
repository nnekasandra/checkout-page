import React from 'react';
import './style.css'
class Shop extends React.Component{
    render(){
        return(
            <section className="product-quantity">
                <div className = 'product-one'>
                    <div className="image">
                        <img src="images/photo1.png" alt="vintage bag"/>
                    </div>
                    <div image-description>
                        <h2>Vintage Backbag</h2>
                        <div className="pricing">
                            <p>$54.99</p>
                            <p>$94.99</p>
                        </div>
                        <div className="quantity">
                            <p>+</p>
                            <p>1</p>
                            <p>-</p>
                        </div>
                    </div>
                </div>
                <div className='product-two'>
                    <div className="image">
                        <img src="images/photo2.png" alt=""/>
                    </div>
                    <div image-description>
                        <h2>Levi Shoes</h2>
                        <div className="pricing">
                            <p>$74.99</p>
                            <p>$124.99</p>
                        </div>
                        <div className="quantity">
                            <p>+</p>
                            <p>1</p>
                            <p>-</p>
                        </div>
                    </div>
                </div>
                <div className='total-price'>
                    <div>
                        <hr/>
                        <div className="ship">
                            <p>Shipping</p>
                            <p>$19</p>
                        </div>
                    </div>
                    <div>
                        <hr/>
                        <div className="ship">
                            <p>Total</p>
                            <p>$148.98</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Shop;