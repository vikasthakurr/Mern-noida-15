// import http from "http";
// import fs from "fs";

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url == "/home") {
//     const data = fs.readFile("home.html", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       res.end(data);a
//     });
//   }
//   if (req.url == "/about") {
//     const data = fs.readFile("about.html", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       res.end(data);
//     });
//   }
// });

// server.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });

import express from "express";

const server = express();

server.use(express.json());
// server.use(express.urlencoded({ extended: true }));
const PORT = 3000;

server.use((req, res, next) => {
  console.log("middleware 1 executed");
  if (req.body.name == "vikas") {
    next();
  } else {
    res.send("you are not authorized");
  }
});

server.use((req, res, next) => {
  console.log("middleware 2 executed");
  if (req.body.role == "admin") {
    next();
  } else {
    res.send("you are not admin");
  }
});
// server.get("/home", (req, res) => {
//   res.send("hello from home");
// });

// server.get("/about", (req, res) => {
//   res.send("hello from about");
// });

// server.get("/contact", (req, res) => {
//   res.send("hello from contact");
// });

// server.get("/help", (req, res) => {
//   res.send("hello from help");
// });

server.post("/login", (req, res) => {
  //   userName = req.body.name;
  res.send(`hello ${req.body.name}`);
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
