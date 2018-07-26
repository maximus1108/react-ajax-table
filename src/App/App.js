import React, { Fragment, Component } from 'react';
import TableContainer from './Table/TableContainer';
import { Provider } from 'react-redux';
import store from './store';
import FilterContainer from './Filter/FilterContainer';

class App extends Component {
    constructor(a,b) {
        super();
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