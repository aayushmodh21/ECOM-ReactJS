import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

    // because we have to pull information from the data-layer
    // const [state, dispatch] = useStateValue();
    const [{ basket }, dispatch] = useStateValue();  // here state is basket [state of the global store]

    const addToBasket = () => {
        //Add item to basket [dispatch the item into data-layer]
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">

            <div className="product_info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
