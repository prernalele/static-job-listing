bodyTag = document.getElementById("")

/* fetch('./data.json')
    .then((response)=> response.json())
    .then((json)=> {
        console.log(json)
        for ( let i=0; i< json.length; i++ ) {
           parentDiv = document.createElement("div")
           parentDiv.id = 'parent' + json[i].id
          document.body.appendChild(parentDiv)
        }
        const parent1 = document.getElementById('parent1')
        
    }) */


/*  const listingOne = document.getElementById("1")

console.log(listingOne.dataset)

const jobListArray = Object.entries(listingOne.dataset)
console.log("jobListArray", jobListArray)

console.log('jobListArray keys', Object.keys(listingOne.dataset))

listingOne.innerHTML = Object.keys(listingOne.dataset)[0]
listingOne.inner */ 
const listOfRoles = document.getElementsByClassName("role")
const jobRows = document.getElementsByClassName("jobRows")
console.log(listOfRoles[0].dataset["role"])

for (i = 0; i < jobRows.length; i++) {
  arrayOfRoles = [];
  console.log(listOfRoles[i].dataset["role"]);
  const roleName = listOfRoles[i].dataset["role"];
  arrayOfRoles.push(roleName);
}
