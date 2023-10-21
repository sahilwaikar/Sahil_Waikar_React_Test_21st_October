// import {
//     FETCH_PRODUCTS_REQUEST,
//     FETCH_PRODUCTS_SUCCESS,
//     FETCH_PRODUCTS_FAILURE,
//     ADD_TO_CART,
//     REMOVE_FROM_CART,
//     INCREMENT_QUANTITY,
//     DECREMENT_QUANTITY,
//   } from './actions';
  
//   const initialProductState = {
//     products: [],
//     loading: false,
//     error: null,
//   };
  
//   const initialCartState = {
//     cart: [],
//   };
  
//   // Reducer for product data
//   const productReducer = (state = initialProductState, action) => {
//     switch (action.type) {
//       case FETCH_PRODUCTS_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null,
//         };
//       case FETCH_PRODUCTS_SUCCESS:
//         return {
//           ...state,
//           products: action.payload,
//           loading: false,
//         };
//       case FETCH_PRODUCTS_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   // Reducer for the cart
//   const cartReducer = (state = initialCartState, action) => {
//     switch (action.type) {
//       case ADD_TO_CART:
//         const newItem = action.payload;
//         const existingItemIndex = state.cart.findIndex((item) => item.productId === newItem.productId);
//         if (existingItemIndex !== -1) {
//           // If the item already exists in the cart, update the quantity
//           state.cart[existingItemIndex].quantity += newItem.quantity;
//         } else {
//           // If it's a new item, add it to the cart
//           state.cart.push(newItem);
//         }
//         return { ...state };
  
//       case REMOVE_FROM_CART:
//         // Remove an item from the cart based on the product ID
//         const updatedCart = state.cart.filter((item) => item.productId !== action.payload);
//         return { ...state, cart: updatedCart };
  
//       case INCREMENT_QUANTITY:
//         // Increment the quantity of an item in the cart
//         state.cart.find((item) => item.productId === action.payload).quantity += 1;
//         return { ...state };
  
//       case DECREMENT_QUANTITY:
//         // Decrement the quantity of an item in the cart
//         const itemToDecrement = state.cart.find((item) => item.productId === action.payload);
//         if (itemToDecrement.quantity > 1) {
//           itemToDecrement.quantity -= 1;
//         }
//         return { ...state };
  
//       default:
//         return state;
//     }
//   };
  
//   export { productReducer, cartReducer };
  
  import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
  } from './actions';
  
  const initialProductState = {
    products: [],
    loading: false,
    error: null,
  };
  
  export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  const initialCartState = {
    cart: [],
  };
  
  export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.productId !== action.payload),
        };
      case INCREMENT_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.productId === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case DECREMENT_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.productId === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      default:
        return state;
    }
  };
  