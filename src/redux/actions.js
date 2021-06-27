export const ADD_TIMESTAMP = "ADD_TIMESTAMP";
export const COUNTER = "COUNTER";

export function addTimestampAction(timestamp) {
    return {
        type: ADD_TIMESTAMP,
        payload: timestamp,
    }
}

export function counterAction() {
    return {
        type: COUNTER,
    }
}
