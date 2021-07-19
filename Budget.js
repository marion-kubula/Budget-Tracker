let EntryList = [
  {
    id: 0,
    Title: "Shopping",
    Cost: 50,
  },
  {
    id: 1,
    Title: "Car fuel",
    Cost: 40,
  },
  {
    id: 2,
    Title: "Childcare",
    Cost: 500,
  },
  {
    id: 3,
    Title: "Holidays",
    Cost: 300,
  },
  {
    id: 4,
    Title: "Tv Service",
    Cost: 100,
  },
];
const EntryListcontainer = document.getElementById("Entrylist");
let List = [];
for (let i = 0; i < EntryList.length; i++) {
  console.log(EntryList);
  list = EntryList[i];
  let template = `
<div id=${list.id} class='container'>
<div id="titel">${list.Title}</div>
<div id='cost'>$${list.Cost}</div>
<div class='icon'><i class="fa fa-times-circle" aria-hidden="true"></i></div>
</div>
`;
  EntryListcontainer.innerHTML += template;
}

const budgetEL = document.querySelector("#value");
const remainingEL = document.querySelector("#remain");
const spendEL = document.querySelector("#spend");
const forminput = document.getElementById("#value");
const removeEl = document.querySelector(".icon");
const searchEL = document.querySelector("#search");
// const saveExpenseEl=document.querySelector('#btn')

//budgersection
const editEl = document.querySelector(".edit");
const valueEl = document.querySelector("#value");
const budget = document.getElementById("bud");
editEl.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  if (!budget.classList.contains("show-value")) {
    budget.classList.add("show-value");
  }
  if (valueEl.classList.contains("show-value")) {
    valueEl.classList.remove("show-value");
  }
});

//search bar
searchEL.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredList = EntryList.filter((list) => {
    return  list.Title.toLowerCase().includes(searchString) 
      
    
  });
  searchEL.textContent = filteredList;
});

//total of spent so far//
const Totalcost = EntryList.reduce((total, item) => total + item.Cost, 0);
console.log(Totalcost);
spendEL.innerHTML = Totalcost;

//remaining balance//
console.log(valueEl.value)
const budgetValue = valueEl.value.slice(1 )||0
const remaining = budgetValue - Totalcost;
console.log(remaining);
remainingEL.textContent = remaining;

//addexpense
let expense;
const addExpense = (e) => {
  console.log(e);
  e.preventDefault();
  const name = document.getElementById("titel").value;
  const cost = document.getElementById("costs").value;
   expense = {
    id: EntryList.length,
    Title: name,
    Cost: cost,
  };
};
console.log(expense, "expense object----");


EntryList.push(expense);
const template = `
<div class='container'>
<div id="titel">${expense.Title}</div>
<div id='cost'>$${expense.Cost}</div>
<div><i class="fa fa-times-circle" aria-hidden="true"></i></div>
</div>
`;
EntryListcontainer.innerHTML += template;
console.log(EntryList, "after pushing");

document.getElementById("expense-form").addEventListener("submit", addExpense);
addexpense.innerHTML = expense;
addexpense();
//remove item
let removeditem;
removeEl.addEventListener("click", (e) => {
  const item = e.currentTarget.classList;
  removeditem.EntryList.classList.remove(item);
   EntryListcontainer.innerHTML =removeditem
});
 