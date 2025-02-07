// let arr = [3, 5, 8, 9, 12, 14]
// No need to do this:
// let a = arr[0]
// let b = arr[1]
// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)
// let [a, , b, ...rest] = arr
// console.log(a, b, rest)
// let { a, b } = { a: 1, b: 5 }
// console.log(a, b)

// Spread Operator
// let arr1 = [3, 5, 8]
// let obj1 = { ...arr1 }
// const obj = { ...true, ..."testing", ...10 }; // Output --> {0: 't', 1: 'e', 2: 's', 3: 't', 4: 'i', 5: 'n', 6: 'g'}
// console.log(obj)

// function sum(v1, v2, v3) {
//   return v1 + v2 + v3
// }

// console.log(sum(...arr1)) // console.log(sum.apply(null, arr1)); --> Both gives same output
// console.log(sum(-1, ...arr1, 2, ...[3])) 

// let obj2 = {
//   name: "Harry",
//   company: "Company xyz",
//   address: "XYZ"
// }

// console.log({ ...obj2, name: "John", company: "ABC" })
// console.log({ name: "John", company: "ABC", ...obj2 }) // This will print the obj2 object without changing any values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const objectAssign = Object.assign(
        {
                set foo(val) {
                        console.log(val);
                },
        },
        { foo: 1 },
);
// let a = objectAssign.foo;
// console.log(a)
// Logs "1"; objectAssign.foo is still the original setter
const spread = {
        set foo(val) {
                console.log(val);
        },
        ...{ foo: 1 },
};
// let a = spread.foo;
// console.log(a)
// Nothing is logged; spread.foo is 1




const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }

// const merge = (...objects) => ({ ...objects });
// const mergedObj1 = merge(obj1, obj2);
// const mergedObj2 = merge({}, obj1, obj2);
// console.log(mergedObj1)    // Output --> { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }
// console.log(mergedObj2)    // Output --> { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

// const merge = (...objects) =>  objects.reduce((acc, cur) => ({ ...acc, ...cur }));
// const mergedObj1 = merge(obj1, obj2);
// console.log(mergedObj1)   //  Output --> { foo: 'baz', x: 42, y: 13 }