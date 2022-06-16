
export function thingy(array) {
    return array.length;
}

export function thirdItem(array) {
    return array[2];
}

export function firstLast(input) {

    const keys = Object.keys(input);
    
    const firstKey = keys[0];

    const lastKey = keys[keys.length - 1];

    const lastValue = input[lastKey];

    return {
        firstKey: firstKey, 
        lastValue: lastValue,
    };

}