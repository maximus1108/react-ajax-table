import { connect } from 'react-redux';
import Table from './Table';

const mapStateToProps = (state) => ({
    products: state
});

export default connect(mapStateToProps)(Table)