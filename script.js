//method to filter jobs by filter tags
let filterValue;
let filteredOutRows = [];
let noClassArray = [];
let allPickedFilters = [];

const rowContainer = document.querySelector(".rowContainer");
const clearButton = document.querySelector(".clearButton");
const pickedFilterSection = document.querySelector(".pickedFilterTags");

clearButton.addEventListener("click", (event) => {
  filterValue = "";
  filteredOutRows = [];
  allPickedFilters.length = 0;
  displayFilterSelection("");
  const hiddenRows = Array.from(document.querySelectorAll(".hidden"));
  hiddenRows.forEach((row) => row.classList.remove("hidden"));
  return;
});

function displayFilterSelection(filterValue) {
  let filterArray;

  if (filterValue === "") {
    filterArray = [];
  } else {
    filterArray = [filterValue];
    allPickedFilters.push(filterValue);
  }

  for (i = 0; i < filterArray.length; i++) {
    const newFilterContainer = document.createElement("span");
    newFilterContainer.classList.add("filterSpan");

    const pickedFilterText = document.createElement("span");

    //create an individual x button for filters
    const dismissButton = document.createElement("button");
    dismissButton.classList.add("dissmissFilter");
    //to add a multiplication symbol
    dismissButton.innerHTML = "&times";
    // makes dismiss or x button functional
    dismissButton.addEventListener("click", (event) => {
      const parentOfCurrentElement = event.target.parentNode;
      parentOfCurrentElement.remove();
      const filterToRemove =
        event.target.parentNode.firstChild.textContent.toLowerCase();
      allPickedFilters.pop(filterToRemove);

    });

    pickedFilterSection.appendChild(newFilterContainer);
    const newFilterText = document.createTextNode(filterValue.toUpperCase());

    /* const filterPicked = newFilterElement.appendChild(newFilterText);
    filterPicked.appendChild(dismissFilter); */
    pickedFilterText.appendChild(newFilterText);

    newFilterContainer.appendChild(pickedFilterText);
    newFilterContainer.appendChild(dismissButton);
  }
  if (filterArray.length === 0) {
    const childElementsToClear =
      pickedFilterSection.querySelectorAll(".filterSpan");

    for (i = 0; i < childElementsToClear.length; i++)
      pickedFilterSection.removeChild(childElementsToClear[i]);
  }
}

function filterFunction(filterKey, element) {
  // the text value that got clicked and needs to be filter by
  filterValue = element.textContent.toLowerCase();

  //call a method to display selected filter
  !allPickedFilters.includes(filterValue) &&
    displayFilterSelection(filterValue);

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
      return !row.dataset[filterKey].includes(filterValue);
    }
  });

  const finalFilteredOutList = filteredOutRows.concat(noClassArray);
  finalFilteredOutList.map((row) => {
    return (
      row.parentNode.parentNode.classList.add("hidden") ||
      row.parentNode.classList.add("hidden")
    );
  });
}
