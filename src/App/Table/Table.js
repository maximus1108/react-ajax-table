import React from 'react';
import TableRow from './TableRow';

export default ({ products }) => (
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
                products.map((product, i) => 
                    <TableRow 
                        cells={ [
                            <img src={ product.merchant.logo_url }/>, 
                            product.merchant.name,
                            product.offer.name,
                            product.offer.price,
                            <a href={ product.offer.link }>Go to product</a>
                        ] }
                        key={i}
                    />
                )
            }
        </tbody>
    </table>
);