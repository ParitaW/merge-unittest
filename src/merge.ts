export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];

  // reversed collection3 to min->max
  //   const reversedCollection3 = [...collection3].reverse();

  let i = 0; // min -> max
  let j = collection2.length - 1; // max -> min
  let k = 0; // min -> max

  // merge the 1 and 2 collections
  while (i < collection1.length && j >= 0) {
    if (collection1[i] <= collection2[j]) {
      result.push(collection1[i]);
      i++;
    } else {
      result.push(collection2[j]);
      j--;
    }
  }

  // merge remaining elements of collection1 and collection2
  while (i < collection1.length) {
    result.push(collection1[i++]);
  }
  while (j >= 0) {
    result.push(collection2[j--]);
  }

  // merge with collections 3
  let temp = result;
  let m = 0;
  let n = 0;
  const finalResult: number[] = [];
  while (m < temp.length && n < collection3.length) {
    if (temp[m] <= collection3[n]) {
      finalResult.push(temp[m]);
      m++;
    } else {
      finalResult.push(collection3[n]);
      n++;
    }
  }

  // merge remaining elements of temp and collection3
  while (m < temp.length) {
    finalResult.push(temp[m++]);
  }
  while (n < collection3.length) {
    finalResult.push(collection3[n++]);
  }

  return finalResult;
}
