const expenseName = document.getElementById("expenseName");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalEl = document.getElementById("total");

let total = 0;

addBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = expenseName.value.trim();
    const amt = parseFloat(amount.value);
    const cat = category.value;

    if (name === "" || isNaN(amt) || amt <= 0 || cat === "") {
        alert("Please fill all fields correctly");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${cat}</td>
        <td>₹${amt}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    expenseList.appendChild(row);

    total += amt;
    updateTotal();

    row.querySelector(".deleteBtn").addEventListener("click", function () {
        total -= amt;
        row.remove();
        updateTotal();
    });

    expenseName.value = "";
    amount.value = "";
    category.value = "";
});

function updateTotal() {
    totalEl.textContent = total.toFixed(2);
}
