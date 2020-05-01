
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

export const AddPhoneNumber = (phone_number) =>
{
    return{
        type : "add_number",
        phone_number : phone_number,
    }
}

export const AddName = (name) =>
{
    return{
        type : "add_name",
        name : name,
    }
}

export const AddAddress = (address) =>
{
    return{
        type : "add_address",
        address : address,
    }
}

export const update_location_to_true = () =>
{
    return{
        type : 'update_loc_to_true',
        location : true,
    }
}

export const update_location_to_false = () =>
{
    return{
        type : 'update_loc_to_flase',
        location : false,
    }
}

export const clear_cart = () =>
{
    return{
        type : 'clear_cart'
    }
}


