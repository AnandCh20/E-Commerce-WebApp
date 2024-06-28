import React, { useState, useEffect } from "react";

const Cards = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data.products); // Assuming the API response contains a 'products' array
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 mx-2 my-2 px-2">
            {products.map((product, index) => {
                const { id, thumbnail, title, description, price, discountPercentage } = product;
                const discountedPrice = (price - (price * (discountPercentage / 100))).toFixed(2);

                return (
                    <div className="col px-2 py-2 rounded-4" key={index}>
                        <div className="col border px-2 py-2 rounded-4">
                            <figure className="container py-2">
                                <img
                                    src={thumbnail}
                                    alt={title}
                                    className="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                />
                            </figure>
                            <div className="container text-start bg-dark text-white rounded-4 px-2 py-2" style={{ height: "100%", width: "100%" }}>
                                <h5 className="text-white">{title}</h5>
                                <p className="text-white">{description}</p>
                                {!discountPercentage ? (
                                    <p className="text-white">₹{price}</p>
                                ) : (
                                    <div className="text-white">
                                        <span>₹{discountedPrice}</span>
                                        <span style={{ marginLeft: '10px', textDecoration: "line-through" }}>₹{price}</span>
                                        <span style={{ marginLeft: '10px' }}>{discountPercentage}% Off</span>
                                    </div>
                                )}
                                <div className="container py-2">
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={() => handleAddToCart(product)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
