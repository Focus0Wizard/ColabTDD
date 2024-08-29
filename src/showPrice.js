import showTotal from "./showTotalItems.js"

function showPrice(total){

    return total
}

function showNetCost(total, items){
    items=showTotal(items)
    return total*items
}


export {showPrice, showNetCost};