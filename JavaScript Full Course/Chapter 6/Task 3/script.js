

console.assert("err" != false)
console.assert("err" == false)
console.clear();
console.log("log")
let obj = {a:1,b:2,c:3}
console.table(obj);
console.info("info")
console.warn("warn")
console.error("err")

console.time("forLoop")

for (let i = 0; i < 500; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")