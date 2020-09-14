import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();   //i have to fetch basket items to this page

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add" src="https://insights.nozzle.ai/hs-fs/hub/5928804/hub_generated/resized/76ce4403-24af-4be2-92f3-8097f5b587ec.png" alt=""></img>
            
                {basket?.length === 0 ? (
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2>Your shopping Cart is Empty!</h2>
                        <p>You have no items in your checkout. To buy one pr more click, "Add To Basket" next to the item</p>
                    </div>
                ) : (
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h1 className="checkout__title">Your Shopping Basket</h1>
                        {
                            basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                )}
            </div>

            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        {/* <h1>SubTotal</h1> */}
                        <Subtotal />
                    </div>
                )
            }

        </div>
    )
}

export default Checkout
