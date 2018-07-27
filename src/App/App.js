import React, { Fragment, Component } from 'react';
import TableContainer from './Table/TableContainer';
import { Provider } from 'react-redux';
import store from './store';
import { setProducts } from './actions';
import axios from 'axios';
import SorterContainer from './Sorter/SorterContainer';

class App extends Component {
    constructor() {
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
                    <SorterContainer />
                    <TableContainer
                        headings = {[ 
                            "Logo",
                            "Merchant Name", 
                            "Product Name",
                            "Price",
                            "Link"
                        ]}
                    />
                </ Fragment>
            </Provider>
        )
    }
}

export default App; 