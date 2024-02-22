const roleClassAll = document.querySelectorAll(".role");
const levelClassAll = document.querySelectorAll(".level");
//console.log(levelClassAll);
roleClassAll.forEach((role) => console.log(role.dataset.role));
levelClassAll.forEach((level) => console.log(level.dataset.level));
const roleClassAllArray = Array.from(roleClassAll);
console.log(roleClassAllArray);

//method to filter jobs by filter tags
function filterFunction() {
  const filteredOutRows = roleClassAllArray.filter((role) => {
    return !(role.dataset.role === "frontend");
  });
  console.log(filteredOutRows);
  filteredOutRows.map((row) => {
    return (row.parentNode.parentNode.classList.value = "hidden");
  });
}
