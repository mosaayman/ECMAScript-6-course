// lesson 16 ================================================
console.log("================================================");

/*
    Destructuring
    - Object
    - Array
    - Parametar
*/
var book = "Video",
  video = "Book";

// var stash = book;

// book = video;

// video = stash;

[book, video] = [video, book];

console.log(`Book Is ${book} and video Is ${video}`);

// lesson 17-18 ================================================
console.log("================================================");

const user = {
  username: "mosa",
  city: "Egypt",
  skills: {
    html: "80%",
    css: "85%",
    js: ["Vurejs", "Reactjs", "Angularjs"],
  },
};

// const {
//   username,
//   city,
//   skills: {
//     html,
//     css,
//     js: [js1, js2, js3],
//   },
// } = user;

// function showMyInfo(user) {
//   console.log(
//     `My name Is ${user.username} and I live in ${user.city} I have ${user.skills.js[0]} and ${user.skills.js[1]} and ${user.skills.js[2]} skills`
//   );
// }

function showMyInfo({
  username,
  city,
  skills: {
    html,
    css,
    js: [js1, js2, js3],
  },
} = user) {
  console.log(
    `My name Is ${username} and I live in ${city} I have ${js1} and ${js2} and ${js3} skills`
  );
}

showMyInfo(user);

// lesson 19 ================================================
console.log("================================================");

// const username_ = "mosa",
//   website_ = "elzero.web.eg";

// const user_ = {
//   username_: username_,
//   website_: website_,
// };

// const user_ = {
//   myMethod: function (paraml) {
//     return paraml;
//   },
// };
// console.log(user_.myMethod("hello from parameter"));

const myVariable = "Key";

const myObject = {
  myProperty: "MyValue",
  [myVariable]: "Value",
};

myObject[myVariable] = "Value";

console.log(myObject);

// lesson 20 ================================================
console.log("================================================");
