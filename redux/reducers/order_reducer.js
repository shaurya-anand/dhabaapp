const InitialState = {
    

    cart_total : 0,
    cart : []



}


const order_reducer = (state = InitialState, action) => {
    switch (action.type) {

        case 'increment_item' :

           let existed_item = state.cart.find( (item) => action.item_id === item.itemid)

           if(existed_item)
           {
              existed_item.itemquantity += 1 
              existed_item.itemsubtotal = existed_item.itemquantity * existed_item.itemprice
              return { ...state, cart_total : state.cart_total + action.item_price, cart : [...state.cart]}
          }

           else{
              return { ...state, cart_total : state.cart_total + action.item_price, cart : [...state.cart, action.item]}
             }


        case 'decrement_item'  : 

        
        let existed_item_2 = state.cart.find( (item) => action.item_id === item.itemid)

        if(existed_item_2.itemquantity >= 2)
        {
           existed_item_2.itemquantity -= 1 
           existed_item_2.itemsubtotal = existed_item_2.itemquantity * existed_item_2.itemprice
           return { ...state, cart_total : state.cart_total - action.item_price, cart : [...state.cart]}
       }

       else if(existed_item_2.itemquantity === 1)
       {
        return { ...state, cart_total : state.cart_total - action.item_price, cart : state.cart.filter((i) => i.itemid !== action.item_id)}
       }
       
        default : return state
    }

}

export default order_reducer