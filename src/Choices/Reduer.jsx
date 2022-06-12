import * as types from "./Types";

const initialState = {
  loading: "",
  error: "",
  data: [],
  singleData: [],
  cart : [],
  // cart:[]
};

export const ChoiceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQ:
      return { ...state, loading: "payload" };
    case types.GET_DATA_SUCCESS:
      return { ...state, data: payload };
      case types.GET_CART:
      return { ...state, cart: payload };
    case types.GET_DATA_FAIL:
      return { ...state, error: payload };
    case types.GET_CART:
      return { ...state, cart: payload };

    case types.GET_SINGLE_DATA_REQ:
      return { ...state, loading: "payload" };
    case types.GET_SINGLE_DATA_SUCCESS:
      return { ...state, singleData: payload };
    case types.GET_SINGLE_DATA_FAIL:
      return { ...state, error: payload };

    // if (types === "REMOVE_ITEM") {
    //     return {
    //       ...state,
    //       item: state.item.filter((curElem) => {
    //         return curElem.id !== payload;
    //       }),
    //     };
    //   }

    //   if (types === "CLEAR_CART") {
    //     return { ...state, item: [] };
    //   }

    //   if (types === "INCREMENT") {
    //     const updatedCart = state.item.map((curElem) => {
    //       if (curElem.id === payload) {
    //         return { ...curElem, quantity: curElem.quantity + 1 };
    //       }
    //       return curElem;
    //     });

    //     return { ...state, item: updatedCart };
    //   }

    //   if (types === "DECREMENT") {
    //     const updatedCart = state.item
    //       .map((curElem) => {
    //         if (curElem.id === payload) {
    //           return { ...curElem, quantity: curElem.quantity - 1 };
    //         }
    //         return curElem;
    //       })
    //       .filter((curElem) => curElem.quantity !== 0);
    //     return { ...state, item: updatedCart };
    //   }

    //   if (types === "GET_TOTAL") {
    //     let { totalItem, totalAmount } = state.item.reduce(
    //       (accum, curVal) => {
    //         let { price, quantity } = curVal;

    //         let updatedTotalAmount = price * quantity;
    //         accum.totalAmount += updatedTotalAmount;

    //         accum.totalItem += quantity;
    //         return accum;
    //       },
    //       {
    //         totalItem: 0,
    //         totalAmount: 0,
    //       }
    //     );
    //     return { ...state, totalItem, totalAmount };
    //   }

    default:
      return state;
  }
};
