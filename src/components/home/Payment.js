import React from 'react'

export default function Payment(props) {
    return (
        <React.Fragment>
            <section className="payment">
                <p>
                {props.payment.merchant_name}<br />
                ************{props.payment.acct_no.slice(12,16)}<br />
                {props.payment.expiration_date.slice(0,10)}<br />
                </p>
                <button onClick={()=>props.deletePayment(props.payment.id)}>Delete</button>
            </section>
        </React.Fragment>
    )
}

