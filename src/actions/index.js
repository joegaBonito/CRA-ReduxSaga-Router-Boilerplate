export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SYNCHRONIZE = 'SYNCHRONIZE';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function synchronize() {
    return {
        type: SYNCHRONIZE
    }
}