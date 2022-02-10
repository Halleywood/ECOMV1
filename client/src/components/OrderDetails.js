import React from 'react';

const OrderDetails = ({orderDetails}) => {
    return <div>
        <h3> Thank You For Your Order! </h3>
        <p>Order Numer: {orderDetails.id}</p>
        <p>Full Name: {orderDetails.payer.name.given_name} {orderDetails.payer.name.surname}</p>
        <p>Amount: ${orderDetails.purchase_units[0].amount.value}</p>
        <p>Shipped To: <br />{orderDetails.purchase_units[0].shipping.address.address_line_1}</p>
        <p>{orderDetails.purchase_units[0].shipping.address.admin_area_2} {orderDetails.purchase_units[0].shipping.address.address_line_1}, {orderDetails.purchase_units[0].shipping.address.postal_code} </p>
        <h6>Keep an eye out in your email for shipping notifications!</h6>
        </div> 


};

export default OrderDetails;
