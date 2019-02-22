import React from 'react';
import Buttons from './Buttons';

const Product = ({ products, onChange, deleteItem }) => (
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>COST</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, i) => (
                <tr key={i}>
                    <td>
                        {product.title}
                    </td>
                    <td>
                        £ {product.price}
                    </td>
                    <td style={{ display: 'flex', flexDirection: 'row' }}>
                        <input
                            type="text"
                            value={product.qty}
                            onChange={e => onChange(i, parseInt(e.target.value) || 0)} />
                        <Buttons
                            index={i}
                            currentQty={product.qty}
                            onChange={onChange} />
                    </td>
                    <td>
                        £ {(product.price * product.qty).toFixed(2)}
                    </td>
                    <td>
                        <i className="fas fa-trash-alt trash" onClick={() => deleteItem(product.id)}></i>
                    </td>
                </tr>
            )
            )}
        </tbody>
    </table>
);

export default Product;