//method to filter jobs by filter tags
let filterValue;
let filteredOutRows = [];
let noClassArray = [];

const rowContainer = document.querySelector(".rowContainer");
const clearButton = document.querySelector(".clearButton");

clearButton.addEventListener("click", (event) => {
  console.log("event", event);
  filterValue = "";
  filteredOutRows = [];
  const hiddenRows = Array.from(document.querySelectorAll(".hidden"));
  hiddenRows.forEach((row) => row.classList.replace("hidden", "jobRows"));
  return;
});

function filterFunction(filterKey, element) {
  // the text value that got clicked and needs to be filter by
  filterValue = element.textContent.toLowerCase();
  // grab every span that's in filter section
  // filterKeyClassAll = document.querySelectorAll("." + filterKey);
  // make an array
  const filterKeyClassAllArray = Array.from(
    document.querySelectorAll("." + filterKey)
  );

  const filterTags = Array.from(document.querySelectorAll(".filterTags"));

  // this function finds the filter tags where the passed filterKey class isn't present in any child spans
  function findTagsWithoutFilterKeyClass(inputTag, i, arr) {
    const filterTagsChildren = Array.from(inputTag.children);
    // for (var i = 0; i < filterTagsChildren.length; i++) {
    const isClassPresent = filterTagsChildren.some(
      (tag) => tag.nodeType != 3 && tag.className === filterKey
    );
    if (!isClassPresent) {
      noClassArray.push(arr[i]);
    }
    return filteredOutRows;
  }
  filterTags.map((filterTag, i, arr) =>
    findTagsWithoutFilterKeyClass(filterTag, i, arr)
  );

  // run filter function on this array to form an array of the ones that don't match with filter value

  filteredOutRows = filterKeyClassAllArray.filter((row) => {
    if (filterKey in row.dataset) {
      console.log(row.dataset[filterKey].includes(filterValue));
      return !row.dataset[filterKey].includes(filterValue);
    }
  });

  console.log("filterdOutRows", filteredOutRows);
  console.log("noClassArray", noClassArray);
  const finalFilteredOutList = filteredOutRows.concat(noClassArray);
  console.log("finalFilteredOutList", finalFilteredOutList);
  finalFilteredOutList.map((row) => {
    return (
      row.parentNode.parentNode.classList.add("hidden") ||
      row.parentNode.classList.add("hidden")
    );
  });
}
