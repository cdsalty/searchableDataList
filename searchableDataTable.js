// console.log("sanity-check");

const tableData = () => {
  const searchData = [];
  const tableEl = document.getElementById("portexe-data-table");
  // tableEl has two children: thead and tbody
  Array.from(tableEl.children[1].children).forEach(_bodyRowEl => {
    searchData.push(
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
  // .filter(), .find(), .includes()
  return arr.filter(row => {
    return row.find(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};

// Refresh Table

const refreshTable = data => {
  const tableBody = document.getElementById("portexe-data-table").children[1]; // this is the '<tbody>'
  tableBody.innerHTML = "";
  // run loop within a loop (for 2 dimensional array)
  data.forEach(row => {
    const curRow = document.createElement("tr");
    row.forEach(dataItem => {
      const curCell = document.createElement("td");
      curCell.innerText = dataItem;
      curRow.appendChild(curCell);
    });
    tableBody.appendChild(curRow);
  });
};

const init = () => {
  document
    .getElementById("portexe-search-root")
    .appendChild(createSearchInputElement());

  const initialTableData = tableData(); // set initial table to an array of strings

  const searchInput = document.getElementById("portexe-search-input");
  searchInput.addEventListener("keyup", e => {
    refreshTable(search(initialTableData, e.target.value));
  });
};

init();
