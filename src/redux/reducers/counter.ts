import { ADD_COUNTER, RESET_COUNTER } from "../actions/actions.types";

const initialState = {
  amount: 0,
  name: "kelvin"
};

const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        amount: action.count
      };
    case RESET_COUNTER:
      return {
        amount: action.count
      };
    default:
      return state;
  }
};

export default counter;
