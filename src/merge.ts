export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];

    // reversed collection3 to min->max
    const reversedCollection3 = [...collection3].reverse();

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < collection1.length && j < collection2.length && k < reversedCollection3.length) {
        if (collection1[i] <= collection2[j] && collection1[i] <= reversedCollection3[k]) {
            result.push(collection1[i]);
            i++;
        } else if (collection2[j] <= reversedCollection3[k]) {
            result.push(collection2[j]);
            j++;
        } else {
            result.push(reversedCollection3[k]);
            k++;
        }
    }

    while (i < collection1.length) {
        result.push(collection1[i]);
        i++;
    }

    while (j < collection2.length) {
        result.push(collection2[j]);
        j++;
    }

    while (k < reversedCollection3.length) {
        result.push(reversedCollection3[k]);
        k++;
    }

    return result;
}