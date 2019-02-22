import React from 'react';

const BuyButton = ({ enabled }) => (
    <button
        className={enabled ? 'buy-btn' : 'buy-btn-disabled'}
        disabled={!enabled}>
        <span>Buy Now</span></button>
)

export default BuyButton;