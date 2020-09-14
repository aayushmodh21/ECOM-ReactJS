import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">

            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="back_image"></img>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How innovation works"
                    price={11.96}
                    rating={5}
                    image="https://crazylister.com/wp-content/uploads/2018/05/Amazon-Top-Sellers_FB.png"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How innovation works"
                    price={11.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/boost/landing/img/product_collage._CB485979685_.png"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How innovation works"
                    price={11.96}
                    rating={3}
                    image="https://crazylister.com/wp-content/uploads/2018/05/Amazon-Top-Sellers_FB.png"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How innovation works"
                    price={11.96}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/boost/landing/img/product_collage._CB485979685_.png"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How innovation works"
                    price={11.96}
                    rating={2}
                    image="https://crazylister.com/wp-content/uploads/2018/05/Amazon-Top-Sellers_FB.png"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How innovation works"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
