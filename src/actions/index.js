export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const MEMORY_TOTOTAL = "MEMORY_TOTOTAL"
export const MEMORY_TOZERO = "MEMORY_TOZERO"
export const MEMORY_CURRENT = "MEMORY_CURRENT"

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number });
}
export const changeOperation = (operator) => {
    return ({ type: CHANGE_OPERATION, payload: operator })
}
export const clearDisplay = () => {
    return ({ type: CLEAR_DISPLAY, })
}
export const memoryToTotal = () => {
    return ({ type: MEMORY_TOTOTAL })
}
export const memoryToZero = () => {
    return ({ type: MEMORY_TOZERO })
}
export const memoryCurrent = () => {
    return ({ type: MEMORY_CURRENT })
}