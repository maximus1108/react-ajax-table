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
                        logo={product.merchant.logo_url}
                        merchantName={product.merchant.name}
                        productName={product.offer.name}
                        price={product.offer.price}
                        link={product.offer.link}
                        key={i}
                    />
                )
            }
        </tbody>
    </table>
);