//var can be redefined and reassigned

// var nameVar = "Andrew";
// var nameVar = "Mike";
// console.log(nameVar);

// //let can be reassigned but not reassigned
// let nameLet = "Jem";
// nameLet = "Julie";
// console.log("let variable:", nameLet);

// //const
// const nameConst = "Anand";
// console.log("Const string:", nameConst);

//let and const are blocked scoped
var inputData = [
  {
    id: 1,
    title: "hippo",
    faveFood: "carrots",
  },
  {
    id: 2,
    title: "Cat",
    faveFood: "carrots",
  },
  {
    id: 3,
    title: "ducks",
    faveFood: "breadcrumbs",
  },
];

findAnimal = function (animal) {
  let filteredData = inputData.find((data) => data.title == animal);
  if (filteredData) {
    return filteredData.faveFood;
  }
};

console.log(findAnimal("ducks"));
