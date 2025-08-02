import fs from "fs";

// fs.writeFileSync("hello.txt", "hello world");
// fs.writeFileSync("hello.pdf", "hello world");

// fs.writeFile("abc.txt", "hii i am content", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file created");
// });

// fs.writeFileSync("abc.txt", "hii me hu nya");
// fs.appendFileSync("abc.txt", "\nhii me hu nya 2");

// let data = fs.readFileSync("abc.txt", "utf-8");
// console.log(data);

//asynnc method

fs.readFile("abc.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// fs.unlinkSync("hello.pdf");
