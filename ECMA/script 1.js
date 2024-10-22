function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
  return "Done";
}
console.log(letTest());
const S = {
  name: "John",
  age: 30,
};
Object.freeze(S);
S.name = "Pete";
console.log(S);

let x = function (z) {
  return z * 2;
};
console.log(x(2));

let y = (c) => 1 + c;
console.log(y(2));
