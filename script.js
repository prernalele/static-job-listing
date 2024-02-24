const roleClassAll = document.querySelectorAll(".role");
const levelClassAll = document.querySelectorAll(".level");
//console.log(levelClassAll);
roleClassAll.forEach((role) => console.log(role.dataset.role));
levelClassAll.forEach((level) => console.log(level.dataset.level));
const roleClassAllArray = Array.from(roleClassAll);
console.log(roleClassAllArray);

//method to filter jobs by filter tags
function filterFunction(filterKey, element) {
  // the text value that got clicked and needs to be filter by
  const filterValue = element.textContent.toLowerCase();
  // grab every span that's in filter section
  filterKeyClassAll = document.querySelectorAll("." + filterKey);
  // make an array
  const filterKeyClassAllArray = Array.from(filterKeyClassAll);
  // run filter function on this array to form an array of the ones that don't match with filter value
  const filteredOutRows = filterKeyClassAllArray.filter(
    (row) => !(row.dataset[filterKey] === filterValue)
  );
  // map over these to add hidden class on each span that needs to disappear from the results
  filteredOutRows.map((row) => {
    return (row.parentNode.parentNode.classList.value = "hidden");
  });
}
