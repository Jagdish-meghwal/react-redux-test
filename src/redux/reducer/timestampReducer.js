import { ADD_TIMESTAMP } from "../actions";
import { timestamps } from "../states";


export const timestampReducer = (state = timestamps, action) => {
    let newTimestamps;
    switch (action.type) {
        case ADD_TIMESTAMP:
            newTimestamps = [...state];
            newTimestamps.push(action.payload);
            return newTimestamps;
        default:
            return state;

    }
}
