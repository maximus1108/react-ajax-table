export const productsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return action.products
        case 'BY_PRICE_ASCENDING':
            return [].concat(state).sort((a,b) => a.offer.price - b.offer.price)
        case 'BY_PRICE_DESCENDING':
            return [].concat(state).sort((a,b) => b.offer.price - a.offer.price)
        case 'BY_NAME':
            return [].concat(state).sort((a,b) => {
                if(a.offer.name < b.offer.name) return -1;
                if(a.offer.name > b.offer.name) return 1;
                return 0;
            })
        default:
            return state
    }
}
