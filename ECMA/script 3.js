let x = "nice";

let oldway =
  "hillo i am mosa \n" + "i am a student \n" + (x === "nice" ? "and have a nice day" : "and don't have a nice day") + "i am a web developer " + x;

let newway = 
  `hillo i am mosa 
  i am a student ${x === "nice" ? "and have a nice day" : "and don't have a nice day"}
  i am a web developer ${x} `;

// console.log(oldway);
// console.log(newway);

let username = "mosa",age = 22;
const myHtmlMarkup = `
  <div class="card">
    <h2 class="name">${username}</h2>
    <span class="age">${age}</span>
  </div>
`;

// console.log(myHtmlMarkup);
document.body.innerHTML = myHtmlMarkup;