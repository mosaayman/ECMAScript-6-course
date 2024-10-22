let arrayOne = [1,2,3],arrayTwo = [4,5,6];
console.log(arrayOne.concat(arrayTwo));

Allarrays = [...arrayOne,...arrayTwo];
console.log(Allarrays);

function sum(x,y,z){
    return x+y+z;
}
const myNumbers = [1,2,3];
console.log(sum(...myNumbers));

arrayOne = [...arrayTwo];
arrayOne.push(7,8,9)
console.log(arrayOne,arrayTwo)
console.log(Math.min(...arrayOne))