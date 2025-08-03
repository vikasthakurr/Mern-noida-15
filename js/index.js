let person = {
  fname: "vikas",
  age: 25,
  print: function (city, country) {
    console.log(this.fname, this.age, city, country);
  },
};

let person2 = {
  fname: "pratyush",
  age: 23,
};

//borrowing of a function.....
//call method
// person.print.call(person2, "delhi", "India");

//apply method
// person.print.apply(person2, ["delhi", "India"]);

//bind method

let bind = person.print.bind(person2, "delhi", "India");
bind();
