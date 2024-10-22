function showMyInfo(username = "Default User", role = "Default role", theme = "Default theme") {
    // username = username || "Default User";
    // role = role || "Default role";
    // theme = theme || "Default theme";
    return `Hello ${username}, your role is ${role}, and your theme is ${theme}`
}

console.log(showMyInfo())
console.log(showMyInfo("mosa"))
console.log(showMyInfo("mosa", "student"))
console.log(showMyInfo("mosa", "student", "dark"))

console.log('==================================================================')

function sum(x ,y ,z) {
    return x + y + z;
}
console.log(sum(1,2,3));

console.log('==================================================================')

function showInfo(a, b, c, ...MyParams) {
    // console.log(a, b, c, MyParams);
    console.log('Param a', a);
    console.log('Param b', b);
    console.log('Param c', c);
    console.log('Param MyParams', MyParams);

    return 'Console Outpur Done';
}

console.log(showInfo(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20));

console.log('==================================================================')

function addAll(...MyParams) {
    let myNumbers = 0;
    for (let MyParam of MyParams) {
        myNumbers += MyParam;
    }
    return myNumbers;
}

console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20));