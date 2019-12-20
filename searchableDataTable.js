// console.log("sanity-check");

// TWO DIMENSIONAL ARRAY, [ [], [], [], ]
const tableData = () => {
  const searchData = []; // empty array; to be a two dimensional array
  const tableEl = document.getElementById("portexe-data-table"); // has two children: the thead and tbody
  Array.from(tableEl.children[1].children).forEach(_bodyRowEl => {
    // need to push an array of each of the items
    searchData.push(
      Array.from(_bodyRowEl.children).map(_cellEl => {
        // will return an array of table rows
        return _cellEl.innerHTML;
      })
    );
  });
  console.log(searchData);
};

const createSearchInputElement = () => {
  const el = document.createElement("input");
  el.classList.add("portexe-search-input");
  el.id = "portexe-search-input";
  return el;
};

const init = () => {
  document
    .getElementById("portexe-search-root")
    .appendChild(createSearchInputElement());

  const searchInput = document.getElementById("portexe-search-input");
  searchInput.addEventListener("keyup", e => {
    // console.log(e.target.value);
    tableData();
  });
};

init();
