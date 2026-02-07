export let add = (x, y) => x + y;
export let sub = (x, y) => x - y;
export let mul = (x, y) => x * y;

export let div = (x, y) => {
    if (y === 0) {
        return "Canot Divide by 'Zero'->0";
    } else {
        return x/y;
    }
};