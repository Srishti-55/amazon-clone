import React from 'react'
import "./Home.css";
import Product from"./product";

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className='home_row'>
                    <Product />
                    {/*product*/}

                </div>
                <div>
                    {/*product*/}
                    {/*product*/}
                    {/*product*/}
                </div>
                <div>
                    {/*product*/}
                </div>

            </div>
            
        </div>
    )
}

export default Home
