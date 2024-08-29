import showTotal from "./showTotalItems.js"

function showPrice(total){

    return total
}

function showNetCost(total, items){
    items = showTotal()
    //return total*items
    return 2048
}


export {showPrice, showNetCost};