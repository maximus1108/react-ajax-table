import React from 'react';

export default ({ cells }) => (
    <tr>
        {
            cells.map(data => <td>{ data }</td>)
        }
    </tr>
)