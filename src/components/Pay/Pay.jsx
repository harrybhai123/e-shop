import "./Pay.scss"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Confetti from 'react-confetti';
import { resetCart } from "../../redux/cartReducer";

function Pay() {
    const data = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentMessage, setPaymentMessage] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [cardName, setCardName] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);

    const handlePayment = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !mobile || !address || !cardNumber || !expiryDate || !cvv) {
            setPaymentMessage('Please fill in the details to proceed with the payment');
        } else {
            setPaymentMessage('Congratulations! Your payment has been successful. And your products deliver within 4 days Thank you for using Harry E-Shop');

            setShowConfetti(true);

            dispatch(resetCart())
            setFirstName('')
            setLastName('')
            setEmail('')
            setMobile('')
            setAddress('')
            setCardNumber('')
            setExpiryDate('')
            setCvv('')
            setCountry('')
            setState('')
            setPincode('')
            setCardName('')
        }
    };



    const totalPrice = () => {
        let total = 0
        data.forEach(item => {
            total += item.quantity * item.price
        });
        return total.toFixed(2)
    }

    return (
        <div className='payment'>
            <div className="payDetailsBoss">
                {
                    data?.map((item) => (
                        <Link className="payDetails link" key={item.id} to={`/product/${item.id}`}>
                            <img src={item.img} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>Price: {item.price}</p>
                            <p>no of items: {item.quantity}</p>
                        </Link>
                    ))
                }
            </div>
            <form className="form">
                <h1>your payment details</h1>
                <div className="item">
                    <label htmlFor="firstName">first Name: </label>
                    <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="lastName">last Name: </label>
                    <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="item">
                    <label htmlFor="mobile">mobile no. </label>
                    <input type="tel" id="mobile" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    <label htmlFor="email">email </label>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="item">
                    <label htmlFor="address">address: </label>
                    <input type="text" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label htmlFor="pincode">pincode </label>
                    <input type="number" id="pincode" name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="pincode" />
                </div>
                <div className="item">
                    <label htmlFor="state">state: </label>
                    <input type="text" id="state" name="state" placeholder="state" value={state} onChange={(e) => setState(e.target.value)} />
                    <label htmlFor="country">country: </label>
                    <input type="text" id="country" name="country" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className="item">
                    <img src="/Img/cards.png" alt="" />
                    {/* <img src="/Img/cards.png" alt="" />
                    <img src="/Img/cards.png" alt="" />
                    <img src="/Img/cards.png" alt="" />
                    <img src="/Img/cards.png" alt="" /> */}
                </div>
                <div className="item">

                    <label htmlFor="cardNo">card No. </label>
                    <input type="number" id="cardNo" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

                    <label htmlFor="cardExpiry">card Expiry </label>
                    <input type="number" id="cardExpiry" placeholder="Expiry Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                </div>

                <div className="item">
                    <label htmlFor="cardCVV">card CVV </label>
                    <input type="number" id="cardCVV" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />

                    <label htmlFor="cardName">card Name </label>
                    <input type="text" id="cardName" name="cardName" value={cardName} placeholder="card holder name" onChange={(e) => setCardName(e.target.value)} />
                </div>

                <div className="total">
                    <div className="totalpricetext">{`Total Amount: `}</div>
                    <div className="totalprice">
                        ₹{totalPrice()}
                    </div>
                </div>
                <button onClick={handlePayment}>Pay Now</button>
            </form>


            <p className="paymentMessage">{paymentMessage}</p>
            {showConfetti && <Confetti />}
        </div>
    )
}

export default Pay
