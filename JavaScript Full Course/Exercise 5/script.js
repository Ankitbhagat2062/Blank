// Problem  Set Write JavaScript Program to pretend to look like hacker . Write an async function which will simply display the following Output.
// Initializing Hacker Program . . . 
// Hacking Aashish's UserName . . .
// Aashish Username found aashish17 . . . 
// Connecting to Facebook . . . 
// Try to Use HTML and CSS if possible. 


let Text = ["Initializing Hacker Program ",
  "Reading your Files...",
  "Password files Detected...",
  "Sending all passwords and personal files to server...",
  "Hacking Aashish's UserName ",
  "Aashish Username found aashish17 ",
  "Connecting to Facebook ",
  "Try to Use HTML and CSS if possible",
  "Cleaning up..."];
async function random() {
  let id = [text, text1, text2, text3, text4, text5, text6, text7, text8]
  for (let i = 0; i < id.length; i++) {
    let a = id[i];
    console.log(a);
    setTimeout(() => {
      id[i].innerHTML = Text[i];
      let timeout = 62.5 * (i + 1);
      for (let index = 0; index < (i + 1) * 3; index++) {
        let t = setTimeout(() => {
          if (a.innerHTML.endsWith("...")) {
            a.innerHTML = a.innerHTML.slice(0, a.innerHTML.length - 3)
          }
          else {
            a.innerHTML = a.innerHTML + "."
          }
        }, timeout);
        timeout += 125;
      }
      console.log(id[i]);
    }, (i + 1) * 2000);
  }
}
main = async () => {
  await random();
}
main();