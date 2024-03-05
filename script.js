//method to filter jobs by filter tags
let filterValue;
let filteredOutRows = [];

const rowContainer = document.querySelector(".rowContainer");
const clearButton = document.querySelector(".clearButton");

// const allFilterOut = allRows.filter((row) =>
//   Array.from(row.childNodes).forEach((elem) => console.log(elem.children))
// );
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

  console.log("Rows with " + filterKey + " class", filterKeyClassAllArray);

  // select elements that doesn't have class of .filterKey
  // function rowsWithoutClass(inputNodeArray) {
  //   const filteredOut = inputNodeArray.map((inputNode) => {
  //     const childrenOfFilterTag = Array.from(inputNode.childNodes);
  //     const result = childrenOfFilterTag.filter(
  //       (elem) => !(elem.nodeType != 3 && elem.className === filterKey)
  //     );
  //     return result;
  //   });
  //   console.log("filteredOut", filteredOut);
  //   filteredOut.map((row) => {
  //     return row[1].parentNode.parentNode.classList.add("hidden");
  //   });
  //   return filteredOut;
  // }

  const filterTags = Array.from(document.querySelectorAll(".filterTags"));
  //rowsWithoutClass(filterTags);

  // this function finds the filter tags where the passed filterKey class isn't present in any child spans
  function findTagsWithoutFilterKeyClass(inputTag, i, arr) {
    const filterTagsChildren = Array.from(inputTag.children);
    console.log("filterTagsChildren", filterTagsChildren);
    // for (var i = 0; i < filterTagsChildren.length; i++) {
    const isClassPresent = filterTagsChildren.some(
      (tag) => tag.nodeType != 3 && tag.className === filterKey
    );
    console.log("This row has class " + filterKey + " ?", isClassPresent);

    if (!isClassPresent) {
      filteredOutRows.indexOf(arr[i]) === -1
        ? filteredOutRows.push(arr[i])
        : console.log("do nothing");
    }
    return filteredOutRows;
    //}
  }
  filterTags.map((filterTag, i, arr) =>
    findTagsWithoutFilterKeyClass(filterTag, i, arr)
  );

  // run filter function on this array to form an array of the ones that don't match with filter value

  filteredOutRows = filterKeyClassAllArray.filter(
    (row) =>
      !(row.dataset[filterKey] && row.dataset[filterKey].includes(filterValue))
  );

  console.log("filterdOutRows", filteredOutRows);

  filteredOutRows.map((row) => {
    return row.parentNode.parentNode.classList.add("hidden");
  });
}
