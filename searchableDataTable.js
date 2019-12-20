// console.log("sanity-check");

const tableData = () => {
  const searchData = [];
  const tableEl = document.getElementById("portexe-data-table");
  // tableEl has two children: thead and tbody
  Array.from(tableEl.children[1].children).forEach(_bodyRowEl => {
    searchData.push(
      // push an array of the string values listed in each table row
      Array.from(_bodyRowEl.children).map(_cellEl => {
        return _cellEl.innerHTML;
      })
    );
  });
  return searchData;
};

const createSearchInputElement = () => {
  const el = document.createElement("input");
  el.classList.add("portexe-search-input");
  el.id = "portexe-search-input";
  return el;
};

const search = (arr, searchTerm) => {
  if (!searchTerm) return arr;
  // OTHERWISE RETURN MATCH or ROW WITH MATCHING DATA...
};

const init = () => {
  document
    .getElementById("portexe-search-root")
    .appendChild(createSearchInputElement());

  const initialTableData = tableData(); // set initial table to an array of strings

  const searchInput = document.getElementById("portexe-search-input");
  searchInput.addEventListener("keyup", e => {
    // console.log(e.target.value);
    tableData();
  });
};

init();
