const name = document.getElementById("name");
const age = document.getElementById("age");
const dogyears= document.getElementById("dogyears");
name.innerText =" christos tzoras";
age.innerText=24;

function showDogYears(age){
  dogyears.innerText=Number(age)*7
  return Number(age)*7
}
dogyears.innerText=showDogYears(age.innerText)

const fakeInputs= document.querySelectorAll(".fake-input")
fakeInputs.forEach(node=> {
  node.classList.add("real-input");
})