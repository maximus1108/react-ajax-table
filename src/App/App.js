import React, { Fragment, Component } from 'react';
import TableContainer from './Table/TableContainer';
import { Provider } from 'react-redux';
import store from './store';
import { setProducts } from './actions';
import axios from 'axios';
import FilterContainer from './Filter/FilterContainer';

class App extends Component {
    constructor(a,b) {
        super();
    }

    componentDidMount() {
        axios('http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air')
            .then(response => {
                store.dispatch(setProducts(response.data.widget.data.offers))
            })
            .catch(e => console.log(e))
    }

    render () {
        return (
            <Provider store={ store }>
                <Fragment>
                    <FilterContainer />
                    <TableContainer />
                </ Fragment>
            </Provider>
        )
    }
}

export default App; 