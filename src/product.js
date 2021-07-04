import React from 'react'
import './product.css';

function product() {
    return (
        <div className="product">
            <div className="product_info"> 
                <p> The Lean Startup </p>
                <p className='product_price'>
                    <small>Rs.</small>
                    <strong>99</strong>
                </p>
                <div className='product_rating'>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>

                </div>
                
            </div>
            

        </div>
    )
}

export default product
