import { REMOVE_FROM_LIST, ADD_TO_LIST, EDIT } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_LIST:
      let newitem = {};
      newitem.id = action.payload.itemId;
      newitem.name = action.payload.name;
      newitem.date = action.payload.date;
      newitem.time = action.payload.time;
      newitem.memo = action.payload.memo;
      return Object.assign({}, state, {
        items: [...state.items, 
          newitem]
      });
    case REMOVE_FROM_LIST:
      let result = [];
      for (let e of state.items){
        if (e.id!==action.payload.itemId){
          result.push(e);
        }
      }
      return Object.assign({}, state, {
        items: result
      });
    case EDIT:
      let re = [];
      for (let e of state.items){
        if (e.id===action.payload.itemId){
          e.name = action.payload.name;
          e.date = action.payload.date;
          e.time = action.payload.time;
          e.memo = action.payload.memo;
        }
        re.push(e);
      }
      return Object.assign({}, state, {
        items: re
      });
    // case SET_QUANTITY:
    //   let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
    //   state.cartItems[idx].quantity = action.payload.quantity;
    //   return Object.assign({}, state, {
    //     cartItems: [...state.cartItems]
    //   });
    default:
      return state;
  }
}

export default itemReducer;