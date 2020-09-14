//initialState: how's they look like in the beginning
//Reducer: how we play with a data-layer
//   reducer plays very important role in pushing content to thr data-layer
//   pulling data from data-layer is easy task

export const initialState = {
    basket: [],
    user: null
};

//Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);    //we take initial 'amount' and iterate over every 'item'


const reducer = (state, action) => {

    //to see dispatched action onclick button
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "ADD_TO_BASKET":
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item] 
            }

        case "REMOVE_FROM_BASKET":
            //logic for removing item from basket

            // return {
            //     ...state, 
            //     basket: state.basket.filter(item => item.id !== action.id) 
            // }

            //we cloned the basket
            let newBasket = [...state.basket];

            //whether product exists or not
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if(index>=0){
                //index exists in basket, remove it...
                newBasket.splice(index, 1);
            }
            else{
                console.warn(`Cant remove product (id: ${action.id}) as it's not present in basket`);
            }

            return {
                ...state, 
                basket: newBasket 
            }

        default:
            return state;
    }
}

export default reducer;

