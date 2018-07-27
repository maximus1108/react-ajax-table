import React from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default ({ products }) => (
    <table>
        <TableHeader 
            headings={ [
                "Logo",
                "Merchant Name", 
                "Product Name",
                "Price",
                "Link"
            ] }
        />
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