"use strict";

function Employee() {
  this.firstName = null;
  this.lastName = null;
}

function Clinician() {
  this.clinician = "clinician";
  this.expertise = "";
}

function Operations() {
  this.responsibility = "";
}


Operations.prototype = new Employee();

Clinician.prototype = new Employee();



function Department() {
  this.name = "";
}

function fieldOffice() {
  this.city = "";
}

// function Headquarters() {

// }


fieldOffice.prototype = new Department();

// Headquarters.prototype = new Department();

// employee 1

var Debbie = new Employee();

Debbie.firstName = "Debbie";
Debbie.lastName = "Harris";
Debbie.name = "Field Office";
Debbie.city = "Baltimore";
Debbie.responsibility = "Clinician";
Debbie.expertise = "phrenologist";

console.log('Debbie', Debbie);


var DebbieDoes = `${Debbie.firstName} ${Debbie.lastName} works as a ${Debbie.responsibility}, in the ${Debbie.city} ${Debbie.name}, and is a ${Debbie.expertise}!`;

console.log(DebbieDoes);


// employee 2

var Bob = new Employee();

Bob.firstName = "Bob";
Bob.lastName = "Blue";
Bob.name = "Field Office";
Bob.city = "Miami";
Bob.responsibility = "Revenue";
Bob.expertise = "Therapist";

console.log('Bob', Bob);


var BobDoes = `${Bob.firstName} ${Bob.lastName} works as a ${Bob.responsibility}, in the ${Bob.city} ${Bob.name}, and is a ${Bob.expertise}!`;

console.log(BobDoes);










