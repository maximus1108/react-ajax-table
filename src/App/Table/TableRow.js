import React from 'react';

export default ({ logo, merchantName, productName, price, link }) => (
    <tr>
        <td>
            <img src={logo} />
        </td>
        <td>
            { merchantName }
        </td>
        <td>
            { productName }
        </td>
        <td>
            { price }
        </td>
        <td>
            <a href={link}>Go to product</a>
        </td>
    </tr>
)