/* const Caroline = {
    name:"Caroline",
    dob: 2004,
    graduated: false,
    age: function() {
        //console.log(this);
        return 2020 - this.dob;
    }
};
 */

/*  const Homer = {
     name: "Homer",
     age: 32,
     family:{
         wife: {
             name: "Marge"
         },
         son: {
             name: "Bart"
         }
     },
     pets: ["cat", "dog"]
 }; */

/*
 const Haoran = {
     name: "how",
     dob: 2001,
     year: "Senior",
     age: function(){
         return 2020 - this.dob;
     }
};
*/
/* 
 const Eric = Haoran.year; //reference to Haoran
 Eric.name = "Eric";
 const Christian = {};
 Christian.dob = Haoran.dob
 Christian.dob = 2003; */
/*
 const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
   */
//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
/*
  const Democrats =  presidents.filter(function(president) {
	return president.party == "D";
});
console.log(Democrats);
*/

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

/*
  const oneTerm =  presidents.filter(function(president) {
    if (president.party == "R"){
    return president.terms == "1";
    }
  })
  
  console.log(oneTerm);
  */

//3) return only the last three presidents
/*
  let lastThree = presidents.slice(9, 12);
  console.log(lastThree);
  */

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
/*
  const twoTermDem =  presidents.filter(function(president) {
    if (president.party == "D"){
    return president.terms == "2";
    }
  }) 
  console.log(twoTermDem);
  */
//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

//Day 2

//const header = document.querySelector(".header");
//const header = document.querySelector("#Idheader");
//const header = document.getElementById("Idheader");
/*
  const items = document.querySelectorAll(".list-item");
  const itemsArr = Array.from(items);
  itemsArr.forEach((el) => (el.style.backgroundColor = "red"));
  */

const header = document.querySelector(".header-two");
const button = document.querySelector(".button");
const background = document.querySelector(".background");
/* button.addEventListener("click", function(){
    header.classList.toggle("Karen");
  });
  */

//header.classList.add("Karen");
// header.classList.remove("Karen");

/* button.addEventListener("click", function () {
  if (background.style.backgroundColor !== "rgb(255, 0, 0)") {
    background.style.backgroundColor = "rgb(255, 0, 0)";
  } else {
    background.style.backgroundColor = "rgb(0, 0, 255)";
  }
});
 */

button.addEventListener("click", function () {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  header.textContent = `rgb(${R}, ${G}, ${B})`;
  background.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
});
