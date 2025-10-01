import React, { useState } from "react";

const CheckOut = ({ data, removeItemFromCart }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
    };

    const totalPrice = data.reduce((sum, item) => {
        const price = parseFloat(item.productPrice.replace(/[^0-9.]/g, "")) || 0;
        return sum + price;
    }, 0);

    return (
        <>
            <div className="max-w-4xl mx-auto my-10 p-5">
                <h1 className="text-3xl font-bold text-gray-700 mb-5">Checkout</h1>

                <div className="mx-10 my-10 ">
                    <p className="text-3xl font-semibold text-gray-700">Total : ${" "}{totalPrice}</p>
                </div>

                {/* Billing Form */}
                <div className="flex-1 bg-gray-100 p-5 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={form.address}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300"
                            required
                        />
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={form.city}
                                onChange={handleChange}
                                className="flex-1 p-3 rounded-lg border border-gray-300"
                                required
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={form.state}
                                onChange={handleChange}
                                className="flex-1 p-3 rounded-lg border border-gray-300"
                                required
                            />
                            <input
                                type="text"
                                name="zip"
                                placeholder="ZIP Code"
                                value={form.zip}
                                onChange={handleChange}
                                className="flex-1 p-3 rounded-lg border border-gray-300"
                                required
                            />
                        </div>

                        <h2 className="text-lg font-semibold mt-4">Payment Details</h2>
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={form.cardNumber}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300"
                            required
                        />
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                value={form.expiry}
                                onChange={handleChange}
                                className="flex-1 p-3 rounded-lg border border-gray-300"
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={form.cvv}
                                onChange={handleChange}
                                className="flex-1 p-3 rounded-lg border border-gray-300"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
                            onClick={removeItemFromCart}
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CheckOut;
