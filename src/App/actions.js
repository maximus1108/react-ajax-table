export const setProducts = products => ({
    type: 'SET_PRODUCTS',
    products
})

export const sortByPriceAscending = _ => ({
    type: 'BY_PRICE_ASCENDING'
})

export const sortByPriceDescending = _ => ({
    type: 'BY_PRICE_DESCENDING'
})

export const sortByName = _ => ({
    type: 'BY_NAME'
})