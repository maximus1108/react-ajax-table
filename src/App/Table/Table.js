import React from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default ({ headings, data }) => (
    <table>
        <TableHeader 
            headings={ headings }
        />
        <tbody>
            {
                data.map((product, i) => 
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