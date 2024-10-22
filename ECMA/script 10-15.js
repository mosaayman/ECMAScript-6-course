// lesson 11 ================================================
console.log('================================================');

let x = 'Elzero Web School';
console.log(x.includes('eb', 8));
console.log(x.repeat(5));

// lesson 12-13 =============================================
console.log('================================================');

var user = {
    name: 'Elzero',
    age: 38,
    country: 'Egypt',
    gender : 'male',
    // website: 'elzero.web.eg'
    langs: {
        css: '70%',
        js: '80%',
        html: '100%'
        // python: '20%'
    }
};

// var u = user.name,
//     a = user.age,
//     c = user.country,
//     g = user.gender,
//     w = user.website;

// const {name: u , age, country, gender, website = 'Default' , langs: {css , html ,python = '10%'}} = user;
// console.log(`my name is ${u} my age is ${age} my country ${country} i am ${gender} and my website ${website} and my langs ${css} and ${html} and ${python}`);
const { css, html, js } = user.langs;
console.log(css, html, js);

// lesson 14-15 =============================================
console.log('================================================');


const food = ["banana","apple","orange","pineapple","cherry",["mango","papaya","guava", ["RedOrange", "Orange"]]];

[ a, , c, d, e = 'watermelon' , [q, w, z,[ o1, o2 , o3 = 'pineapple'] ] ] = food;

console.log(`i like ${a}, , ${c}, ${d} and ${e} also like ${q}, ${w}, ${z} and ${o3} but also like ${o1} and ${o2}`);

const proten = ['milk', 'egg', 'cheese', 'yogurt'];
[ a, c, ...otherProteins] = proten;
console.log(`i like ${a} and ${c} and ${otherProteins}`);