
export const IncrementItem = (item) =>
{
    return{
        type : "increment_item",
        item_price : item.price,
        item : {
               itemid : item.id,
               itemname : item.name,
               itemquantity : 1,
               itemprice : item.price,
               itemsubtotal : item.price,

        },
        item_id : item.id
    }
}

export const DecrementItem = (item) =>
{
    return{
        type : "decrement_item",
        item_price : item.price,
        item : {
            itemid : item.id,
            itemname : item.name,
            itemquantity : 0,
            itemprice : item.price,
            itemsubtotal : 0,
            carttotal : 0

     },
        item_id : item.id
    }
}


