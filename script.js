"use strict"

//*  ?? (null/undefined)
//*  ?.
//* Array.from()
//* elem.matches("selector")
//* elem.closest("selector")
//* writable 
//* enumerable
//* configurable
//!
//* Object.getOwnPropertyDescriptor(obj, "propertyName")
//* Object.defineProperty(obj, "propertyName", {writable: false});
//* Object.preventExtensions(obj)
//* Object.freeze(obj)
//! Map()
//* new Map()
//* map.set(key, value)
//* map.get(key)
//* map.has(key)
//* map.delete(key)
//* map.clear()
//* map.size()
//* map.keys()
//* map.values()
//* map.entries()
//* map.forEach((value, key, map))
//* new Map(Object.entries(user))
//* Object.fromEntries(map)
//! Set
//* new Set()
//* set.add(value)
//* set.delete(value)
//* set.has(value)
//* set.clear()
//* set.size
//* set.forEach((value, valueAgain, set) => {});
//* set.values()

//? 17: (**) Сложная задача на вычисление количества страниц
const amountOfPages = (summary) => {
    let str = '', res = 0;
    for (let i = 1; str.length < summary; i++) {
        str += i;
        res = i;
    }
    return res;
};
console.log(amountOfPages(185));
//? 18: (**) Сложная задача на работу со строками
const isPangram = (string) => {
    const letters = "qwertyuiopasdfghjklzxcvbnm";
    for (let char of letters) if (string.toLowerCase().indexOf(char) === -1) return false;
    return true;
};
console.log(isPangram("Hello world"));
//? 19: (**) Сложная задача на работу с рекурсией
const deepCount = (a) => {
    let count = 0;
    for (let value of a) {
        if (Array.isArray(value)) {
            count += deepCount(value) + 1;
        } else count++;
    }
    return count;
};
console.log(deepCount([[[[[[[[[]]]]]]]]]));
