import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Navigate } from 'react-router-dom';

const PayPal = () => {

  const paypal = useRef()

  const [orderDetails, setOrderDetails] = useState({})

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, error) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "jewelry",
              amount: {
                currency_code: "USD",
                value: 100.00
              }
            }
          ]
        }
        )
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
        setOrderDetails(order)
        // navigate("/order")
      },
      onError: (err) => {
        console.log("&&&", err)
      }
    }).render(paypal.current)
  }, [])
  return (
    <div>
      <div className="paypalboxes" ref={paypal}></div>
    </div>);
};

export default PayPal;
