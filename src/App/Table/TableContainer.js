import { connect } from 'react-redux';
import Table from './Table';
import { setProducts } from '../actions';


const mapStateToProps = (state) => ({
    products: state
})
    
const mapDispatchToProps = (dispatch) => ({
    setProducts: products => dispatch(setProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)