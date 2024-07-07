export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id !== action.payload;
            }),
        }
    }

    if (action.type === "ADD_ITEM") {
        const newItem = action.payload;
        const existingItemIndex = state.item.findIndex((item) => item.id === newItem.id);

        // If the item already exists in the cart, update the quantity of that item
        if (existingItemIndex !== -1) {
            const updatedItem = {
                ...state.item[existingItemIndex],
                quantity: state.item[existingItemIndex].quantity + newItem.quantity,
            };
            const updatedItems = [...state.item];
            updatedItems[existingItemIndex] = updatedItem;

            // Calculate the total items and total amount
            const totalItem = state.totalItem + newItem.quantity;
            const totalAmount = state.totalAmount + (newItem.price * newItem.quantity);

            return {
                ...state,
                item: updatedItems,
                totalItem,
                totalAmount,
            };
        }

        // If the item does not exist in the cart, add the new item to the cart
        const items = [...state.item, newItem];

        // Calculate the total items and total amount
        const totalItems = state.totalItems + newItem.quantity;
        const totalAmount = state.totalAmount + (newItem.price * newItem.quantity);

        return {
            ...state,
            item: items,
            totalItems,
            totalAmount,
        };
    }

    if (action.type === "CLEAR_CART") {
        return { ...state, item: [] }
    }

    if (action.type === "INCREMENT") {
        let updatedCart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity + 1 }
            }
            return curElem;
        })

        return { ...state, item: updatedCart }
    }

    if (action.type === "DECREMENT") {
        let updatedCart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity - 1 }
            }
            return curElem;
        }).filter((curElem) => {
            return curElem.quantity !== 0;
        });
        return { ...state, item: updatedCart }
    }

    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce((accum, curVal) => {
            let { price, quantity } = curVal;
            accum.totalItem += quantity;
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount
            return accum;
        }, {
            totalItem: 0,
            totalAmount: 0,
        })
        return { ...state, totalItem, totalAmount }
    }
    return state;
}