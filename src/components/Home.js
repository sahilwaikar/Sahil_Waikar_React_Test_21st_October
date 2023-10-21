import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../redux/actions';

const Home = ({ products, loading, error, fetchProducts, addToCart }) => {
    useEffect(() => {
        // Fetch products when the component mounts
        fetchProducts();
    }, [fetchProducts]);

    const handleAddToCart = (product) => {
        addToCart(product); // Dispatch an action to add the product to the cart
    };

    return (
        <div>
            <h2>Product List</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {products && products.length === 0 && <p>No products available.</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products, // Assuming you have a 'products' property in your Redux state
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()), // Assuming you have a fetchProducts action
        addToCart: (product) => dispatch(addToCart(product)), // Dispatch an action to add the product to the cart
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


