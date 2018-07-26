import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class Table extends React.Component{

    constructor(){
        super();
    }
    componentDidMount() {
        const { setProducts, products } = this.props;
        
        axios('http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air')
            .then(response => {
                setProducts(response.data.widget.data.offers)
            })
            .catch(e => console.log(e))
    }

    render () {
        const {  products } = this.props;

        const Rows = products.map((product, i) => 
            <TableRow 
                logo={product.merchant.logo_url}
                merchantName={product.merchant.name}
                productName={product.offer.name}
                price={product.offer.price}
                link={product.offer.link}
                key={i}
            />
        )
    
    
    return (
        <table>
            <thead>
                <tr >
                    <td> Logo </td>
                    <td> Merchant Name </td>
                    <td> Product Name </td>
                    <td> Price </td>
                    <td> Link </td>
                </tr>
            </thead>
            <tbody>
                {
                    Rows
                }
            </tbody>
        </table>
    )
    }

}