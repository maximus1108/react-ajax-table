import { connect } from 'react-redux';
import Filter from './Filter';
import { sortByPriceAscending, sortByPriceDescending, sortByName } from '../actions';

    
const mapDispatchToProps = (dispatch) => ({
    sortByPriceAscending: _ => dispatch(sortByPriceAscending()),
    sortByPriceDescending: _ => dispatch(sortByPriceDescending()),
    sortByName: _ => dispatch(sortByName())
})

export default connect(undefined, mapDispatchToProps)(Filter)