const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);

const findMin = (...args) => Math.min(...args);
findMin(1, 4, 12, -3);
findMin(1, -1);
findMin(3, 1);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];
doubleAndReturnArgs([1, 2, 3], 4, 4);
doubleAndReturnArgs([2], 10, 4);

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const update = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}