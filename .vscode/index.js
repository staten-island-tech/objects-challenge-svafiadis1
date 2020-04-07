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

 const Haoran = {
     name: "how",
     dob: 2001,
     year: "Senior",
     age: function(){
         return 2020 - this.dob;
     }
};

 const Eric = Haoran.year; //reference to Haoran
 Eric.name = "Eric";
 const Christian = {};
 Christian.dob = Haoran.dob
 Christian.dob = 2003;