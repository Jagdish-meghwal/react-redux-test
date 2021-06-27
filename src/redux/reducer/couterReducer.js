import { COUNTER } from "../actions";
import { counter } from "../states";


export const counterReducer = (state = counter, action) => {
    let newCount;
    switch (action.type) {
        case COUNTER:
            newCount = state + 1;
            return newCount;
        default:
            return state;

    }
}
